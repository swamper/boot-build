/*global -$ */
'use strict';

var gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')(),
    del = require('del');

gulp.task('reset', require('del').bind(null, ['public', '.tmp']));
