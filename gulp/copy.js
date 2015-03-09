/*global -$ */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('copy', function(){
    gulp.src('bower_components/apache-server-configs/dist/.htaccess')
        .pipe(gulp.dest('src/'));

    gulp.src('bower_components/fontawesome/fonts/*')
        .pipe(gulp.dest('src/fonts/font-awesome/'));

    gulp.src('bower_components/bootstrap/fonts/*')
        .pipe(gulp.dest('src/fonts/glyphicons/'));
});
