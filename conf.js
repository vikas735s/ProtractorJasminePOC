var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect:true,
  specs: ['testCases/*js'],
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  multiCapabilities: [
    {
      browserName: 'firefox',
    },
    {
      browserName: 'chrome',
    }
  ],

  onPrepare: function () {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'report',
      docTitle: 'Protractor Web Testing Report',
      preserveDirectory: false,
      screenshotsSubfolder: 'images',
      jsonsSubfolder: 'jsons',
    }).getJasmine2Reporter());

  },


};