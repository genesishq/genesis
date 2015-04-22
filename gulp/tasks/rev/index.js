// If you are familiar with Rails, this task the equivalent of `rake assets:precompile`
var gulp = require('gulp');

// 1) Add hashes to assets referenced by CSS and JS files
// 2) Update asset references with reved filenames in compiled css + js
// 3) Update asset references in HTML
// 4) Report filesizes

gulp.task('rev', [
  'rev-assets',
  'rev-update-references',
  'rev-css',
  'update-html',
  'size-report'
]);
