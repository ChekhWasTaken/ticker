'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async function (symbol) {
  const btcUsdRequestOpts = {
    uri: `https://api.bitfinex.com/v2/ticker/${symbol}`,
    json: true
  };
  const data = await (0, _requestPromise2.default)(btcUsdRequestOpts);

  return _model2.default.create('bitfinex', symbol, data);
};
//# sourceMappingURL=bitfinexRepository.js.map