module.exports = function (gulp, config, tasks) {
  'use strict';
  var exec = require('child_process').exec;

  // Start a new project with Gulp, sass, js and config ready to go
  gulp.task('newsite', 'Start a new site with gulp and config wired up.', function () {
    // Setup a list of all commands to be run
    var command = [
      'rsync -r starterkit/* ' + config.themeSync.dest,
      'rsync -a --include=".eslintrc.yml" --include=".sass-lint.yml" --include="gulpfile.js" --exclude "*" . ' + config.themeSync.dest,
      'rsync -r --exclude "newsite.js" --exclude "patternlab.js" gulp_tasks/* ' + config.themeSync.dest + 'gulp_tasks/',
      //'mkdir -p ' + config.themeSync.dest + config.themeSync.sassDest,
      'rsync -r --delete ' + config.themeSync.sassSrc + '* ' + config.themeSync.dest + config.themeSync.sassDest,
      //'mkdir -p ' + config.themeSync.dest + config.themeSync.jsDest,
      'rsync -r --delete ' + config.themeSync.jsSrc + '* ' + config.themeSync.dest + config.themeSync.jsDest,
      //'mkdir -p ' + config.themeSync.dest + config.themeSync.imagesDest,
      'rsync -r --exclude "sample" ' + config.themeSync.imagesSrc + '* ' + config.themeSync.dest + config.themeSync.imagesDest
    ].join('&&');

    // Execute the commands
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
    });
  });

};
