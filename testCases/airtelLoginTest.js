var logger = require('../utils/logger.js');
var landingPage = require('../pages/landingPage.js');
var loginPage = require('../pages/loginPage.js')

describe("A spec using beforeAll and afterAll", function() {

	function launchUrl() {
		var appUrl = "https://www.airtel.in/";
		browser.ignoreSynchronization = true;
		browser.get(appUrl);
		logger().info("Url is launched");

	}
	;
	beforeAll(function() {
		launchUrl();
	});

	it('Verifying page title', function() {
		landingPage.clickLoginLink();
		loginPage.enterTextMobNo_ServiceIdTextBox("vikas");
		loginPage.enterTextPasswordOTPTextBox("vikas");
	});

});
