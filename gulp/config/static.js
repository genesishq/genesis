import config from './';

export default {
  src: [config.sourceDirectory + '/**', '!' + config.sourceAssets],
  dest: config.publicDirectory
};
