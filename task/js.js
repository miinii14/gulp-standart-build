const {src, dest} = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const rename = require('gulp-rename')

const path = require('../config/path.js');
const app = require('../config/app.js');

const js = () => {
  return src([
    path.js.src,
    
  ], {sourcemaps: app.isDev})
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "js",
        message: error.message
      }))
    }))
    .pipe(babel())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest(path.js.dest, {sourcemaps: app.isDev}))
}

module.exports = js;