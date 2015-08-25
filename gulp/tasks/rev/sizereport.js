import gulp from 'gulp';
import repeatString from '../../lib/repeatString';
import sizereport from 'gulp-sizereport';
import config from '../../config';

gulp.task('size-report', () => {
  const hashedFiles = '/**/*-' + repeatString('[a-z,0-9]', 8)  + '*.*';

  return gulp.src([config.publicAssets + hashedFiles, '*!rev-manifest.json'])
    .pipe(sizereport({
        gzip: true
    }));
});
