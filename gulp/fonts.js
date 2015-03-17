/*global -$ */

var gulp = require('gulp'),
    path = require('path'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('fonts', function() {

    'use strict';

    var src = {
        fonts: ('app/fonts/**/*')
    };

    return gulp.src(src.fonts)
        .pipe(gulp.dest('public/fonts/'))
        .pipe(reload({
            stream: true
        }));
});
