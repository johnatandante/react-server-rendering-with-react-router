/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(3);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(4);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(7);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _api = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// importing api function to parse before returning data


app.use((0, _cors2.default)());

app.use(_express2.default.static('public'));

app.get('*', function (req, res, next) {

    (0, _api.fetchPopularRepos)().then(function (data) {

        var markup = (0, _server.renderToString)(_react2.default.createElement(_App2.default, { data: data }));

        res.send('\n            <!DOCTYPE html>\n            <html>\n                <head>\n                    <title>SSR with RR</title>\n                    <script src=\'/bundle.js\' defer></script>\n                    <script>window.__INITIAL_DATA__ = ' + (0, _serializeJavascript2.default)(data) + '</script>\n                </head>\n\n                <body>\n                    <div id=\'app\'>' + markup + '</div>\n                </body>\n\n            </html>\n        ');
    });
});

app.listen(3000, function () {
    console.log('listening to port 3000');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = __webpack_require__(10);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            console.log("data: ", this.props.data);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Grid2.default, { data: this.props.data })
            );
        }
    }]);

    return App;
}(_react.Component);

App.propTypes = {
    data: _propTypes2.default.array.isRequired
};

exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchPopularRepos = fetchPopularRepos;

var _isomorphicFetch = __webpack_require__(9);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchPopularRepos() {
    var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';


    // const uri = encodeURI(`http://api.github.com/search/repositories?q=stars:&gt+language:${language}&sort=stars&order=desc&type=Repositories`);
    var uri = encodeURI('http://localhost/repositories.json?language=' + language);

    return (0, _isomorphicFetch2.default)(uri).then(function (data) {
        return data.json();
    }).then(function (repos) {
        return repos.items;
    }).catch(function (error) {
        console.warn(error);
        return null;
    });
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_Component) {
    _inherits(Grid, _Component);

    function Grid() {
        _classCallCheck(this, Grid);

        return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
    }

    _createClass(Grid, [{
        key: 'render',
        value: function render() {
            var repos = this.props.data;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ul',
                    { style: { display: 'flex', flexWrap: 'wrap' } },
                    repos.map(function (_ref) {
                        var name = _ref.name,
                            owner = _ref.owner,
                            stargazers_count = _ref.stargazers_count,
                            html_url = _ref.html_url;
                        return _react2.default.createElement(
                            'li',
                            { key: name, style: { margin: 30 } },
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: html_url },
                                        name
                                    ),
                                    ' - @',
                                    owner.login
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    stargazers_count,
                                    ' stars'
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Grid;
}(_react.Component);

Grid.propTypes = {
    data: _propTypes2.default.array.isRequired
};

exports.default = Grid;

/***/ })
/******/ ]);