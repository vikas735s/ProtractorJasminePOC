const Logger = require('../utils/logger.js');
const TestData = require('../testAndConfigData/testData.json');
const LandingPage = require('../pages/landingPage.js');
const LoginPage = require('../pages/loginPage.js');
const ConfigData = require("../testAndConfigData/config.json");
let landingPage;
let loginPage;
var pageTitle;

describe("A spec using beforeAll and afterAll", function () {
	browser.ignoreSynchronization = true;

	function launchUrl() {
		browser.get(ConfigData.baseUrl);
	};
	beforeAll(function () {
		launchUrl();
	});

	it('Verifying title of landing page', function () {
		pageTitle = TestData.airtelLoginTest.landingPageTitleTest.pageTitle;
		expect(browser.getTitle()).toEqual(pageTitle);
		landingPage = new LandingPage();
		Logger().info("Url is launched");
	});

	it('Verify title of Login Page', function () {
		landingPage.clickLoginLink();
		pageTitle = TestData.airtelLoginTest.loginPageTitleTest.pageTitle;
		expect(browser.getTitle()).toEqual(pageTitle);
	});

	it('Failed login with invalid credential', function () {
		loginPage = new LoginPage();
		var userName = TestData.airtelLoginTest.failedloginTest.userName;
		var password = TestData.airtelLoginTest.failedloginTest.password;
		var errorMessage = TestData.airtelLoginTest.failedloginTest.errorMessage;
		loginPage.enterTextMobNo_ServiceIdTextBox(userName);
		loginPage.enterTextPasswordOTPTextBox(password);
		loginPage.clickLoginButton();
		expect(loginPage.getErrMsgOnWngUsrNmeOrPswd()).toEqual(errorMessage);
	});

});
