"use strict";

var    gulp = require('gulp'),
     concat = require('gulp-concat'),
     uglify = require('gulp-uglify'),
       sass = require('gulp-sass'),
browserSync = require('browser-sync').create();

 gulp.task('compileSass', function() {
  return gulp.src("source/social-media-buttons.scss")
      .pipe(sass())
      .pipe(gulp.dest('./source/'))
      .pipe(browserSync.stream());
});

gulp.task('watchFiles', function() {

  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch('source/**/*.scss', ['compileSass']);
});

gulp.task("build", ['compileSass'], function() {
  return gulp.src(["css/application.css"], { base: './' })
});


gulp.task('serve', ['watchFiles']);
