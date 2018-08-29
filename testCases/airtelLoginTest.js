const Logger = require('../utils/logger.js');
const TestData = require('../testAndConfigData/testData.json');
const LandingPage = require('../pages/landingPage.js');
const LoginPage = require('../pages/loginPage.js');
const HomePage = require('../pages/homePage.js');
const ConfigData = require("../testAndConfigData/config.json");
const BaseTest = require('./baseTest.js');
let landingPage;
let loginPage;
let homePage;
var pageTitle;

describe("Test Suit To Test Login Functionality", function () {

	beforeAll(function () {
		BaseTest.launchUrl();
	});

	it('Verifying title of landing page of Application', function () {
		pageTitle = TestData.airtelLoginTest.landingPageTitleTest.pageTitle;
		expect(browser.getTitle()).toEqual(pageTitle);
		landingPage = new LandingPage();
		Logger().info("Url is launched");
	});

	it('Verify title of Login Page of Application', function () {
		landingPage.clickLoginLink();
		pageTitle = TestData.airtelLoginTest.loginPageTitleTest.pageTitle;
		expect(browser.getTitle()).toEqual(pageTitle);
	});

	it('Verify that user should able to login with valid Credential', function () {
		loginPage = new LoginPage();
		loginPage.enterTextMobNo_ServiceIdTextBox(ConfigData.username);
		loginPage.enterTextPasswordOTPTextBox(ConfigData.password);
		loginPage.clickLoginButton();
		homePage = new HomePage();
		homePage.logoutfromHomePage();
	});

	it('Verify that user should not able to login with invalid credential', function () {
		loginPage = new LoginPage();
		//geting data from testData
		var userName = TestData.airtelLoginTest.failedloginTest.userName;
		var password = TestData.airtelLoginTest.failedloginTest.password;
		var errorMessage = TestData.airtelLoginTest.failedloginTest.errorMessage;
		loginPage.enterTextMobNo_ServiceIdTextBox(userName);
		loginPage.enterTextPasswordOTPTextBox(password);
		loginPage.clickLoginButton();
		expect(loginPage.getErrMsgOnWngUsrNmeOrPswd()).toContain(errorMessage);
	});

});
