var landingPage = function() {

	var loginLink = element(by
			.xpath(".//*[@href='https://www.airtel.in/s/selfcare/' and @class='icon-outlined-user color-red' ]"));

	this.clickLoginLink = function() {
		loginLink.click();

	};
};
module.exports = new landingPage();