const Logger = require('../utils/logger.js');
const BasePage = require('./basePage.js');
const WebElementOperationHelper = require('../utils/webElementOperationHelper.js');
const WebDriverWait = require('../utils/webDriverWaitHelperUtils.js');
const WebelementOperationHelper = require('../utils/webElementOperationHelper');

module.exports = class HomePage extends BasePage {

    constructor() {
        super(element(by.css("span[data-ng-bind='vm.headData.data.customerName | titleCase']")));
        this.airtelLogo = element(by.xpath(".//a[@class='navbar-brand']//img[@alt='airtel_logo']"));
        this.profileIcon = element(by.css("span[data-ng-bind='vm.headData.data.customerName | titleCase']"));
        this.logoutLink = element(by.css("a[href='https://www.airtel.in/pkmslogout?redirectURL=https://www.airtel.in/s/selfcare?normalLogin']"));
        this.overViewTab = element(by.xpath(".//p[text() = 'OVERVIEW']"));
        this.paymentTab = element(by.xpath(".//*[@id='topElement']//span[text() = 'Payments Bank']"));
        this.prepaidTab = element(by.xpath(".//div[text()= 'Prepaid']"));
        //pop up window
        this.authenticationWindowMsgText = element(by.xpath(".//*[contains(text(),'To access netbanking, please authenti')]"));
        this.mPinTextBox = element(by.xpath(".//input[@maxlength='4']"));
        this.submitMpinButton = element(by.xpath(".//button[@class='btn btn-red btn-plan']"));
    }

    clickProfileIcon() {
        this.profileIcon.click();
    }

    clickLogoutLink() {
        this.logoutLink.click();
    }

    clickAccountOverViewTab(){
        this.overViewTab.click();
    }

    clickPrepaidTab() {
        this.prepaidTab.click();
    }

    clickAirtelLogo(){
        this.airtelLogo.click();
    }

    clickPaymentTab() {
        this.paymentTab.click();
        WebDriverWait.waitForElement(this.authenticationWindowMsgText);
        expect(WebElementOperationHelper.isElementPresent(this.authenticationWindowMsgText)).toBe(true);
    }

    inputeMpinTextBox(pin) {
        this.mPinTextBox.click();
        WebElementOperationHelper.inputText(this.mPinTextBox, pin);
    }

    clickSubmitMpinButton() {
        WebDriverWait.waitForElementTobeClickable(this.submitMpinButton);
        this.submitMpinButton.click();
    }

    provideMpin(pin) {
        this.inputeMpinTextBox(pin);
        this.clickSubmitMpinButton();
    }

    launchAirtelPaymentBankPage(pin){
        this.clickPaymentTab();
		this.provideMpin(pin);
    }

    logoutfromHomePage() {
        this.clickProfileIcon();
        WebDriverWait.waitForElement(this.logoutLink);
        this.clickLogoutLink();
    }

}