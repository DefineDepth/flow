const path = require('./path')
const gulp = require('gulp')
const browserSync = require('./browserSync')

function fonts() {
  return gulp.src(path.src.fonts)
    .pipe( gulp.dest(path.dist.fonts) )
    .pipe( browserSync.stream() );
}

module.exports = fonts;
