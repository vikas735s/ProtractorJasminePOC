const Logger = require('../utils/logger.js');
const BasePage = require('./basePage.js');
const WebDriverWaitUtils = require('../utils/webDriverWaitHelperUtils.js');
module.exports = class LandingPage extends BasePage {

	constructor() {
		var uniqueEle = element(by.css(".navbar-brand>img"));
		super(uniqueEle);
		this.loginLink = element(by.css(".icon-outlined-user.color-red"));
	}

	clickLoginLink() {
		this.loginLink.click();
	};

}
