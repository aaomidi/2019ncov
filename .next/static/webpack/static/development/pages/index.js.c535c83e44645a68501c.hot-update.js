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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);

var _jsxFileName = "/home/richard/Projects/2019ncov/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var calculate = function calculate(days, category) {
  var data = [];

  var _loop = function _loop(x) {
    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data[category]).forEach(function (decease) {
      if (!data[x]) data[x] = {
        'name': 'Day ' + (x + 1)
      };
      var amount = data[category][decease][x];
      data[x][decease] = amount ? amount : 0;
    });
  };

  for (var x = 0; x < days; x++) {
    _loop(x);
  }

  return data;
};

function Index() {
  console.log(_data_json__WEBPACK_IMPORTED_MODULE_5__);
  var death100 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return calculate(100, 'deaths');
  }, []);
  var death45 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return calculate(45, 'deaths');
  }, []);
  var infected100 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return calculate(100, 'infected');
  }, []);
  var infected45 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return calculate(45, 'infected');
  }, []);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "2019 Novel Coronavirus (2019-nCoV)"), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Last updated: ", _data_json__WEBPACK_IMPORTED_MODULE_5__.lastUpdatedAt))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(Chart, {
    title: "Deaths over time",
    subtitle: "100 days",
    data: death100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(Chart, {
    title: "Infections over time",
    subtitle: "100 days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(Chart, {
    title: "Deaths over time",
    subtitle: "45 days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(Chart, {
    title: "Infections over time",
    subtitle: "45 days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))));
}

var Chart = function Chart(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      data = _ref.data;
  var data2 = [{
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
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["LineChart"], {
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
      lineNumber: 86
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["XAxis"], {
    dataKey: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["CartesianGrid"], {
    stroke: "#f5f5f5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Line"], {
    type: "monotone",
    dataKey: "uv",
    stroke: "#ff7300",
    yAxisId: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_4__["Line"], {
    type: "monotone",
    dataKey: "pv",
    stroke: "#387908",
    yAxisId: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, subtitle)));
};

/***/ })

})
//# sourceMappingURL=index.js.c535c83e44645a68501c.hot-update.js.map