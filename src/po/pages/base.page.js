class BasePage {
    async open(path = '') {
        return browser.url(`/${path}`)
    }
}

module.exports = BasePage