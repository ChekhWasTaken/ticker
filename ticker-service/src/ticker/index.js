import database from 'ticker-db';
import bitfinex from './bitfinex';
import logger from '../logger';

export default () => {
  logger.info('getting the ticker from api');
  bitfinex.get(bitfinex.symbols.btcUsd)
    .then(ticker => database.save(ticker));
};
