module.exports = {
  before: browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .setValue('.UpcInput input', ['000000000000', browser.Keys.ENTER])
  },

  '200 response sets success state': browser => {
    browser
      .assert.elementPresent('.UpcInput--success')
      .assert.visible('.UpcInput--success img')
      .end()
  }
}
