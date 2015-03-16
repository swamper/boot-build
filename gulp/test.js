/*global -$ */
'use strict';

var gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')(),
    karma = require('gulp-karma'),
    wiredep = require('wiredep');

    var paths = gulp.paths;
    
function runTests (singleRun, done) {

    var bowerDeps = wiredep({
      directory: 'bower_components',
      exclude: ['bootstrap'],
      dependencies: true,
      devDependencies: true
    });

    var testFiles = bowerDeps.js.concat([
        paths.src + '/{app,components}/**/*.js'
    ]);

  gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'karma.conf.js',
      action: (singleRun)? 'run': 'watch'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
}

gulp.task('test', function (done) { runTests(true /* singleRun */, done) });
gulp.task('test:auto', function (done) { runTests(false /* singleRun */, done) });
