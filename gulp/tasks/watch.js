import gulp from 'gulp';
import staticDir from '../config/static';
import images from '../config/images';
import sass from '../config/sass';
import fonts from '../config/fonts';

gulp.task('watch', ['browserSync'], () => {
  gulp.watch(images.src, ['images']);
  gulp.watch(sass.src, ['inject-styles:watch']);
  gulp.watch(fonts.src, ['fonts']);
  gulp.watch(staticDir.src, ['static', 'inject-styles']);
});
