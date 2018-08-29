'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tickerDb = require('ticker-db');

var _tickerDb2 = _interopRequireDefault(_tickerDb);

var _bitfinex = require('./bitfinex');

var _bitfinex2 = _interopRequireDefault(_bitfinex);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => {
  _logger2.default.info('getting the ticker from api');
  _bitfinex2.default.get(_bitfinex2.default.symbols.btcUsd).then(ticker => _tickerDb2.default.save(ticker));
};
//# sourceMappingURL=index.js.map