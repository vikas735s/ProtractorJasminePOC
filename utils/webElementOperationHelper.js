const Logger = require('../utils/logger.js');
module.exports = class WebelementOperationHelper {

    static async getElementTextContent(webElement) {
        return browser.executeScript('return arguments[0].textContent', webElement);
    }

    static getTextofWebelement(webElement){
        //it must me handled 
        return webElement.getText();
    };

    static clearText(webElement) {
        webElement.clear();
    }

    static inputText(webElement, text) {
        this.clearText(webElement);
        webElement.sendKeys(text);
    }

    static async isElementPresent(webElement) {
         return webElement.isPresent().then(function(value)  {
            return value;
        })
    }


}