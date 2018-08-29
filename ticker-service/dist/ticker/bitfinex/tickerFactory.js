'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dateformat = require('dateformat');

var _dateformat2 = _interopRequireDefault(_dateformat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (broker, symbol, tickerData) => {
  const ticker = {
    broker: `${broker}`,
    symbol: `${symbol}`,
    datetime: (0, _dateformat2.default)(new Date(), 'yyyy-mm-dd HH:MM:ss'),

    ask_quantity: tickerData[3],
    ask_price: tickerData[2],
    bid_quantity: tickerData[1],
    bid_price: tickerData[0]
  };

  ticker.key = `${ticker.broker}_${ticker.symbol}`;

  return ticker;
};
//# sourceMappingURL=tickerFactory.js.map