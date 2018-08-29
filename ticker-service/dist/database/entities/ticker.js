'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = sequelize => {
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

  return Ticker;
};
//# sourceMappingURL=ticker.js.map