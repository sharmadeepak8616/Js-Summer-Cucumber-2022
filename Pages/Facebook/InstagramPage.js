const Commands = require("../Commands");

class InstagramPage {

    commands = new Commands();
    // Locators for web-elements on the Instagram page (variables)

    async getPageTitle() {
        return await this.commands.getWindowTitle();
    }


}
module.exports = InstagramPage;