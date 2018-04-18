'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
// var concatCss = require('gulp-concat-css');
// var cleanCss = require('gulp-clean-css');

gulp.task('default', ['sass'], function() {

});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(concat('all.scss'))
    .pipe(sass().on('error', sass.logError))
    // .pipe(gulp.dest('./public/stylesheets'))
    // .pipe(concatCss('./public/stylesheets/*.css'))
    .pipe(cssnano())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./public/stylesheets'));
});

// .pipe(cleanCss({compatibility: 'ie8'}))
// .pipe(rename({ suffix: '.min' }))

// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });
