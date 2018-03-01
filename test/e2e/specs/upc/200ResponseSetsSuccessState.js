module.exports = {
  before: browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .setValue('.UpcForm input', ['000000000000', browser.Keys.ENTER])
  },

  '200 response sets success state': browser => {
    browser
      .assert.elementPresent('.UpcForm--success')
      .assert.visible('.UpcForm--success img')
      .end()
  }
}
