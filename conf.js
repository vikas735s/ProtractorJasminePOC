var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./testCases/*.js'],
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  capabilities: {
    'browserName': 'chrome',
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter(
        {
          //baseDirectory: 'C:/Temp',
          //takeScreenShotsForSkippedSpecs: true,
          savePath: "./report",
          //cleanDestination:true,
          fileName:"Report",
          fileNameDateSuffix: true
          //takeScreenShotsOnlyForFailedSpecs: true
        }
      )
    );
  }
};