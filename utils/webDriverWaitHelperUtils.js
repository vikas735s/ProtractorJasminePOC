var logger = require('../utils/logger.js');
const TestData = require('../testAndConfigData/testData.json');

module.exports = class WebDriverWaitUtils {

    waitForElement(elementLocator) {
        logger().info('explicit wait for element is called');
        let EC = ExpectedConditions;
        let condition = EC.visibilityOf(elementLocator);
        browser.wait(condition, TestData.explicitlyWaitTimeout);
    }
}