'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _ticker = require('./entities/ticker');

var _ticker2 = _interopRequireDefault(_ticker);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('../../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sequelize = new _sequelize2.default(_config2.default.connectionString, { logging: false, operatorsAliases: false });

function save(ticker) {
  _logger2.default.info('saving %j...', ticker);
  (0, _ticker2.default)(sequelize).create(ticker);
  _logger2.default.info('saved');
}

exports.default = {
  save
};
//# sourceMappingURL=index.js.map