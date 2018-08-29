const Logger = require('../utils/logger.js');
const TestData = require('../testAndConfigData/testData.json');
const ConfigData = require("../testAndConfigData/config.json");
const LandingPage = require('../pages/landingPage.js');
const LoginPage = require('../pages/loginPage.js');
const HomePage = require('../pages/homePage.js');

module.exports = class BaseTest {
    static launchUrl() {
        browser.ignoreSynchronization = true;
        browser.get(ConfigData.baseUrl);
        let landingPage = new LandingPage();
    };

    static loginIntoApplication() {
        this.launchUrl();
        let landingPage = new LandingPage();
        landingPage.clickLoginLink();
        let loginPage = new LoginPage();
        loginPage.enterTextMobNo_ServiceIdTextBox(ConfigData.username);
        loginPage.enterTextPasswordOTPTextBox(ConfigData.password);
        loginPage.clickLoginButton();
        let homePage = new HomePage();
    };

    static logoutFromApplication() {
        homePage = new HomePage();
        homePage.clickAirtelLogo();
        landingPage = new LandingPage();
        landingPage.clickLoginLink();
        loginPage = new LoginPage();
    }

    static deleteAllCookies() {
        browser.driver.manage().deleteAllCookies()
    }

}