/*global -$ */
'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    requireDir = require('require-dir'),
    dir = requireDir('gulp');

gulp.task('build', ['copy', 'jshint', 'html', 'images', 'fonts', 'extras'], function () {
  return gulp.src('public/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
