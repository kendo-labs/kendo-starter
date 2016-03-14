import gulp from 'gulp';
import paths from 'paths';
import sass from 'gulp-sass';
import connect from 'gulp-connect';

export default () => {
  return gulp.src([
    paths.src + '/scss/app.scss'
  ])
  .pipe(sass())
  .pipe(connect.reload())
  .pipe(gulp.dest(paths.dist + '/css'));
};
