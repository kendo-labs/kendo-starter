import gulp from 'gulp';
import paths from 'paths';

export default () => {
  gulp.watch([paths.src + '/scss/**/*'], ['styles']);
  gulp.watch([paths.src + '/**/*.html'], ['html']);
  gulp.watch([paths.src + '/js/**/*.js'], ['scripts']);
  gulp.watch([paths.src + '/img/**/*'], ['images']);
};
