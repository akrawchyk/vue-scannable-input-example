const mockyeah = require('mockyeah');

mockyeah.get('/upcs', {
  json: {
    success: 'http://cultofthepartyparrot.com/parrots/hd/parrot.gif'
  },
  // latency: 1000
});

mockyeah.get('/400', {
  json: {
    error: 'You stupid idiot.'
  },
  status: 400,
  // latency: 2000
})

mockyeah.get('/500', {
  json: {
    error: 'My bad.'
  },
  status: 500,
  // latency: 2000
})
