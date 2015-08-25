import gulp from 'gulp';
import karma from 'karma';

gulp.task('karma', callback => {
  karma.server.start({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  }, callback);
});
