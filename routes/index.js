const combineRouters = require('koa-combine-routers');

// const registration = require('./registration/index.js');
const sse = require('./sse/index.js');
// const faker = require('./messages/index.js')

const router = combineRouters(
  sse,
);

module.exports = router;
