// If you are familiar with Rails, this task the equivalent of `rake assets:precompile`
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

// 1) Add hashes to assets referenced by CSS and JS files
// 2) Add hashes CSS
// 3) Update asset references with reved filenames in compiled css + js
// 4) Update asset references in HTML
// 5) Report filesizes

gulp.task('rev', callback => {
  gulpSequence(
    'rev-assets',
    // 'rev-css',
    'rev-update-references',
    'update-html',
    'size-report',
    callback
  );
});
