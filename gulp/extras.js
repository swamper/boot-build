/*global -$ */
'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('extras', function () {
  return gulp.src([
    'src/*.*',
    '!src/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('public'));
});
