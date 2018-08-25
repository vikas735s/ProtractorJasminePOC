const Logger = require('../utils/logger.js');
module.exports = class WebelementOperationHelper {

    static getElementTextContent(webElement) {
        return browser.executeScript('return arguments[0].textContent', webElement);
    }

    static clearText(webElement) {
        webElement.clear();
    }

    static inputText(webElement, text) {
        this.clearText(webElement);
        webElement.sendKeys(text);
    }
}