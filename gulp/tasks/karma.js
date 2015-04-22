var gulp = require('gulp');
var karma = require('karma');

gulp.task('karma', karmaTask);

function karmaTask(done) {
  karma.server.start({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  }, done);
}
