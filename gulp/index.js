var gulp = require('gulp');

module.exports = function(tasks) {

  tasks.forEach(function(name) {
    gulp.task(name, require('./task/' + name));
  });

  return gulp;

};