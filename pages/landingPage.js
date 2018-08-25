const Logger = require('../utils/logger.js');
const BasePage = require('./basePage.js');
const WebDriverWaitUtils = require('../utils/webDriverWaitHelperUtils.js');
module.exports = class LandingPage extends BasePage {

	constructor() {
		var uniqueEle = element(by.xpath(".//*[@id='airtelMegaMenu']//img"));
		super(uniqueEle);
		this.loginLink = element(by
			.xpath(".//*[@href='https://www.airtel.in/s/selfcare/' and @class='icon-outlined-user color-red' ]"));
	}

	clickLoginLink() {
		this.loginLink.click();
	};

}
