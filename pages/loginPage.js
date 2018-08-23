const Logger = require('../utils/logger.js');
module.exports = class LoginPage {

	constructor() {
		this.loginTab = element(by
			.xpath(".//ul[@id='loginSec']//a[text() = 'LOGIN']"));
		this.registrationTab = element(by
			.xpath(".//ul[@id='loginSec']//a[text() = 'REGISTER']"));
		this.mobNo_ServiceIdTextBox = element(by.xpath(".//*[@id='number-one']"));
		this.passwordOTPTextBox = element(by.xpath(".//*[@id='pasword']"));
		this.loginButton = element(by.xpath(".//*[@id='loginButtonSpan']"));
		this.errMsgOnWngUsrNmeOrPswd = element(by.xpath(".//*[@id='mobNoField' and @class='error-msg']"));
	}

	clickLoginTab() {
		this.loginTab.click();
	}

	enterTextMobNo_ServiceIdTextBox(mobNo_ServiceId) {
		this.mobNo_ServiceIdTextBox.clear();
		this.mobNo_ServiceIdTextBox.sendKeys(mobNo_ServiceId);
	}

	enterTextPasswordOTPTextBox(passwordOTP) {
		this.passwordOTPTextBox.clear();
		this.passwordOTPTextBox.sendKeys(passwordOTP)
	}

	clickLoginButton() {
		this.loginButton.click();
	};

	getErrMsgOnWngUsrNmeOrPswd() {
		return this.errMsgOnWngUsrNmeOrPswd.getText();
	}
};
