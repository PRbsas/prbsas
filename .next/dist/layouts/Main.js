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

var _Dot = require('../components/Dot');

var _Dot2 = _interopRequireDefault(_Dot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/paularp/Documents/projects/prbsas/layouts/Main.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\n  transition: all .5s ease;\n  line-height: 1.5;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n'], ['\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\n  transition: all .5s ease;\n  line-height: 1.5;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 12rem;\n  font-weight: bold;\n  margin-top: 0;\n  margin-bottom: 0;\n'], ['\n  font-size: 12rem;\n  font-weight: bold;\n  margin-top: 0;\n  margin-bottom: 0;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 2rem;\n  margin: 0 auto;\n'], ['\n  font-size: 2rem;\n  margin: 0 auto;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 1.2rem;\n  width: 75%;\n'], ['\n  font-size: 1.2rem;\n  width: 75%;\n']);

var Wrapper = _styledComponents2.default.div(_templateObject);
var Title = _styledComponents2.default.h1(_templateObject2);
var Name = _styledComponents2.default.h2(_templateObject3);
var Who = _styledComponents2.default.p(_templateObject4);

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_Dot2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, 'prbsas'), _react2.default.createElement(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, 'Paula Ramirez Pitzen'), _react2.default.createElement(Who, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, 'Architect and self-taught Front-end Developer based in NYC'), children);
};