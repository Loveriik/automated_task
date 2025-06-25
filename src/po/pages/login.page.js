const BasePage = require('./base.page')

class LoginPage extends BasePage {
    get nameInput() {
        return $('//input[@data-test="username"]')
    }

    get passwordInput() {
        return $('//input[@data-test="password"]')
    }

    get logInBtn() {
        return $('//input[@data-test="login-button"]')
    }

    get errorContainer() {
        return $('//div[contains(@class, "error-message-container")]')

    }

    get errorMessage() {
        return this.errorContainer.$('//h3[@data-test="error"]')
    }

    async clearInput(element) {
        await element.click();
        const value = await element.getValue()
        const valueLength = value.length;

        for (let i = 0; i < valueLength; i++) {
            await element.addValue('\uE003');
        }
    }
}

module.exports = LoginPage