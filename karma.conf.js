var karmaConfig = require('./gulp/config/karma');

module.exports = function(config) {
  // karmaConfig.logLevel = config.LOG_ERROR;
  config.set(karmaConfig)
};
