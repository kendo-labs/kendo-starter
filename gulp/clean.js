import gulp  from 'gulp';
import paths from 'paths';
import del   from 'del';

export default () => {
  return del([
    paths.dist
  ]);
};
