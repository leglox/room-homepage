const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync')

gulp.task('pug', () => {
  return gulp
    .src('dev/pug/index.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('./'))
})

gulp.task('sass', () => {
  return gulp
    .src('dev/sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(concat('styles.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
})

gulp.task('js', () => {
  return gulp
    .src('dev/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
})

gulp.task('default', () => {
  gulp.watch('dev/pug/*.pug', gulp.series('pug'))
  gulp.watch('dev/sass/*.sass', gulp.series('sass'))
  gulp.watch('dev/js/*.js', gulp.series('js'))
  gulp.watch('./index.html').on('change', browserSync.reload)

  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})
