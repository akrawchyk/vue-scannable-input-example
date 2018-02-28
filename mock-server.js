const mockyeah = require('mockyeah');

mockyeah.get('/upcs', {
  json: {
    success: 'http://cultofthepartyparrot.com/parrots/hd/parrot.gif'
  },
  latency: 2000
});

mockyeah.get('/ohno', {
  json: {
    error: 'You stupid idiot.'
  },
  status: 400,
  latency: 2000
})
