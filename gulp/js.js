const path = require('./path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const fileInclude = require('gulp-file-include');

function jsMain() {
  return gulp.src( path.src.js + 'main.js' )
    .pipe(fileInclude({
      prefix: '//=',
    }))
    .pipe(gulp.dest(path.dist.js))
}

function jsVendors() {
  return gulp.src( path.src.js + 'vendors.js' )
    .pipe(fileInclude({
      prefix: '//=',
    }))
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(path.dist.js))
}

module.exports = {
  jsMain,
  jsVendors
}
