/*global -$ */
'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('styles', function () {

    return gulp.src('src/styles/main.less')
    .pipe($.less({
        paths: ['.']
    }))
    .pipe($.autoprefixer({
        browsers: ['last 1 versions'],
        cascade: false
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});
