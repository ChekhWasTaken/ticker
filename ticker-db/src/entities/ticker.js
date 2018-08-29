import Sequelize from 'sequelize';

export default (sequelize) => {
  const Ticker = sequelize.define('t_ticker', {
    key: Sequelize.STRING,
    datetime: Sequelize.STRING,
    symbol: Sequelize.STRING,
    broker: Sequelize.STRING,
    bid_price: Sequelize.REAL,
    bid_quantity: Sequelize.REAL,
    ask_price: Sequelize.REAL,
    ask_quantity: Sequelize.REAL,
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  return Ticker;
};
