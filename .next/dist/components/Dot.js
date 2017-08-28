'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleUtils = require('../utils/styleUtils');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _toId = require('to-id');

var _toId2 = _interopRequireDefault(_toId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/paularp/Documents/projects/prweb/components/Dot.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: ', ';\n  color: ', ';\n  margin-top: 5%;\n  margin-left: 5%;\n  transition: all .5s ease;\n  margin-bottom: 80px;\n\n  &:hover {\n    transform: scale(1.3);\n  }\n  ', '\n'], ['\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: ', ';\n  color: ', ';\n  margin-top: 5%;\n  margin-left: 5%;\n  transition: all .5s ease;\n  margin-bottom: 80px;\n\n  &:hover {\n    transform: scale(1.3);\n  }\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      margin-bottom: 50px;\n    '], ['\n      margin-bottom: 50px;\n    ']);

var Dot = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.cr;
}, function (props) {
  return props.theme.bg;
}, _styleUtils.media.phone(_templateObject2));

exports.default = function (_ref) {
  var to = _ref.to;
  return _react2.default.createElement(_link2.default, { prefetch: true, href: to || '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(Dot, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }));
};