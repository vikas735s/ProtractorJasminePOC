const Logger = require('../utils/logger.js');
const WebDriverWait = require('../utils/webDriverWaitHelperUtils.js');
module.exports = class BasePage {

    constructor(uniqueEle) {
        if (this.constructor == BasePage) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.isPageLoaded(uniqueEle);
    }

    getUniqueElement() {
        throw new Error('getUniqueElement should be implimented in Sub Class');
    }

    isPageLoaded(uniqueEle) {
        WebDriverWait.waitUntilDocumentStateComplete();
        WebDriverWait.waitForElement(uniqueEle);
        uniqueEle.isPresent().then(function (isPresent) {
            if (isPresent) {
                expect(isPresent).toBe(true);
                Logger().info("Unique Element is Displayed");
            }
            else {
                Logger().info('Unique Element is not Displayed');
                throw new Error('Page is not loaded as unique Element is not displayed');
            }
        });
    }
}