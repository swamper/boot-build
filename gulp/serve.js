/*global -$ */
'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('serve', ['styles', 'fonts'], function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'src'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  // watch for changes
  gulp.watch([
    'src/*.html',
    'src/scripts/**/*.js',
    'src/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('src/styles/**/*.less', ['styles']);
  gulp.watch('src/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});
