import gulp from 'gulp';
import paths from 'paths';
import connect from 'gulp-connect';

export default () => {
  return connect.server({
    root: paths.dist,
    livereload: true
  });
};
