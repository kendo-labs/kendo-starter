import gulp        from 'gulp';
import runSequence from 'run-sequence';

import {
  paths,
  server,
  watch,
  styles,
  scripts,
  fonts,
  images,
  clean,
  html
} from './gulp';

gulp.task('server', server);
gulp.task('watch', watch);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('fonts', fonts);
gulp.task('images', images);
gulp.task('clean', clean);
gulp.task('html', html);

gulp.task('default', () => {
  runSequence(
    'clean',
    [
      'html',
      'images',
      'fonts',
      'styles',
      'scripts'
    ],
    'server',
    'watch'
  );
});
