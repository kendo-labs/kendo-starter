import gulp  from 'gulp';
import paths from 'paths';
import connect from 'gulp-connect';

export default () => {
  return gulp.src([
    paths.src + '/img/**/*'
  ])
  .pipe(connect.reload())
  .pipe(gulp.dest(paths.dist + '/img'));
};
