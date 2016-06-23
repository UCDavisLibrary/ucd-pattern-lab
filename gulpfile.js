'use strict';
var gulp = require('gulp-help')(require('gulp'));
var yaml = require('js-yaml');
var fs = require('fs');
var config = yaml.safeLoad(fs.readFileSync('./gulp-config.yml', 'utf8'));
var _ = require('lodash');
var customConfigFile = './gulp-config--custom.yml';

// Load in custom config
try {
  fs.statSync(customConfigFile);
  var customConfig = yaml.safeLoad(fs.readFileSync(customConfigFile, 'utf8'));
  config = _.merge(config, customConfig);
} catch(e) {
  console.log('Add a gulp-config--custom.yml file for any custom configuration.');
}

// Setup a list of primary tasks
var tasks = {
  compile: [],
  watch: [],
  validate: [],
  default: []
};

// Load in all tasks
if (config.patternLab) {
  require('./gulp_tasks/patternlab.js')(gulp, config, tasks);
}

if (config.themeSync.newsite) {
  require('./gulp_tasks/newsite.js')(gulp, config, tasks);
}

if (config.themeSync.enabled) {
  require('./gulp_tasks/theme-sync.js')(gulp, config, tasks);
}

if (config.browserSync.enabled) {
  require('./gulp_tasks/browser-sync.js')(gulp, config, tasks);
}

if (config.js.enabled) {
  require('./gulp_tasks/js.js')(gulp, config, tasks);
}

if (config.css.enabled) {
  require('./gulp_tasks/css.js')(gulp, config, tasks);
}

gulp.task('compile', 'Generate the entire site', tasks.compile);
tasks.default.unshift('compile');
gulp.task('validate', 'Validate CSS and JS by linting', tasks.validate);
gulp.task('watch', 'Watch for changes to files', tasks.watch);
tasks.default.push('watch');
gulp.task('default', 'Generate the entire site and start watching for changes', tasks.default);
