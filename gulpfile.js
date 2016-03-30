var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cssnano = require('gulp-cssnano'),
  imagemin = require('gulp-imagemin'),
  rename = require("gulp-rename"),
  sass = require('gulp-sass'),
  uncss = require('gulp-uncss');

// Compile SASS
gulp.task('compile-sass', function () {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('css'));
});
 
gulp.task('sass', function () {
  gulp.watch('sass/**/*.scss', ['compile-sass']);
});

// Concatenate and Uglify JS
gulp.task('js', function () {
  gulp.src('js/source/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(rename(function (path) {
    path.basename += "-min";
    path.extname = ".js";
    return path;
    }))
  .pipe(gulp.dest('js/build/'))
});

// Optimize Img
gulp.task('imagenes', function () {
  return gulp.src(['img/*.*'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/'));
});

// Minify CSS
gulp.task('mini', function() {
  return gulp.src('dist/css/main.css')
    .pipe(cssnano())
    .pipe(rename(function (path) {
      path.basename += "-min";
      path.extname = ".css";
      return path;
      }))
    .pipe(gulp.dest('dist/css'));
});

// Uncss
gulp.task('uncss', function() {
    gulp.src('css/main.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('dist/css'));
});