var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');


gulp.task('minify-css', function(done){
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS({
  compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css/'))
  done();
});

gulp.task('move-js', function(done) {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js/'))
  done();
});

gulp.task('htmlmin', function(done) {
  return gulp.src('./src/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
    .pipe(gulp.dest('dist/'))
  done();
});

gulp.task('fonts', function(done) {
  return gulp.src('./src/**/*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('tinypng', function(done) {
  return gulp.src('images/src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinyPNG({
      key: 'f45TcCWn7FjDxV4N5H1m1gV2ylf9qgQn',
    }))
    .pipe(gulp.dest('dist/img'));
    done()
});

gulp.task('default', gulp.series('minify-css', 'move-js','fonts','htmlmin', function(done) {
  done();
}));