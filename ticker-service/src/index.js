import ticker from './ticker';
import logger from './logger';

logger.info('starting the app...');

setInterval(ticker, 3000);
