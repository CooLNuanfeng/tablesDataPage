'use strict';

var gulp = require('gulp');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify'); 
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;

gulp.task('sass', function () {
  gulp.src('./sass/scss/*.scss')  
    .pipe(sass({
    	outputStyle: 'expanded', //nested,expanded,compact,compressed
    	includePaths: neat
    }))
    .pipe(gulp.dest('./sass/css')); 
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/scss/*.scss', ['sass']);
});

gulp.task('compress', function() {
  return gulp.src(['javascript/mytableDataPage.js','javascript/Fzxa.page.js'])
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('lib'));
});

gulp.task('default', ['sass', 'sass:watch','compress']);