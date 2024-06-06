const Router = require('koa-router');
const { streamEvents } = require('http-event-stream');
const { faker } = require('@faker-js/faker');

const createRandomUser = require("../../db/faker");
const timeactual = new Date();

const router = new Router();

router.get('/messages/unread', async (ctx) => {
  streamEvents(ctx.req, ctx.res, {
    async fetch() {
      console.log();
      return [];
    },
    
    async stream(sse) {
      setInterval(() => {
        const message = faker.helpers.multiple(createRandomUser, {count: 1})
        const data = {
          "status": "ok",
          "timestamp": timeactual.getTime(),
          "messages": message,
          };
        sse.sendEvent({
          data: JSON.stringify(data),
        });
      }, 3000);

      return () => {};
    }
  });
  
  ctx.respond = false;
});

module.exports = router;