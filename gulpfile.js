'use strict';

// var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
// var del = require('del');
var gulp = require('gulp');
// var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var image = require('gulp-image');


// Gulp task to minify CSS files
gulp.task('styles', function () {
  return gulp.src('_src/css/**/*.scss')
    // Compile SASS files
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
   
    // Minify the file
    .pipe(csso())

    // Output
    .pipe(gulp.dest('_dist/css'))
});


// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('_src/js/**/*.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('_dist/js'))
});


gulp.task('image', function () {
  gulp.src('_src/images/*')
    .pipe(image())
    .pipe(gulp.dest('_dist/images'));
});


gulp.task('default', function() {
  gulp.watch('_src/css/*.scss', gulp.series('styles'));
  gulp.watch('_src/js/*.js', gulp.series('scripts'));
  gulp.watch('_src/images/*', gulp.series('image'));
});