const path     = require('./path')
const gulp     = require('gulp')
const njk      = require('gulp-nunjucks-render')
const data     = require('gulp-data')
const fs       = require('fs')
const beautify = require('gulp-beautify')
const yaml     = require('gulp-yaml')
const merge    = require('gulp-merge-json')

function yamlToJson() {
  return gulp.src( './data/**/*.yml' )
    .pipe(yaml({ space: 2 }))
    .pipe(merge({ fileName: '_data.json' }))
    .pipe( gulp.dest( './data' ) )
}

function renderSingle( filePath ) {
	return gulp.src( filePath )
    .pipe(data(function(file) {
      return JSON.parse( fs.readFileSync('./data/_data.json') );
    }))
    .pipe(njk({
      path: path.src.templates
    }))
    .pipe( beautify.html({
      "indent_size": 2,
      "max-preserve-newlines": 2,
    }) )
    .pipe( gulp.dest(path.dist.templates) )
}

function render() {
	return gulp.src( path.src.templates + "*.html" )
    .pipe(data(function(file) {
      return JSON.parse( fs.readFileSync('./data/_data.json') );
    }))
    .pipe(njk({
      path: path.src.templates
    }))
    .pipe( beautify.html({
      "indent_size": 2,
      "max-preserve-newlines": 2,
    }) )
    .pipe( gulp.dest(path.dist.templates) )
}

module.exports = {
  yamlToJson,
  render,
  renderSingle,
}
