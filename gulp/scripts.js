/*global -$ */

var gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;


gulp.task('scripts', function() {

    'use strict';

    var src = {
        app: ('app/scripts/**/*.js')
    };

    return gulp.src(src.app)
        .pipe($.concat('main.js'))
        .pipe($.sourcemaps.init())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest('.tmp/js/'))
        .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('public/js/'))
        .pipe(reload({
            stream: true
        }));
});
