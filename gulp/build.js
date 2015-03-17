/*global -$ */

var gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')();

gulp.task('build', ['copy', 'less', 'html', 'scripts', 'images', 'fonts'], function() {

    'use strict';

    return gulp.src('public/**/*')
        .pipe($.size({
            title: 'build',
            gzip: true
        }));
});
