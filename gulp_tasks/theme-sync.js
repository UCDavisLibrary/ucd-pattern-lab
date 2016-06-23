module.exports = function (gulp, config, tasks) {
  'use strict';
  var exec = require('child_process').exec;

  // Export sass, js, and images to custom site
  gulp.task('themesync', 'Export Patternlab source files to a website theme.', function () {
    // Setup a list of all commands to be run
    var command = [];

    // if This is an import
    if (config.themeSync.src) {
      command = [
        'rsync -r --delete ' + config.themeSync.src + config.themeSync.sassSrc + '* ' + config.themeSync.sassDest,
        'rsync -r --delete ' + config.themeSync.src + config.themeSync.jsSrc + '* ' + config.themeSync.jsDest,
        'rsync -r --exclude "sample" ' + config.themeSync.src + config.themeSync.imagesSrc + '* ' + config.themeSync.imagesDest
      ].join('&&');
    }
    else {
      // This is an export
      command = [
        'rsync -r --delete ' + config.themeSync.sassSrc + '* ' + config.themeSync.dest + config.themeSync.sassDest,
        'rsync -r --delete ' + config.themeSync.jsSrc + '* ' + config.themeSync.dest + config.themeSync.jsDest,
        'rsync -r --exclude "sample" ' + config.themeSync.imagesSrc + '* ' + config.themeSync.dest + config.themeSync.imagesDest
      ].join('&&');
    }

    // Execute the commands
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
    });
  });

};
