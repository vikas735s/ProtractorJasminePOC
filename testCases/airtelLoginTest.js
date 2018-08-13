var logger = require('../utils/logger.js');
var testData = require('../testAndConfigData/testData.json');
var landingPage = require('../pages/landingPage.js');
var loginPage = require('../pages/loginPage.js');
var configData = require("../testAndConfigData/config.json");
var pageTitle;

describe("A spec using beforeAll and afterAll", function () {

	function launchUrl() {
		var appUrl = configData.baseUrl;
		browser.ignoreSynchronization = true;
		browser.get(appUrl);
	}
	;
	beforeAll(function () {
		launchUrl();
	});

	it('Verifying title of landing page', function () {
		pageTitle = testData.airtelLoginTest.landingPageTitleTest.pageTitle;
		expect(browser.getTitle()).toEqual(pageTitle);
		logger().info("Url is launched");
	});

	it('Verify title of Login Page', function () {
		landingPage.clickLoginLink();
		pageTitle = testData.airtelLoginTest.loginPageTitleTest.pageTitle;
		expect(browser.getTitle()).toEqual(pageTitle);
	});

	it('Failed login with invalid credential', function () {
		var userName = testData.airtelLoginTest.failedloginTest.userName;
		var password = testData.airtelLoginTest.failedloginTest.password;
		var errorMessage = testData.airtelLoginTest.failedloginTest.errorMessage;
		loginPage.enterTextMobNo_ServiceIdTextBox(userName);
		loginPage.enterTextPasswordOTPTextBox(password);
		loginPage.clickLoginButton();
		expect(loginPage.getErrMsgOnWngUsrNmeOrPswd()).toEqual(errorMessage);
	});

});
