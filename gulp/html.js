/*global -$ */

var gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    minifyHTML = require('gulp-minify-html');

gulp.task('html', function() {

    'use strict';

    var src = {
        html: 'app/*.html'
    };

    return gulp.src(src.html)
        .pipe(gulp.dest('.tmp/'))
        .pipe(minifyHTML())
        .pipe(gulp.dest('public/'))
        .pipe(reload({
            stream: true
        }));
});
