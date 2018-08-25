const Logger = require('../utils/logger.js');
const TestData = require('../testAndConfigData/testData.json');
const ConfigData = require("../testAndConfigData/config.json");
const LandingPage = require('../pages/landingPage.js');
const LoginPage = require('../pages/loginPage.js');
const HomePage = require('../pages/homePage.js');
let landingPage;
let loginPage;
let homePage;

module.exports = class BaseTest {
    static launchUrl() {
        browser.ignoreSynchronization = true;
        browser.get(ConfigData.baseUrl);
        landingPage = new LandingPage();
    };

    static launchLoginUrl() {
        browser.ignoreSynchronization = true;
        browser.get(ConfigData.loginPageUrl);
        this.deleteAllCookies();
    };

    static loginIntoApplication() {
        this.launchLoginUrl();
        this.deleteAllCookies();
        loginPage = new LoginPage();
        loginPage.enterTextMobNo_ServiceIdTextBox(ConfigData.username);
        loginPage.enterTextPasswordOTPTextBox(ConfigData.password);
        loginPage.clickLoginButton();
        homePage = new HomePage();
    };

    static logoutFromApplication() {
        homePage = new HomePage();
        homePage.logout();
        loginPage = new LoginPage();
    }

    static deleteAllCookies() {
        browser.driver.manage().deleteAllCookies()

    }

    deleteAllCache() {

    }

}