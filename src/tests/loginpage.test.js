const LoginPage = require('../po/pages/login.page')
const { TEST_DATA } = require('../utils/loginInfo')

const loginPage = new LoginPage()

describe('Testing login form page', async () => {
    beforeEach(async () => {
        await loginPage.open()
    })

    it('UC-1: Test Login form with empty credentials', async () => {
        await loginPage.nameInput.setValue(TEST_DATA['uc-1'].username)
        await loginPage.passwordInput.setValue(TEST_DATA['uc-1'].password)

        await loginPage.clearInput(loginPage.nameInput)
        await loginPage.clearInput(loginPage.passwordInput)

        await loginPage.logInBtn.click()

        await expect(loginPage.errorContainer).toBeDisplayed()
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required')
    })

    it('UC-2: Test Login form with credentials by passing Username', async () => {
        await loginPage.nameInput.setValue(TEST_DATA['uc-2'].username)
        await loginPage.passwordInput.setValue(TEST_DATA['uc-2'].password)

        await loginPage.clearInput(loginPage.passwordInput)

        await loginPage.logInBtn.click()

        await expect(loginPage.errorContainer).toBeDisplayed()
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required')
    })

    it('UC-3: Test Login form with credentials by passing Username & Password', async () => {
        await loginPage.nameInput.setValue(TEST_DATA['uc-3'].username)
        await loginPage.passwordInput.setValue(TEST_DATA['uc-3'].password)

        await loginPage.logInBtn.click()

        await expect(browser).toHaveTitle('Swag Labs')
    })
})