'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('dotenv/config');

var _config2 = _interopRequireDefault(_config);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _ticker = require('./entities/ticker');

var _ticker2 = _interopRequireDefault(_ticker);

var _config3 = require('./config');

var _config4 = _interopRequireDefault(_config3);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sequelize = new _sequelize2.default(_config4.default.connectionString, { logging: false, operatorsAliases: false });

function save(ticker) {
  _logger2.default.info('saving %j...', ticker);
  (0, _ticker2.default)(sequelize).create(ticker);
  _logger2.default.info('saved');
}

async function getAll() {
  return (0, _ticker2.default)(sequelize).findAll();
}

async function getById(id) {
  return (0, _ticker2.default)(sequelize).findById(id);
}

exports.default = {
  save,
  getAll,
  getById
};
//# sourceMappingURL=index.js.map