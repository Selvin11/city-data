// Karma configuration
// Generated on Fri Jul 28 2017 15:20:12 GMT+0800 (CST)

let debug = process.env.NODE_TEST === 'development';

let webpackConfig = require('../config/webpack.config')

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'test/unit/cvux.test.js'
    ],


    // list of files to exclude
    exclude: [
      'node_modules'
    ],


    // preprocess matching files before serving them to the browser
    // 配置预处理器,ES6代码需要预处理
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/unit/cvux.test.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
   

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    // autoWatch: true,
    autoWatch: debug,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // singleRun: false,
    singleRun: !debug,

    // webpack 配置
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-coverage-istanbul-reporter',
      'karma-coverage',
      'karma-spec-reporter',
      // 'karma-phantomjs-launcher',
      'karma-chrome-launcher'
    ],

     // 设定报告输出插件： spec 和 coverage-istanbul
    // reporters: ['spec', 'coverage-istanbul'],

    // coverage-istanbul 输出配置，报告文件输出于根目录下的 coverage 文件夹内
    // coverageIstanbulReporter: {
    //    // reports can be any that are listed here: https://github.com/istanbuljs/istanbul-reports/tree/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib
    //   reports: ['html', 'lcovonly', 'text-summary'],
    //    // base output directory
    //   dir: './coverage',
    //    // if using webpack and pre-loaders, work around webpack breaking the source path
    //   fixWebpackSourcePaths: true,
    //    // Most reporters accept additional config options. You can pass these through the `report-config` option
    //   'report-config': {
    //     // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
    //     html: {
    //       // outputs the report in ./coverage/html
    //       subdir: 'html'
    //     }
    //   }
    // },

    // karma-coverage-reporter 插件
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
