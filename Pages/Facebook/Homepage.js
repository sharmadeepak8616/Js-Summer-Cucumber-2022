const Commands = require("../Commands");
const { faker } = require('@faker-js/faker');
const Searchpage = require('../Hotels/Searchpage');

class Homepage {

    spage = new Searchpage();

    commands = new Commands();
    // Locators for web-elements on the Homepage (variables)
    loginEmailLocator = '#email';
    loginPwdLocator = '#pass';
    loginBtnLocator = '<button>';
    createNewAccountLocator = '//a[text()="Create New Account" or text()="Create new account"]';
    // OR -> //a[contains(text(), 'ccount')]



    // Functions in order to interact with the web-elements on the Homepage
    /**
     * function to type in email address field
     * Input: locator, data
     *  
     */
    async enterLoginEmail(loginEmail) {
        await spage.waitForSearchByPropertyName();
        await this.commands.typeInWebElement(this.loginEmailLocator, loginEmail);
        const fName = faker.name.firstName();
    }


    /**
     * function to type in password field
     * Input: locator, data
     *  
     */
    async enterLoginPassword(loginPwd) {
        await this.commands.typeInWebElement(this.loginPwdLocator, loginPwd);
    }

    /**
     * function to click on login button
     * Input: locator
     *  
     */
    async clickLoginButton() {
        await this.commands.clickWebElement(this.loginBtnLocator);
    }

    /**
     * function to click on Create New Account button
     * Input: locator
     *  
     */
    async clickLoginButton() {
        await this.commands.clickWebElement(this.loginBtnLocator);
    }

    /**
     * function to login
     * input: username, password
     */
    async login(username, password) {
        await this.enterLoginEmail(username);
        await this.enterLoginPassword(password);
        await this.clickLoginButton();
    }

    /**
     * function to check if login email is enabled
     * Input: -
     * Return type: boolean
     */
    async isLoginEmailFieldEnabled() {
        return await this.commands.isWebElementEnabled(this.loginEmailLocator);
    }

    /**
     * function to check if login password is enabled
     * Input: -
     * Return type: boolean
     */
    async isLoginPwdFieldEnabled() {
        return await this.commands.isWebElementEnabled(this.loginPwdLocator);
    }

    /**
     * function to check if login email is enabled
     * Input: -
     * Return type: boolean
     */
    async isLoginBtnEnabled() {
        return await this.commands.isWebElementEnabled(this.loginBtnLocator);
    }

    async isLoginFieldEnabled(fieldName) {
        let isEnabled = false;
        switch (fieldName.toLowerCase()) {
            case 'username':
                isEnabled = await this.commands.isWebElementEnabled(this.loginEmailLocator);
                break;
            case 'password':
                isEnabled = await this.commands.isWebElementEnabled(this.loginPwdLocator);
                break;
            case 'button':
                isEnabled = await this.commands.isWebElementEnabled(this.loginBtnLocator);
                break;        
            default:
                break;
        }
        return isEnabled;
    }

    async clickCreateNewAccount() {
        await this.commands.clickWebElement(this.createNewAccountLocator);
    }

    async getAllLinks() {
        return await this.commands.findWebElements('a');
    }

    async getHomePageTitle() {
        return await this.commands.getWindowTitle();
    }

    async clickLinkOnFooter(linkName) {
        await this.commands.scrollAndClickWebElement(`=${linkName}`);
    }

    async getNumberOfWindows() {
        return await this.commands.getWindowsCount();
    }

    async closeWindowExceptHome() {
        const allHandles = await this.commands.getAllWindowHandles();
        const homeHandle = await this.commands.getCurrentWindowHandle();
        for (const handle of allHandles) {
            await this.commands.switchToWindowHandle(handle);
            if (handle !== homeHandle) {
                await this.commands.closeWebWindow();
            }
        }
        await this.commands.switchToWindowHandle(homeHandle);
    }


}
module.exports = Homepage;