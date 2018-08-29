import Koa from 'koa';
import koaBody from 'koa-body';
import tickerRoutes from './routes/ticker';

const app = new Koa();

app.use(koaBody());
app.use(tickerRoutes.routes());
app.listen(3000);
