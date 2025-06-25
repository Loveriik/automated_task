const LoginPage = require('../po/pages/login.page')
const { loginData } = require('../utils/loginInfo')

const loginPage = new LoginPage()

describe('Testing login form page', async () => {
    let data;

    beforeEach(async () => {
        await loginPage.open()
    })

    afterEach(() => {
        data = null;
    })

    it('UC-1: Test Login form with empty credentials', async () => {
        data = loginData('uc-1'.toLowerCase())

        await loginPage.nameInput.setValue(data.username)
        await loginPage.passwordInput.setValue(data.password)

        await loginPage.clearInput(loginPage.nameInput)
        await loginPage.clearInput(loginPage.passwordInput)

        await loginPage.logInBtn.click()

        await expect(loginPage.errorContainer).toBeDisplayed()
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required')
    })

    it('UC-2: Test Login form with credentials by passing Username', async () => {
        data = loginData('uc-2'.toLowerCase())

        await loginPage.nameInput.setValue(data.username)
        await loginPage.passwordInput.setValue(data.password)

        await loginPage.clearInput(loginPage.passwordInput)

        await loginPage.logInBtn.click()

        await expect(loginPage.errorContainer).toBeDisplayed()
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required')
    })

    it('UC-3: Test Login form with credentials by passing Username & Password', async () => {
        data = loginData('uc-3'.toLowerCase())
        await loginPage.nameInput.setValue(data.username)
        await loginPage.passwordInput.setValue(data.password)

        await loginPage.logInBtn.click()

        await expect(browser).toHaveTitle('Swag Labs')
    })
})