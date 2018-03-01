module.exports = {
  before: browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .execute(function (url) {
        window.UPCS_URL = 'http://localhost:4001/500'
      })
      .setValue('.UpcForm input', ['000000000000', browser.Keys.ENTER])
  },

  '500 response sets error state': browser => {
    browser
      .assert.elementPresent('.UpcForm--error')
      .assert.containsText('.UpcForm--error label', 'My bad.')
      .end()
  }
}
