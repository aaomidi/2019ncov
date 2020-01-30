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





var keys = ["2019-nCoV", "Swine Flu", "SARS"];

var calculate = function calculate(days, category) {
  var tmp = [];

  var _loop = function _loop(x) {
    keys.forEach(function (decease) {
      if (!tmp[x]) tmp[x] = {
        'name': 'Day ' + (x + 1)
      };
      var amount = _data_json__WEBPACK_IMPORTED_MODULE_4__[category][decease][x];
      tmp[x][decease] = amount ? amount : NaN;
    });
  };

  for (var x = 0; x < days; x++) {
    _loop(x);
  }

  return tmp;
};

function Index() {
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
      lineNumber: 33
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "2019 Novel Coronavirus (2019-nCoV)"), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Last updated: ", _data_json__WEBPACK_IMPORTED_MODULE_4__.lastUpdatedAt))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(Chart, {
    title: "Deaths over 100 days",
    data: death100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(Chart, {
    title: "Infections over 100 days",
    data: infected100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(Chart, {
    title: "Deaths over 45 days",
    data: death45,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(Chart, {
    title: "Infections over 45 days",
    data: infected45,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))));
}

var Chart = function Chart(_ref) {
  var title = _ref.title,
      data = _ref.data;
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
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
      lineNumber: 58
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
    dataKey: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["CartesianGrid"], {
    stroke: "#f5f5f5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    type: "monotone",
    dataKey: "2019-nCoV",
    stroke: "#ff7300",
    yAxisId: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    type: "monotone",
    dataKey: "Swine Flu",
    stroke: "#007300",
    yAxisId: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    type: "monotone",
    dataKey: "SARS",
    stroke: "#0073ff",
    yAxisId: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Legend"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }))));
};

/***/ })

})
//# sourceMappingURL=index.js.ee033eb667d3b74452af.hot-update.js.map