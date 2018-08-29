const BaseTest = require('./basePage.js');
const HomePage = require('./homePage.js');
const WebelementOperationHelper = require("../utils/webElementOperationHelper.js");

module.exports = class AirtelPaymentBankPage extends BaseTest {

    constructor() {
        super(element(by.xpath(".//h4[contains(text() ,'Payments Bank Wallet')]")));
        this.airtelMoneyBalance = element(by.xpath(".//div[@class='balance-mob-view']/p/span"));
    }

    getAirtelMoneyBalanceText() {
        return WebelementOperationHelper.getElementTextContent(this.airtelMoneyBalance);
    }
}