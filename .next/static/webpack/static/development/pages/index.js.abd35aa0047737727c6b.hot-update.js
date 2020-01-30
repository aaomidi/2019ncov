webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
false,

/***/ "./node_modules/core-js/library/fn/object/keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_a-function.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
false,

/***/ "./node_modules/core-js/library/modules/_cof.js":
false,

/***/ "./node_modules/core-js/library/modules/_core.js":
false,

/***/ "./node_modules/core-js/library/modules/_ctx.js":
false,

/***/ "./node_modules/core-js/library/modules/_defined.js":
false,

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
false,

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_export.js":
false,

/***/ "./node_modules/core-js/library/modules/_fails.js":
false,

/***/ "./node_modules/core-js/library/modules/_global.js":
false,

/***/ "./node_modules/core-js/library/modules/_has.js":
false,

/***/ "./node_modules/core-js/library/modules/_hide.js":
false,

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_library.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
false,

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-length.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
false,

/***/ "./node_modules/core-js/library/modules/_uid.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
false,

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





var keys = ["2019-nCoV", "Swine Flu", "SARS"];

var calculate = function calculate(days, category) {
  var tmp = [];

  var _loop = function _loop(x) {
    keys.forEach(function (decease) {
      if (!tmp[x]) tmp[x] = {
        'name': 'Day ' + (x + 1)
      };
      var amount = _data_json__WEBPACK_IMPORTED_MODULE_4__[category][decease][x];
      tmp[x][decease] = amount ? amount : 0;
    });
  };

  for (var x = 0; x < days; x++) {
    _loop(x);
  }

  return tmp;
};

function Index() {
  console.log(_data_json__WEBPACK_IMPORTED_MODULE_4__);
  var death100 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return calculate(100, 'deaths');
  }, []);
  var death45 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return calculate(45, 'deaths');
  }, []);
  var infected100 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return calculate(100, 'infected');
  }, []);
  var infected45 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return calculate(45, 'infected');
  }, []);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "2019 Novel Coronavirus (2019-nCoV)"), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Last updated: ", _data_json__WEBPACK_IMPORTED_MODULE_4__.lastUpdatedAt))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(Chart, {
    title: "Deaths over time",
    subtitle: "100 days",
    data: death100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(Chart, {
    title: "Infections over time",
    subtitle: "100 days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(Chart, {
    title: "Deaths over time",
    subtitle: "45 days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(Chart, {
    title: "Infections over time",
    subtitle: "45 days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
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
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
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
      lineNumber: 88
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
    dataKey: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["CartesianGrid"], {
    stroke: "#f5f5f5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    type: "monotone",
    dataKey: "uv",
    stroke: "#ff7300",
    yAxisId: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    type: "monotone",
    dataKey: "pv",
    stroke: "#387908",
    yAxisId: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, subtitle)));
};

/***/ })

})
//# sourceMappingURL=index.js.abd35aa0047737727c6b.hot-update.js.map