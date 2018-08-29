'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _dateformat = require('dateformat');

var _dateformat2 = _interopRequireDefault(_dateformat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sequelize = new _sequelize2.default('postgres://dbuser:asdfgh@localhost:5432/db_ticker');

const Ticker = sequelize.define('t_ticker', {
  key: _sequelize2.default.STRING,
  datetime: _sequelize2.default.STRING,
  symbol: _sequelize2.default.STRING,
  broker: _sequelize2.default.STRING,
  bid_price: _sequelize2.default.REAL,
  bid_quantity: _sequelize2.default.REAL,
  ask_price: _sequelize2.default.REAL,
  ask_quantity: _sequelize2.default.REAL
}, {
  freezeTableName: true,
  timestamps: false
});

function create(broker, symbol, tickerData) {
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
}

function save(ticker) {
  Ticker.create(ticker).catch(error => console.log(error));
}

exports.default = {
  create,
  save
};
//# sourceMappingURL=index.js.map