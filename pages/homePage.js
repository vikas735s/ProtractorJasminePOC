const Logger = require('../utils/logger.js');
const BasePage = require('./basePage.js');
module.exports = class HomePage extends BasePage {

    constructor() {
        super(element(by.xpath(".//*[contains(@class, 'profile-icon-sm mr-10')]")));
        this.profileIcon = element(by.xpath(".//*[contains(@class, 'profile-icon-sm mr-10')]"));
        this.logoutLink = element(by.xpath(".//a[@ng-click='vm.logout()' and contains(@href, 'http')]"));
    }

    clickProfileIcon() {
        this.profileIcon.click();
    }

    clickLogoutLink() {
        this.logoutLink.click();
    }

    logout(){
        this.clickProfileIcon()
        this.clickLogoutLink();
    }



}