import config from './';

export default {
  src: config.sourceAssets + '/styles/**/*.{sass,scss}',
  dest: config.publicAssets + '/styles',
  settings: {
    errLogToConsole: true,
    includePaths: ['node_modules']
  },
  autoprefixer: {
    browsers: ['last 2 version']
  }
};
