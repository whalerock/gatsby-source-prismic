'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sourceNodes = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _gatsbyNodeHelpers = require('gatsby-node-helpers');

var _gatsbyNodeHelpers2 = _interopRequireDefault(_gatsbyNodeHelpers);

var _pipe = require('lodash/fp/pipe');

var _pipe2 = _interopRequireDefault(_pipe);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createNodeHelpers = (0, _gatsbyNodeHelpers2.default)({ typePrefix: 'Prismic' }),
    createNodeFactory = _createNodeHelpers.createNodeFactory;

var DocumentNode = createNodeFactory('Document');

var sourceNodes = exports.sourceNodes = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, _ref3) {
    var createNode = _ref2.boundActionCreators.createNode;
    var repositoryName = _ref3.repositoryName,
        accessToken = _ref3.accessToken,
        options = _ref3.options;

    var _ref4, documents;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fetch2.default)({ repositoryName: repositoryName, accessToken: accessToken, options: options });

          case 2:
            _ref4 = _context.sent;
            documents = _ref4.documents;


            documents.forEach((0, _pipe2.default)(DocumentNode, createNode));

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function sourceNodes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();