webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);
var _jsxFileName = "/home/richard/Projects/2019ncov/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Index() {
  console.log(_data_json__WEBPACK_IMPORTED_MODULE_4__);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "2019 Novel Coronavirus (2019-nCoV)"), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Last updated: ", _data_json__WEBPACK_IMPORTED_MODULE_4__.lastUpdatedAt))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(Chart, {
    title: "Deaths over time",
    subtitle: "100 days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(Chart, {
    title: "Infections over time",
    subtitle: "100 days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(Chart, {
    title: "Deaths over time",
    subtitle: "45 days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(Chart, {
    title: "Infections over time",
    subtitle: "45 days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))));
}

var Chart = function Chart(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      data = _ref.data;
  data = [{
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  }, {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  }, {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  }, {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  }, {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  }, {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  }, {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }];
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["LineChart"], {
    width: 400,
    height: 400,
    data: data,
    margin: {
      top: 5,
      right: 20,
      left: 10,
      bottom: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
    dataKey: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["CartesianGrid"], {
    stroke: "#f5f5f5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    type: "monotone",
    dataKey: "uv",
    stroke: "#ff7300",
    yAxisId: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    type: "monotone",
    dataKey: "pv",
    stroke: "#387908",
    yAxisId: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, subtitle)));
};

/***/ })

})
//# sourceMappingURL=index.js.74e33e609370490b7816.hot-update.js.map