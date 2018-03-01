module.exports = {
  before: browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .setValue('.UpcForm input', ['00000', browser.Keys.ENTER])
  },

  'invalid upc sets error state': browser => {
    browser
      .assert.elementPresent('.UpcForm--error')
      .assert.containsText('label', 'Invalid UPC')
      .end()
  }
}
