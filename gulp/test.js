/*global -$ */
'use strict';

var gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')(),
    wiredep = require('wiredep');

    function runTests (singleRun, done) {
      var bowerDeps = wiredep({
        directory: 'bower_components',
        exclude: ['bootstrap'],
        dependencies: true,
        devDependencies: true
      });

      var testFiles = bowerDeps.js.concat([
        path.src + '{app,bower_components}/**/*.js'
      ]);

      gulp.src(testFiles)
        .pipe($.karma({
          configFile: 'karma.conf.js',
          action: (singleRun)? 'run': 'watch'
        }))
        .on('error', function(err) {
         this.emit('end');
        });
    }

    gulp.task('test', function (done) { runTests(true /* singleRun */, done) });
