function loginData(testCase) {
    const testData = {
        'uc-1': { username: 'user1', password: '12314' },
        'uc-2': { username: 'standard_user', password: '1234' },
        'uc-3': { username: 'standard_user', password: 'secret_sauce' }
    }

    return testData[testCase];
}

module.exports = {
    loginData
}