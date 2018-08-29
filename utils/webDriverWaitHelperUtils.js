const Logger = require('../utils/logger.js');
const TestData = require('../testAndConfigData/testData.json');

module.exports = class WebDriverWaitUtils {

    static waitForElement(elementLocator) {
        Logger().info('explicit wait for element is called');
        let EC = ExpectedConditions;
        let condition = EC.visibilityOf(elementLocator);
        browser.wait(condition, TestData.explicitlyWaitTimeout);
    }

    static waitForElementTobeClickable(elementLocator){
        Logger().info('Wait for Element to be clickable for element is called');
        let EC = ExpectedConditions;
        let condition = EC.elementToBeClickable(elementLocator);
        browser.wait(condition, TestData.explicitlyWaitTimeout);
    }
}