module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/*! exports provided: lastUpdatedAt, infected, deaths, trackingStarted, source, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"lastUpdatedAt\":\"2020-01-30 11:51\",\"infected\":{\"2019-nCoV\":[41,41,42,42,42,43,48,65,201,222,325,527,653,943,1438,2794,4473,6057,7783],\"Swine Flu\":[25,25,38,73,105,148,257,367,658,898,1085,1490,1894,2371,2500,3440,4379,4694,5251,5728,6397,7520,8451,8480,8829,9830,10243,11034,11168,12021,12514,12950,13394,13394,15501,15501,15501,17398,17398,19259,19259,21924,21924,21924,25272,25272,27713,28738,29633,29633,29633,35891,35891,39620,39620,44287,44287,44287,52160,52160,55867,55867,59814,59814,59814,70893,70893,77201,77201,89921,89921,89921,94512,94512,101922,101922,101922,101922,101922,101922,101922,125993,128325,130727,130727,130727,141962,141962,164541,164541,159294,159294,159294,163859,163859,175769,175769,183590,183590,183590,188333,188333,199082,199082,199082,199082,208269,212008,212008,219681,219681,226065,226065,226065,231353,231353,243587,243587,248941,248941,248941,253169,253169,253169,253169,268609,268609,268609,268609],\"SARS\":[350,386,386,456,487,1323,1408,1408,1550,1550,1622,1804,2223,2270,2353,2416,2416,2601,2671,2722,2781,2890,2960,2960,3169,3235,3293,3389,3547,3547,3547,3861,3947,4288,4439,4649,4836,4836,5050,5462,5663,5865,6054,6234,6234,6234,6727,6903,7053,7183,7296,7296,7447,7548,7628,7699,7739,7761,7761,7864,7919,7956,8046,8117,8141,8141,8202,8221,8240,8295,8317,8360,8360,8398,8398,8402,8403,8404,8404,8404,8421,8430,8435,8445,8454,8454,8454,8460,8464,8465,8462,8461,8461,8461,8459,8458,8460,8456,8450,8450,8450,8447,8445,8442,8439,8439,8439,8439,8439,8436,8436,8437,8437]},\"deaths\":{\"2019-nCoV\":[1,1,1,1,2,2,2,3,3,3,3,17,18,36,42,80,107,132,170],\"Swine Flu\":[0,0,0,6,6,6,8,10,17,20,20,26,31,31,46,48,49,53,53,61,61,65,72,74,79,80,85,86,86,86,91,92,95,95,99,99,99,115,115,117,117,125,125,125,139,139,141,144,145,145,145,163,163,167,167,180,180,180,231,231,238,238,263,263,263,311,311,332,332,382,382,382,429,429,429,429,429,429,429,429,429,667,679,702,702,702,781,781,883,883,917,917,917,998,998,1116,1116,1152,1152,1152,1265,1265,1444,1444,1569,1569,1569,1717,1717,1882,1882,2004,2004,2004,2107,2107,2349,2349,2430,2430,2430,2572,2572,2627,2627,2873,2873,2873,3014],\"SARS\":[10,11,11,17,17,49,53,53,54,54,58,62,78,79,84,89,89,98,103,106,111,116,119,119,144,154,159,165,182,182,182,217,229,251,263,274,293,293,321,353,372,391,417,435,435,435,478,495,506,514,526,526,552,573,587,598,611,623,623,643,662,666,682,689,696,696,725,735,745,750,754,764,764,772,772,772,775,779,779,779,784,789,789,790,792,792,792,799,799,801,804,804,804,804,805,807,808,809,810,810,810,811,812,812,812,812,812,812,812,812,812,812,813]},\"trackingStarted\":{\"Swine Flue\":\"2009-04-24\",\"SARS\":\"2003-03-21\",\"2019-nCoV\":\"2020-01-10\"},\"source\":{\"Swine Flue\":\"https://en.wikipedia.org/wiki/2009_flu_pandemic_table_April_2009\",\"SARS\":\"http://www.diaspoir.net/health/sars/Total.html\",\"2019-nCoV\":\"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports\"}}");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);
var _jsxFileName = "/home/richard/Projects/2019ncov/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const keys = ["2019-nCoV", "Swine Flu", "SARS"];

const calculate = (days, category) => {
  const tmp = [];

  for (let x = 0; x < days; x++) {
    keys.forEach(decease => {
      if (!tmp[x]) tmp[x] = {
        'name': 'Day ' + (x + 1)
      };
      let amount = _data_json__WEBPACK_IMPORTED_MODULE_4__[category][decease][x];
      tmp[x][decease] = amount ? amount : NaN;
    });
  }

  return tmp;
};

function Index() {
  const death100 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => calculate(100, 'deaths'), []);
  const death45 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => calculate(45, 'deaths'), []);
  const infected100 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => calculate(100, 'infected'), []);
  const infected45 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => calculate(45, 'infected'), []);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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
  }, "Last updated: ", _data_json__WEBPACK_IMPORTED_MODULE_4__.lastUpdatedAt)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx(Chart, {
    title: "Deaths over 100 days",
    data: death100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(Chart, {
    title: "Infections over 100 days",
    data: infected100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(Chart, {
    title: "Deaths over 45 days",
    data: death45,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(Chart, {
    title: "Infections over 45 days",
    data: infected45,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
}

const Chart = ({
  title,
  data
}) => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, title), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["LineChart"], {
    width: 1068,
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
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
    dataKey: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    style: {
      background: "#0c0c0c"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["CartesianGrid"], {
    stroke: "#000000",
    strokeDasharray: "5 5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    type: "monotone",
    dataKey: "2019-nCoV",
    stroke: "#FFFF00",
    yAxisId: 0,
    dot: false,
    strokeWidth: 4,
    legendType: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    type: "monotone",
    dataKey: "Swine Flu",
    stroke: "#FF0000",
    yAxisId: 0,
    dot: false,
    strokeWidth: 2,
    legendType: "triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    type: "monotone",
    dataKey: "SARS",
    stroke: "#00FF00",
    yAxisId: 0,
    dot: false,
    strokeWidth: 2,
    legendType: "star",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Legend"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/richard/Projects/2019ncov/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map