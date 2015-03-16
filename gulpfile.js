/*global -$ */
'use strict';

var gulp = require('gulp'),
    path = require('path'),
    requireDir = require('require-dir'),
    dir = requireDir('gulp');

gulp.task('default', ['reset'], function() {
    gulp.start('build');
});
