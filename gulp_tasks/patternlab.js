module.exports = function (gulp, config, tasks) {
  'use strict';
  var exec = require('child_process').exec;
  var browserSync = require('browser-sync');

  // Compile Patternlab
  gulp.task('patternlab', 'Compile Patternlab patterns into html.', function () {
    // Setup a list of all commands to be run
    var command = [
      'php core/builder.php -gp',
      'rsync -r --delete ' + config.images.src + '* ' + config.images.dest
    ].join('&&');

    // Execute the commands
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);

      // Reload if using browsersync
      if (config.browserSync.enabled) {
        var server = browserSync.get('server');
        if (server.active) {
          server.reload();
        }
      }
    });
  });
  tasks.compile.push('patternlab');


  // Watch for changes
  gulp.task('watch:markup', function () {
    var tasks = ['patternlab'];
    return gulp.watch(['source/_patterns/**/*.mustache', 'source/_patterns/**/*.json', 'source/_data/*.json'], tasks);
  });
  tasks.watch.push('watch:markup');

};
