import dotenv from 'dotenv/config';
import Sequelize from 'sequelize';
import Ticker from './entities/ticker';
import configs from './config';
import logger from './logger';

const sequelize = new Sequelize(configs.connectionString,
  { logging: false, operatorsAliases: false });

function tickerTransformer(tickerModel) {
  return {
    key: tickerModel.key,
    datetime: tickerModel.datetime,
    symbol: tickerModel.symbol,
    broker: tickerModel.broker,
    bid_price: tickerModel.bid_price,
    bid_quantity: tickerModel.bid_quantity,
    ask_price: tickerModel.ask_price,
    ask_quantity: tickerModel.ask_quantity,
  };
}

function save(ticker) {
  logger.info('saving %j...', ticker);
  Ticker(sequelize).create(ticker);
  logger.info('saved');
}

async function getAll() {
  const tickerModels = await Ticker(sequelize).findAll();
  return tickerModels.map(tickerModel => tickerTransformer(tickerModel));
}

async function getById(id) {
  const tickerModel = await Ticker(sequelize).findById(id);
  return tickerTransformer(tickerModel);
}

export default {
  save,
  getAll,
  getById,
};
