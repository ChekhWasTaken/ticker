'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _tickerFactory = require('./tickerFactory');

var _tickerFactory2 = _interopRequireDefault(_tickerFactory);

var _symbols = require('./symbols');

var _symbols2 = _interopRequireDefault(_symbols);

var _logger = require('../../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function get(symbol) {
  const btcUsdRequestOpts = {
    uri: `https://api.bitfinex.com/v2/ticker/${symbol}`,
    json: true
  };

  _logger2.default.info(`downloading data for symbol: ${symbol}`);
  const data = await (0, _requestPromise2.default)(btcUsdRequestOpts);
  const ticker = (0, _tickerFactory2.default)('bitfinex', symbol, data);

  _logger2.default.info('downloaded ticker: %j', ticker);

  return ticker;
}

exports.default = {
  symbols: _symbols2.default,
  get
};
//# sourceMappingURL=index.js.map