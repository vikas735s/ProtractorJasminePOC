var HtmlReporter = require('protractor-beautiful-reporter');
var configData = require("./testAndConfigData/config.json");

exports.config = {
	directConnect: true,
	specs: ['testCases/airtelLoginTest.js'],
	allScriptsTimeout: parseInt(configData.allScriptsTimeout, 10),
	getPageTimeout: parseInt(configData.getPageTimeout, 10),
	framework: 'jasmine',
	jasmineNodeOpts: {
		defaultTimeoutInterval: parseInt(configData.defaultTimeoutInterval, 10)
	},

	multiCapabilities: [{
		browserName: 'firefox',
	}, {
		browserName: 'chrome',
	}],

	onPrepare: function () {
		//browser.driver.manage().window().maximize();
		browser.driver.manage().timeouts().implicitlyWait(parseInt(configData.implicitlyWaitTimeout, 10));
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: 'report',
			docTitle: 'Protractor Web Testing Report',
			preserveDirectory: false,
			screenshotsSubfolder: 'images',
			jsonsSubfolder: 'jsons',
		}).getJasmine2Reporter());
	},

};