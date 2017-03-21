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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/paularp/Documents/projects/prbsas/components/Dot.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border-width:10px;\n  border-style: solid;\n  margin-top: 5%;\n  transition: all .5s ease;\n\n  &:hover {\n    transform: scale(1.5);\n  }\n'], ['\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border-width:10px;\n  border-style: solid;\n  margin-top: 5%;\n  transition: all .5s ease;\n\n  &:hover {\n    transform: scale(1.5);\n  }\n']);

var Dot = _styledComponents2.default.div(_templateObject);

exports.default = function () {
  return _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(Dot, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }));
};