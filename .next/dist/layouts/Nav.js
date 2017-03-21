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

var _jsxFileName = '/Users/paularp/Documents/projects/prbsas/layouts/Nav.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  text-decoration: none;\n  margin-right: 20px;\n  color: inherit;\n\n  &:hover {\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n    cursor: pointer;\n    color: inherit;\n  }\n  &:visited {\n    text-decoration: none;\n    color: inherit;\n  }\n'], ['\n  text-decoration: none;\n  margin-right: 20px;\n  color: inherit;\n\n  &:hover {\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n    cursor: pointer;\n    color: inherit;\n  }\n  &:visited {\n    text-decoration: none;\n    color: inherit;\n  }\n']);

var A = _styledComponents2.default.a(_templateObject);

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(A, { href: 'https://twitter.com/PRbsas', target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'Twitter'), _react2.default.createElement(A, { href: 'https://github.com/PRbsas', target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'GitHub'), _react2.default.createElement(_link2.default, { prefetch: true, href: '/projects', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(A, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, 'Projects')), _react2.default.createElement(A, { href: 'https://www.linkedin.com/in/pramirezpitzen', target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'LinkedIn'), _react2.default.createElement(A, { href: 'mailto:paularamirezpitzen@gmail.com', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, 'Email'), _react2.default.createElement(A, { href: 'https://standardresume.co/paularamirezpitzen', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Resume'));
};