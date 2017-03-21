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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Main = require('../layouts/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Nav = require('../layouts/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/paularp/Documents/projects/prbsas/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: ', ';\n  color: ', ';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  height: 100%;\n  width: 100%;\n'], ['\n  background: ', ';\n  color: ', ';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  height: 100%;\n  width: 100%;\n']);

var Global = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.bg;
}, function (props) {
  return props.theme.cr;
});

var themes = [{ bg: '#ffffff', cr: '#000000' }, { bg: '#ccffff', cr: '#ff3366' }, { bg: '#b6f001', cr: '#3b01f0' }, { bg: '#f2e6d8', cr: '#2ee760' }, { bg: '#ffffff', cr: '#85144b' }, { bg: '#fce2ef', cr: '#ee3e0f' }, { bg: '#f2e6d8', cr: '#382ad7' }, { bg: '#ffffff', cr: '#fe5b0e' }, { bg: '#ffffff', cr: '#0000ff' }, { bg: '#7df2e8', cr: '#861219' }, { bg: '#ff3333', cr: '#0a0a0a' }, { bg: '#ffffff', cr: '#ffde37' }];
var i = 0;
function toggleTheme() {
  if (i < themes.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
//    <Head><title>prbsas</title></Head>

exports.default = function () {
  return _react2.default.createElement(_styledComponents.ThemeProvider, { theme: themes[i], __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement(Global, { onClick: function onClick() {
      return toggleTheme();
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react2.default.createElement(_Main2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, _react2.default.createElement(_Nav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }))));
};