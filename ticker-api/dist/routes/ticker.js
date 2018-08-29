'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _tickerDb = require('ticker-db');

var _tickerDb2 = _interopRequireDefault(_tickerDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter2.default({ prefix: '/tickers' });

router.get('/', async ctx => {
  const data = await _tickerDb2.default.getAll();

  ctx.body = {
    status: 'success',
    data
  };
});

router.get('/:id', async ctx => {
  const ticker = await _tickerDb2.default.getById(ctx.params.id);

  ctx.body = {
    status: 'success',
    ticker
  };
});

exports.default = router;
//# sourceMappingURL=ticker.js.map