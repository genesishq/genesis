var config = require('./');

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceAssets + '/styles/**/app.css',
  dest: config.publicAssets + '/styles',
  settings: {
    imagePath: 'assets/images' // Used by the image-url helper
  }
};
