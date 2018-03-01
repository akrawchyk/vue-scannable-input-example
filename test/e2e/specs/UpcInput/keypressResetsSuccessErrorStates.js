module.exports = {
  before: browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
  },

  'keypress resets error state': browser => {
    browser
      .setValue('.UpcInput input', ['00000', browser.Keys.ENTER]) // set error state
      .setValue('.UpcInput input', ['000'])
      .assert.cssClassNotPresent('.UpcInput', 'UpcInput--error')
      .assert.cssClassNotPresent('.UpcInput', 'UpcInput--success')
      .end()
  },

  'keypress resets success state': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .setValue('.UpcInput input', ['000000000000', browser.Keys.ENTER])
      .setValue('.UpcInput input', ['0000000000'])
      .assert.cssClassNotPresent('.UpcInput', 'UpcInput--error')
      .assert.cssClassNotPresent('.UpcInput', 'UpcInput--success')
      .end()
  }
}
