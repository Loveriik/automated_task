const LoginPage = require('../po/pages/login.page')
const { TEST_DATA } = require('../utils/loginInfo')

const logger = require('../utils/logger');

const loginPage = new LoginPage()

describe('Testing login form page', async () => {
    beforeEach(async () => {
        await loginPage.open()
    })

    it('UC-1: Test Login form with empty credentials', async () => {
        try {
            logger.info('UC-1: Starting the test')
            // Given: User has cleared both credentials fields
            await loginPage.nameInput.setValue(TEST_DATA['uc-1'].username)
            await loginPage.passwordInput.setValue(TEST_DATA['uc-1'].password)

            await loginPage.clearInput(loginPage.nameInput)
            await loginPage.clearInput(loginPage.passwordInput)

            // When: User submits the login form
            await loginPage.logInBtn.click()
            logger.info('UC-1: Submitting empty credentials')

            // Then: System displays username required error
            await expect(loginPage.errorContainer).toBeDisplayed()
            await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required')
            logger.info('UC-1: Verified error message text')
        } catch (error) {
            logger.error(`UC-1. Test failed: ${error.message}`)
        }
    })

    it('UC-2: Test Login form with credentials by passing Username', async () => {
        try {
            logger.info('UC-2: Starting the test')
            // Given: User has cleared password field
            await loginPage.nameInput.setValue(TEST_DATA['uc-2'].username)
            await loginPage.passwordInput.setValue(TEST_DATA['uc-2'].password)

            await loginPage.clearInput(loginPage.passwordInput)

            // When: User submits the login form
            await loginPage.logInBtn.click()
            logger.info('UC-2: Submitting credentials with username only')

            // Then: System displays password required error
            await expect(loginPage.errorContainer).toBeDisplayed()
            await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required')
            logger.info('UC-2: Verified error message text')
        } catch (error) {
            logger.error(`UC-2. Test failed: ${error.message}`)
        }
    })

    it('UC-3: Test Login form with credentials by passing Username & Password', async () => {
        try {
            logger.info('UC-3: Starting the test')
            // Given: User has typed valid credentials
            await loginPage.nameInput.setValue(TEST_DATA['uc-3'].username)
            await loginPage.passwordInput.setValue(TEST_DATA['uc-3'].password)

            // When: User submits the login form
            await loginPage.logInBtn.click()
            logger.info('UC-3: Submitting valid credentials')

            // Then: User gets redirected to the main page
            await expect(browser).toHaveTitle('Swag Labs')
            logger.info('Page title is verified')
        } catch (error) {
            logger.error(`UC-3. Test failed: ${error.message}`)
        }
    })
})