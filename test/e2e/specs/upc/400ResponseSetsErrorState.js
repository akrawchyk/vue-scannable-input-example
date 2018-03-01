module.exports = {
  before: browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .execute(function () {
        window.UPCS_URL = 'http://localhost:4001/400'
      })
      .setValue('.UpcForm input', ['000000000000', browser.Keys.ENTER])
  },

  '400 response sets error state': browser => {
    browser
      .assert.elementPresent('.UpcForm--error')
      .assert.containsText('.UpcForm--error label', 'You stupid idiot.')
      .end()
  }
}
