const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const extReplace = require('gulp-ext-replace');
const webp = require('imagemin-webp');
	 
gulp.task('imagemin', () => {
  return gulp.src('src/assets/imgs/*')
    .pipe(imagemin([
      pngquant({quality: [0.5, 0.5]}),
      mozjpeg({quality: 50}),
    ]))
    .pipe(gulp.dest('build/imgs/'));
});

gulp.task('webp', () => {
  return gulp.src('src/assets/imgs/*')
    .pipe(imagemin([
      webp({quality: 80})
    ]))
    .pipe(extReplace('.webp'))
    .pipe(gulp.dest('build/imgs/'))
});