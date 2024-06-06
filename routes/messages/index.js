const Router = require('koa-router');
const messages = require("../../db/faker");

const router = new Router;

router.get('/messages/unread', (ctx) => {
    ctx.response.set('Access-Control-Allow-Origin', '*');

    const timeactual = new Date();

    ctx.response.status = 200
    ctx.response.body = {
        "status": "ok",
        "timestamp": timeactual.getTime(),
        "messages": messages,
        };
});

module.exports = router;
