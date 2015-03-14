/*global -$ */
'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

// inject bower components
gulp.task('wiredep', function () {

  gulp.src('src/styles/*.less')
    .pipe($.wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('src/styles'));

  gulp.src('src/*.html')
    .pipe($.wiredep({
      exclude: ['bootstrap/public'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('src'));
});
