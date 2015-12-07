var gulp = require('gulp');
var shell = require('gulp-shell');
var cssnano = require('gulp-cssnano');
var rev = require('gulp-rev');
var pkg = require('./package.json');


gulp.task('grunt', shell.task([
  'grunt dist:css',
]));


gulp.task('css', ['grunt'], function () {
  return gulp.src('dist/css/' + pkg.name + '.css')
    .pipe(cssnano())
    .pipe(rev())
    .pipe(gulp.dest('dist/css'));
});


gulp.task('default', ['css']);
