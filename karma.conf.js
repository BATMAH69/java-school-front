const webpack = require('./webpack.config.js');

webpack.preLoaders = [
  { test: /\.jsx?$/, exclude: /node_modules/, loader: 'isparta' },
];

module.exports = (config) => {
  config.set({

    // Add any browsers here
    browsers: ['Chrome'],
    frameworks: ['jasmine'],

    // The entry point for our test suite
    basePath: 'components',
    autoWatch: false,
    files: [
      '**/*test.js',
    ],
    preprocessors: {
      // Run this through webpack, and enable inline sourcemaps
      '**/*test.js': ['webpack'],
    },

    webpack,
    client: {
      // log console output in our test console
      captureConsole: true,
    },

    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
      ],
    },

    singleRun: true, // exit after tests have completed

    webpackMiddleware: {
      noInfo: true,
    },

    // Webpack takes a little while to compile -- this manifests as a really
    // long load time while webpack blocks on serving the request.
    browserNoActivityTimeout: 60000, // 60 seconds
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-webpack',
      'karma-coverage',
      'karma-spec-reporter',
    ],
  });
};
