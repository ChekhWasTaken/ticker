'use strict';

var _ticker = require('./ticker');

var _ticker2 = _interopRequireDefault(_ticker);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_logger2.default.info('starting the app...');

setInterval(_ticker2.default, 3000);
//# sourceMappingURL=index.js.map