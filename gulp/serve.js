/*global -$ */

var gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync');

gulp.task('serve', ['build'], function() {

    'use strict';

    var src = {
        app: ('app/styles/**/*.less', 'app/*.html', 'app/js/**/*.js', 'app/img/**.*', 'app/fonts/**.*')
    };

    browserSync({
        server: ".tmp"
    });

    gulp.watch(src.app, ['less', 'scripts', 'html', 'images', 'fonts']);
});
