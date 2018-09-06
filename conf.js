var HtmlReporter = require('protractor-beautiful-reporter');
var configData = require("./testAndConfigData/config.json");

exports.config = {
	directConnect: true,
	allScriptsTimeout: configData.allScriptsTimeout,
	getPageTimeout: configData.getPageTimeout,
	framework: 'jasmine',
	suites: {
		airtelLoginTest: ['testCases/airtelLoginTest.js'],
		airtelPaymetBankTest: ['testCases/airtelPaymentBankTest.js']
	},

	jasmineNodeOpts: {
		defaultTimeoutInterval: configData.defaultTimeoutInterval,
		showColors: true
	},

	multiCapabilities: [{
		browserName: 'firefox',
	}, {
		browserName: 'chrome',
		chromeOptions: {
			'args': ['incognito']
		}
	}],

	params: {
		//while be use when bulid tool is configured
	},

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