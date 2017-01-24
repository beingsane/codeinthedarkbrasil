'use strict';
let gulp         = require('gulp'),
    stylus       = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus'),
    rupture      = require('rupture'),
    browserSync  = require('browser-sync').create();;

const supportedBrowsers = {browsers:['last 2 versions', 'Android >= 5', 'IE >= 9']};

gulp.task('style', function () {
  let config = {
    'include css': true,
    'use': [rupture(), autoprefixer(supportedBrowsers)],
    'compress': true
  };

  return gulp.src('./assets/styl/main.styl')
    .pipe(stylus(config))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('serve', ['style'], function() {
  browserSync.init({
    open: false,
    port: 3000,
    notify: true,
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch("./assets/styl/*.styl", ['style']);
});



gulp.task('default', ['serve']);
