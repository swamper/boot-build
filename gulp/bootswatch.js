/*global -$ */
'use strict';

var gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')({
      pattern: ['gulp-*']
    }),
    minify = require('gulp-minify-css');

//gulp.task('TASKNAME', function() {
//    return gulp.src(mainBowerFiles(/* options */), { base: 'bower_components' })
//        .pipe(/* what you want to do with the files */)
//});

//gulp.task('bootswatch', function() {

//    return gulp.src($.mainBowerFiles(), { read: false })
        //.pipe($.filter('bootswatch/**/*.less'))
//        .pipe(gulp.dest('.tmp/css/bootswatch/'))

//});

gulp.task('bootswatch', function(){
    var bootswatch = 'bower_components/bootswatch/**/*.less';

    return gulp.src(bootswatch, {base: './'})

        .pipe(gulp.dest('public/css/app/'))
});
