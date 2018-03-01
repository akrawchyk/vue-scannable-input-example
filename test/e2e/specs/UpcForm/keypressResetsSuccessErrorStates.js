module.exports = {
  before: browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
  },

  'keypress resets error state': browser => {
    browser
      .setValue('.UpcForm input', ['00000', browser.Keys.ENTER]) // set error state
      .setValue('.UpcForm input', ['000'])
      .assert.cssClassNotPresent('.UpcForm', 'UpcForm--error')
      .assert.cssClassNotPresent('.UpcForm', 'UpcForm--success')
      .end()
  },

  'keypress resets success state': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .setValue('.UpcForm input', ['000000000000', browser.Keys.ENTER])
      .setValue('.UpcForm input', ['0000000000'])
      .assert.cssClassNotPresent('.UpcForm', 'UpcForm--error')
      .assert.cssClassNotPresent('.UpcForm', 'UpcForm--success')
      .end()
  }
}
