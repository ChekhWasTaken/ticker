'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = _winston2.default.createLogger({
  transports: [new _winston2.default.transports.Console({
    level: 'debug',
    handleExceptions: true,
    json: true,
    colorize: true,
    prettyPrint: true
  })]
});

exports.default = logger;
//# sourceMappingURL=index.js.map