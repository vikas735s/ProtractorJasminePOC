const Logger = require('../utils/logger.js');
const ConfigData = require('../testAndConfigData/config.json');

module.exports = class WebDriverWaitUtils {

    static waitForElement(elementLocator) {
        Logger().info('explicit wait for element is called');
        let EC = ExpectedConditions;
        let condition = EC.visibilityOf(elementLocator);
        browser.wait(condition, ConfigData.explicitlyWaitTimeout);
    }

    static waitForElementTobeClickable(elementLocator) {
        Logger().info('Wait for Element to be clickable for element is called');
        let EC = ExpectedConditions;
        let condition = EC.elementToBeClickable(elementLocator);
        browser.wait(condition, ConfigData.explicitlyWaitTimeout);
    }

    static waitUntilDocumentStateComplete() {
        browser.executeScript("return document.readyState").then(function (state) {
            Logger().info("State of DOM is " + state);
            if (state != "complete") {
                Logger().info("Going to sleep as my state is " + state);
                browser.sleep(ConfigData.sleepTimeout);
            }

        });
    }




}