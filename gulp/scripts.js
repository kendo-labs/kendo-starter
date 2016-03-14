import gulp    from 'gulp';
import paths   from 'paths';
import concat  from 'gulp-concat';
import babel   from 'gulp-babel';
import es      from 'event-stream';
import connect from 'gulp-connect';

export default () => {
  var vendor = gulp.src([
    paths.src + '/js/libs/**/*.js'
  ])
  .pipe(concat('vendor.js'));
  var app = gulp.src([
    paths.src + '/js/views/**/*.js',
    paths.src + '/js/**/*.js',
    '!' + paths.src + '/js/libs/**/*.js'
  ])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('app.js'));
  return (
    es
      .merge(vendor, app)
      .pipe(connect.reload())
      .pipe(gulp.dest(paths.dist + '/js'))
  );
};
