var logger = require('../utils/logger.js');
var landingPage = require('../pages/landingPage.js');
var loginPage = require('../pages/loginPage.js');
var pageTitle;

describe("A spec using beforeAll and afterAll", function () {

	function launchUrl() {
		var appUrl = "https://www.airtel.in/";
		browser.ignoreSynchronization = true;
		browser.get(appUrl);
	}
	;
	beforeAll(function () {
		launchUrl();
	});

	it('Verifying title of landing page', function () {
		pageTitle = 'Airtel: 4G| Prepaid | Postpaid | Broadband | Payments Bank| DTH | Online Store';
		expect(browser.getTitle()).toEqual(pageTitle);
		logger().info("Url is launched");
	});

	it('Verify title of Login Page', function () {
		landingPage.clickLoginLink();
		pageTitle = 'Airtel Login : Pay Airtel Bill Online - Login Airtel My Account';
		expect(browser.getTitle()).toEqual(pageTitle);
	});

	it('Failed login with invalid credential', function () {
		loginPage.enterTextMobNo_ServiceIdTextBox("9210936382");
		loginPage.enterTextPasswordOTPTextBox("vikas");
		loginPage.clickLoginButton();
		expect(loginPage.getErrMsgOnWngUsrNmeOrPswd()).toEqual('The mobile number or password is incorrect, please try again.');
	});

});
