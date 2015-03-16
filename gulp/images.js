/*global -$ */
'use strict';

var gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('images', function() {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('.tmp/img/'))
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('public/img/'))
        .pipe(reload({
            stream: true
        }));
});
