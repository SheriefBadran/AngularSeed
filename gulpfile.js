'use strict';

var gulp = require('gulp');

gulp.paths = {
  src: 'app',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'test/e2e',
  test: 'test',
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
