/*global -$ */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var requireDir = require('require-dir');
var dir = requireDir('gulp');

gulp.task('build', ['copy', 'jshint', 'html', 'images', 'fonts', 'extras'], function () {
  return gulp.src('public/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
