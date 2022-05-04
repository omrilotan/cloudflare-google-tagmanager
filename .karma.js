module.exports = (config) => {
  const { LOG_INFO: logLevel } = config;

  config.set({
    browsers: [ 'ChromeHeadless' ],
    frameworks: [ 'mocha' ],
    port: 9876,
    logLevel,
    singleRun: true,
    concurrency: 1,
    hooks : [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-mocha',
        'karma-mocha-reporter'
    ],
    reporters: [ 'mocha' ],
    basePath: __dirname,
    files: [ './browser/globals.js', './dist/index.js', './browser/test.js' ]
  })
}
