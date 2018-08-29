import Router from 'koa-router';
import tickers from 'ticker-db';

const router = new Router({ prefix: '/tickers' });

router.get('/', async (ctx) => {
  const data = await tickers.getAll();

  ctx.body = {
    status: 'success',
    data,
  };
});

router.get('/:id', async (ctx) => {
  const ticker = await tickers.getById(ctx.params.id);

  if (ticker) {
    ctx.body = {
      status: 'success',
      ticker,
    };
  } else {
    ctx.response.status = 404;
  }
});

export default router;
