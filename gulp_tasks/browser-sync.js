module.exports = function (gulp, config, tasks) {
  'use strict';
  var browserSync = require('browser-sync').create('server');
  var _ = require('lodash');

  var watchFiles = [];

  // Define CSS files to watch
  if (config.css.enabled) {
    watchFiles.push(config.css.dest + '*.css');
  }

  // Define specific files to watch
  if (config.browserSync.watchFiles) {
    config.browserSync.watchFiles.forEach(function (file) {
      watchFiles.push(file);
    });
  }

  var options = {
    browser: config.browserSync.browser,
    files: watchFiles,
    port: config.browserSync.port,
    tunnel: config.browserSync.tunnel,
    open: config.browserSync.openBrowserAtStart,
    reloadDelay: config.browserSync.reloadDelay,
    reloadDebounce: config.browserSync.reloadDebounce
  };
  if (config.browserSync.domain) {
    _.merge(options, {
      proxy: config.browserSync.domain,
      startPath: config.browserSync.startPath
    });
  }
  else {
    _.merge(options, {
      server: {
        baseDir: config.browserSync.baseDir
      },
      startPath: config.browserSync.startPath
    });
  }
  gulp.task('serve', 'Create a local server using BrowserSync', function () {
    return browserSync.init(options);
  });
  tasks.default.push('serve');
};
