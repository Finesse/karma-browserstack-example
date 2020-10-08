// Karma configuration
// Generated on Wed Oct 07 2015 12:43:21 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // hostname for local
    hostname: 'bs-local.com',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['qunit'],

    //plugins
    plugins: ['karma-qunit', 'karma-browserstack-launcher'],


    // list of files / patterns to load in the browser
    files: [
      'src/*.js',
      'tests/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'BrowserStack'],


    // web server host and port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    browserStack: {
      username: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
      apiClientEndpoint: 'https://api.browserstack.com',
      build: String(Math.random()),
    },

    // define browsers
    customLaunchers: {
      bs_pixel_3_10: {
        base: 'BrowserStack',
        device: 'Google Pixel 3',
        os: 'Android',
        os_version: '10.0',
        browser: 'Chrome',
      },
      bs_pixel_4_10: {
        base: 'BrowserStack',
        device: 'Google Pixel 4',
        os: 'Android',
        os_version: '10.0',
        browser: 'Chrome'
      },
      bs_pixel_4_11: {
        base: 'BrowserStack',
        device: 'Google Pixel 4',
        os: 'Android',
        os_version: '11.0',
        browser: 'Chrome'
      },
      bs_galaxy_a11: {
        base: 'BrowserStack',
        device: 'Samsung Galaxy A11',
        os: 'Android',
        os_version: '10.0',
        browser: 'Samsung Internet', // Samsung Internet isn't supported according to https://www.browserstack.com/question/659
      },
      bs_galaxy_s20: {
        base: 'BrowserStack',
        device: 'Samsung Galaxy S20',
        os: 'Android',
        os_version: '10.0',
        browser: 'Samsung Internet', // Samsung Internet isn't supported according to https://www.browserstack.com/question/659
      },
    },

    captureTimeout: 3e5,
    browserDisconnectTolerance: 0,
    browserDisconnectTimeout: 3e5,
    browserSocketTimeout: 1.2e5,
    browserNoActivityTimeout: 3e5,

    browsers: ['bs_pixel_3_10', 'bs_pixel_4_10', 'bs_pixel_4_11', 'bs_galaxy_a11', 'bs_galaxy_s20'],
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
