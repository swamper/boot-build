/*global -$ */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('clean', require('del').bind(null, ['.tmp', 'public']));
