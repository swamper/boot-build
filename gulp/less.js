/*global -$ */
'use strict';

var gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')(),
    minify = require('gulp-minify-css'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('less', function() {

    var src = {
        less: 'app/styles/**/*.less'
    };

    return gulp.src(src.less)
        .pipe($.sourcemaps.init())
        .pipe($.less())
        .pipe($.autoprefixer({
            browsers: ['last 1 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('.tmp/css'))
        .pipe(minify({
            advanced: true
        }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('public/css'))
        .pipe(reload({
            stream: true
        }));
});
