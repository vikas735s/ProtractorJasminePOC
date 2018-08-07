var logger = require('../utils/logger.js');

var loginPage = function() {

	var loginTab = element(by
			.xpath(".//ul[@id='loginSec']//a[text() = 'LOGIN']"));
	var registrationTab = element(by
			.xpath(".//ul[@id='loginSec']//a[text() = 'REGISTER']"));
	var mobNo_ServiceIdTextBox = element(by.xpath(".//*[@id='number-one']"));
	var passwordOTPTextBox = element(by.xpath(".//*[@id='pasword']"));

	this.clickLoginTab = function() {
		loginTab.click();
	}

	this.enterTextMobNo_ServiceIdTextBox = function(mobNo_ServiceId ) {
		mobNo_ServiceIdTextBox.clear();
		mobNo_ServiceIdTextBox.sendKeys(mobNo_ServiceId);
	}

	this.enterTextPasswordOTPTextBox = function(passwordOTP ) {
		passwordOTPTextBox.clear();
		passwordOTPTextBox.sendKeys(passwordOTP)
	}
};

module.exports = new loginPage();