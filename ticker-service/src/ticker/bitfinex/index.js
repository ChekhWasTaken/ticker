import request from 'request-promise';
import tickerFactory from './tickerFactory';
import symbols from './symbols';
import logger from '../../logger';

async function get(symbol) {
  const btcUsdRequestOpts = {
    uri: `https://api.bitfinex.com/v2/ticker/${symbol}`,
    json: true,
  };

  logger.info(`downloading data for symbol: ${symbol}`);
  const data = await request(btcUsdRequestOpts);
  const ticker = tickerFactory('bitfinex', symbol, data);

  logger.info('downloaded ticker: %j', ticker);

  return ticker;
}

export default {
  symbols,
  get,
};
