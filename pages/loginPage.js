const Logger = require('../utils/logger.js');
const BasePage = require('./basePage.js');
const WebElementOperationHelper = require('../utils/webElementOperationHelper.js');
module.exports = class LoginPage extends BasePage {

	constructor() {
		super(element(by.css("#loginButtonSpan")));
		this.loginTab = element(by
			.xpath(".//ul[@id='loginSec']//a[text() = 'LOGIN']"));
		this.registrationTab = element(by
			.xpath(".//ul[@id='loginSec']//a[text() = 'REGISTER']"));
		this.mobNo_ServiceIdTextBox = element(by.xpath(".//*[@id='number-one']"));
		this.passwordOTPTextBox = element(by.xpath(".//*[@id='pasword']"));
		this.loginButton = element(by.xpath(".//*[@id='loginButtonSpan']"));
		this.errMsgOnWngUsrNmeOrPswd = element(by.xpath(".//*[@id='genericErrLogin']"));
	}

	clickLoginTab() {
		this.loginTab.click();
	}

	enterTextMobNo_ServiceIdTextBox(mobNo_ServiceId) {
		WebElementOperationHelper.inputText(this.mobNo_ServiceIdTextBox, mobNo_ServiceId);
	}

	enterTextPasswordOTPTextBox(passwordOTP) {
		WebElementOperationHelper.inputText(this.passwordOTPTextBox, passwordOTP);
	}

	clickLoginButton() {
		this.loginButton.click();
	};

	getErrMsgOnWngUsrNmeOrPswd() {
		return WebElementOperationHelper.getElementTextContent(this.errMsgOnWngUsrNmeOrPswd);
	}
};
