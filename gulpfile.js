var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('minify-css', function (done) {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css/'))
  done();
});
gulp.task('move-min-js', function (done){
  return gulp.src('./src/js/*min.js')
    .pipe(gulp.dest('dist/js/'))
  done();
});
gulp.task('minify-js', function (done) {
  return gulp.src(['src/js/*.js', '!src/js/*.min.js'])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/js/'))
  done();
});
gulp.task('htmlmin', function (done) {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
  done();
});
gulp.task('fonts', function (done) {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});
gulp.task('tinypng', function (done) {
  return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinyPNG({
      key: 'f45TcCWn7FjDxV4N5H1m1gV2ylf9qgQn',
    }))
    .pipe(gulp.dest('dist/img'));
  done()
});
gulp.task('default', gulp.series('minify-css', 'move-min-js', 'minify-js', 'fonts', 'htmlmin', 'tinypng', function (done) {
  done();
}));
