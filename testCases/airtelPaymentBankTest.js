const BaseTest = require('./baseTest.js');
const HomePage = require('../pages/homePage.js');
const ConfigData = require('../testAndConfigData/config.json');
const TestData = require("../testAndConfigData/testData.json")
const AirtelPaymentBankPage = require('../pages/airtelPaymentBankPage.js');


describe('Test Suit to test Airtel payment Page', function () {


    beforeAll(function () {
        BaseTest.loginIntoApplication();
        homePage = new HomePage();
        homePage.launchAirtelPaymentBankPage(ConfigData.mPin);
    });

    it('Verify if Airtel Page is alunched with success', function () {
        let airtelPaymentBankPage = new AirtelPaymentBankPage();
    });

    it('Verify Account Balance', function () {
        let airtelPaymentBankPage = new AirtelPaymentBankPage();
        expect(airtelPaymentBankPage.getAirtelMoneyBalanceText()).toEqual(TestData.airtelPaymentBankTest.airtelMoneybalanceTest.availableBalance);
    });
})