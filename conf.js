exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./testCases/*.js'],
    framework: 'jasmine',
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },
    capabilities: {
     'browserName': 'chrome',
        
      }
  };