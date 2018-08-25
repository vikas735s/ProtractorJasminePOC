var HtmlReporter = require('protractor-beautiful-reporter');
var configData = require("./testAndConfigData/config.json");

exports.config = {
	directConnect: true,
	specs: ['testCases/airtelLoginTest.js'],
	allScriptsTimeout: configData.allScriptsTimeout,
	getPageTimeout: configData.getPageTimeout,
	framework: 'jasmine',
	jasmineNodeOpts: {
		defaultTimeoutInterval: configData.defaultTimeoutInterval,
	},

	multiCapabilities: [{
		//browserName: 'firefox',
	}, {
		browserName: 'chrome',
		chromeOptions: {
			'args': ['incognito']
		}
	}],

	onPrepare: function () {
		browser.driver.manage().window().maximize();
		browser.driver.manage().timeouts().implicitlyWait(configData.implicitlyWaitTimeout);
		browser.manage().timeouts().pageLoadTimeout(configData.pageLoadTimeout);
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: 'report',
			docTitle: 'Protractor Web Testing Report',
			preserveDirectory: false,
			screenshotsSubfolder: 'images',
			jsonsSubfolder: 'jsons',
		}).getJasmine2Reporter());
	},

};