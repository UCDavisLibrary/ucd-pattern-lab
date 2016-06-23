module.exports = function (gulp, config, tasks) {
  'use strict';
  var cached = require('gulp-cached');
  var eslint = require('gulp-eslint');
  var sourcemaps = require('gulp-sourcemaps');
  var uglify = require('gulp-uglify');
  var concat = require('gulp-concat');
  var gulpif = require('gulp-if');
  var browserSync = require('browser-sync');
  var mainBowerFiles = require('main-bower-files');

  // Compile javascript
  gulp.task('js', 'Compile javascript (including Bower libraries), concat and uglify into a single ' + config.js.destName + ' file.', function (done) {
    var sources = [];

    // Add Bower files
    if (config.bowerFiles.enabled) {
      sources = mainBowerFiles({
        paths: {
          bowerDirectory: config.bowerFiles.dir
        },
        filter: '**/*.js'
      });
    }

    sources = sources.concat(config.js.src);

    gulp.src(sources)
      .pipe(sourcemaps.init())
      .pipe(concat(config.js.destName))
      .pipe(gulpif(config.js.uglify, uglify()))
      .pipe(sourcemaps.write((config.js.sourceMapEmbed) ? null : './'))
      .pipe(gulp.dest(config.js.dest))
      .on('end', function () {
        if (config.browserSync.enabled) {
          var server = browserSync.get('server');
          if (server.active) {
            server.reload();
          }
        }
        done();
      });
  });
  tasks.compile.push('js');


  // Validate using ESlint
  gulp.task('validate:js', 'Lint JS using ESlint', function () {
    var src = config.js.src;
    if (config.js.eslint.extraSrc) {
      src = src.concat(config.js.eslint.extraSrc);
    }
    return gulp.src(src)
      .pipe(cached('js'))
      .pipe(eslint())
      .pipe(eslint.format());
  });
  tasks.validate.push('validate:js');


  // Watch for changes
  gulp.task('watch:js', function () {
    var tasks = ['js'];
    if (config.js.eslint.enabled) {
      tasks.push('validate:js');
    }
    return gulp.watch(config.js.src, tasks);
  });
  tasks.watch.push('watch:js');

};
