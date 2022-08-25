const Commands = require("../Commands");

class Loginpage {

    commands = new Commands();

    // Locators of login page webElement
    loginErrorLocator = '//div[contains(text(),"The email address or mobile number")]';


    // Function in order to interact with login page web elements

    /**
     * function to get if login error is displayed
     */
    async isLoginErrDisplayed() {
        await this.commands.isWebElementDisplayed(this.loginErrorLocator);
    }





}
module.exports = Loginpage;