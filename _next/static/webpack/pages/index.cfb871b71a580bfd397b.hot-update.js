webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flat */ \"./node_modules/flat/index.js\");\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flat__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Form */ \"./components/Form/index.tsx\");\n/* harmony import */ var _components_Result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Result */ \"./components/Result/index.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/pattie/Development/walk-run-pace/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar defaultValues = {\n  event: {\n    distance: 3.10686,\n    // 5K\n    duration: 60 // 1 hour\n\n  },\n  intervalDuration: {\n    run: 4,\n    walk: 1\n  }\n};\nfunction Home() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](defaultValues),\n      _React$useState2 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      values = _React$useState2[0],\n      setValues = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](undefined),\n      _React$useState4 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      calculations = _React$useState4[0],\n      setCalculations = _React$useState4[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var walkPace = 16;\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function buildValuesFromQueryString() {\n    var queryValues = flat__WEBPACK_IMPORTED_MODULE_6___default.a.unflatten(query_string__WEBPACK_IMPORTED_MODULE_5___default.a.parse(location.search, {\n      parseNumbers: true\n    }));\n\n    if (Object.keys(queryValues).length > 0) {\n      if (JSON.stringify(queryValues) !== JSON.stringify(values)) {\n        // Set values to numbers.\n        setValues(queryValues);\n      }\n    }\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function () {\n    var _values$event = values.event,\n        distance = _values$event.distance,\n        duration = _values$event.duration;\n    var eachIntervalDuration = values.intervalDuration.run + values.intervalDuration.walk;\n    var totalIntervals = eachIntervalDuration > 0 ? duration / eachIntervalDuration : 0;\n    var intervalDistance = totalIntervals > 0 ? distance / totalIntervals : 0;\n    var walkDistance = values.intervalDuration.walk / walkPace;\n    var runDistance = intervalDistance - walkDistance;\n    var runPace = runDistance / values.intervalDuration.run * 60;\n    setCalculations({\n      distance: {\n        run: runDistance,\n        walk: walkDistance\n      },\n      intervals: totalIntervals,\n      pace: {\n        run: runPace,\n        walk: walkPace\n      }\n    });\n  }, [values]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"container mx-auto px-4 flex flex-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Walk - Run Pace calculator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/stopwatch.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      className: \"block max-w-md mx-auto pt-9\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-center text-2xl font-bold font-serif mb-3\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n          src: \"/stopwatch.png\",\n          className: \"w-8 mr-2 inline\",\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this), \"Walk - Run Pace Calculator\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        values: values,\n        setValues: setValues\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Result__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        calculations: calculations\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"b2sVjiiS8gUTQtF0i0hPBuvV4qA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZGVmYXVsdFZhbHVlcyIsImV2ZW50IiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsImludGVydmFsRHVyYXRpb24iLCJydW4iLCJ3YWxrIiwiSG9tZSIsIlJlYWN0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwidW5kZWZpbmVkIiwiY2FsY3VsYXRpb25zIiwic2V0Q2FsY3VsYXRpb25zIiwicm91dGVyIiwidXNlUm91dGVyIiwid2Fsa1BhY2UiLCJidWlsZFZhbHVlc0Zyb21RdWVyeVN0cmluZyIsInF1ZXJ5VmFsdWVzIiwiZmxhdCIsInVuZmxhdHRlbiIsInFzIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhcnNlTnVtYmVycyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiZWFjaEludGVydmFsRHVyYXRpb24iLCJ0b3RhbEludGVydmFscyIsImludGVydmFsRGlzdGFuY2UiLCJ3YWxrRGlzdGFuY2UiLCJydW5EaXN0YW5jZSIsInJ1blBhY2UiLCJpbnRlcnZhbHMiLCJwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsYUFBYSxHQUFHO0FBQ3BCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLE9BREw7QUFDYztBQUNuQkMsWUFBUSxFQUFFLEVBRkwsQ0FFUzs7QUFGVCxHQURhO0FBS3BCQyxrQkFBZ0IsRUFBRTtBQUNoQkMsT0FBRyxFQUFFLENBRFc7QUFFaEJDLFFBQUksRUFBRTtBQUZVO0FBTEUsQ0FBdEI7QUFXZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsd0JBQ0RDLDhDQUFBLENBQXVCUixhQUF2QixDQURDO0FBQUE7QUFBQSxNQUN0QlMsTUFEc0I7QUFBQSxNQUNkQyxTQURjOztBQUFBLHlCQUdXRiw4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dEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztHQTNEdUJMLEk7VUFLUFEscUQ7OztLQUxPUixJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IGZsYXQgZnJvbSAnZmxhdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0nO1xuaW1wb3J0IFJlc3VsdCBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdCc7XG5pbXBvcnQgeyBWYWx1ZXMsIENhbGN1bGF0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcbiAgZXZlbnQ6IHtcbiAgICBkaXN0YW5jZTogMy4xMDY4NiwgLy8gNUtcbiAgICBkdXJhdGlvbjogNjAsIC8vIDEgaG91clxuICB9LFxuICBpbnRlcnZhbER1cmF0aW9uOiB7XG4gICAgcnVuOiA0LFxuICAgIHdhbGs6IDEsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGU8VmFsdWVzPihkZWZhdWx0VmFsdWVzKTtcblxuICBjb25zdCBbY2FsY3VsYXRpb25zLCBzZXRDYWxjdWxhdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8Q2FsY3VsYXRpb25zfHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB3YWxrUGFjZSA9IDE2O1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiBidWlsZFZhbHVlc0Zyb21RdWVyeVN0cmluZygpIHtcbiAgICBjb25zdCBxdWVyeVZhbHVlcyA9IGZsYXQudW5mbGF0dGVuKFxuICAgICAgcXMucGFyc2UobG9jYXRpb24uc2VhcmNoLCB7IHBhcnNlTnVtYmVyczogdHJ1ZSB9KVxuICAgICkgYXMgdW5rbm93biBhcyBWYWx1ZXM7XG4gICAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5VmFsdWVzKS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocXVlcnlWYWx1ZXMpICE9PSBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpKSB7XG4gICAgICAgIC8vIFNldCB2YWx1ZXMgdG8gbnVtYmVycy5cbiAgICAgICAgc2V0VmFsdWVzKHF1ZXJ5VmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgZGlzdGFuY2UsIGR1cmF0aW9uIH0gPSB2YWx1ZXMuZXZlbnQ7XG4gICAgY29uc3QgZWFjaEludGVydmFsRHVyYXRpb24gPSB2YWx1ZXMuaW50ZXJ2YWxEdXJhdGlvbi5ydW4gKyB2YWx1ZXMuaW50ZXJ2YWxEdXJhdGlvbi53YWxrO1xuICAgIGNvbnN0IHRvdGFsSW50ZXJ2YWxzID0gZWFjaEludGVydmFsRHVyYXRpb24gPiAwID8gZHVyYXRpb24gLyBlYWNoSW50ZXJ2YWxEdXJhdGlvbiA6IDA7XG4gICAgY29uc3QgaW50ZXJ2YWxEaXN0YW5jZSA9IHRvdGFsSW50ZXJ2YWxzID4gMCA/IGRpc3RhbmNlIC8gdG90YWxJbnRlcnZhbHMgOiAwO1xuICAgIGNvbnN0IHdhbGtEaXN0YW5jZSA9IHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLndhbGsgLyB3YWxrUGFjZTtcbiAgICBjb25zdCBydW5EaXN0YW5jZSA9IGludGVydmFsRGlzdGFuY2UgLSB3YWxrRGlzdGFuY2U7XG4gICAgY29uc3QgcnVuUGFjZSA9IHJ1bkRpc3RhbmNlIC8gdmFsdWVzLmludGVydmFsRHVyYXRpb24ucnVuICogNjA7XG5cbiAgICBzZXRDYWxjdWxhdGlvbnMoe1xuICAgICAgZGlzdGFuY2U6IHtcbiAgICAgICAgcnVuOiBydW5EaXN0YW5jZSxcbiAgICAgICAgd2Fsazogd2Fsa0Rpc3RhbmNlLFxuICAgICAgfSxcbiAgICAgIGludGVydmFsczogdG90YWxJbnRlcnZhbHMsXG4gICAgICBwYWNlOiB7XG4gICAgICAgIHJ1bjogcnVuUGFjZSxcbiAgICAgICAgd2Fsazogd2Fsa1BhY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbdmFsdWVzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2FsayAtIFJ1biBQYWNlIGNhbGN1bGF0b3I8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdG9wd2F0Y2gucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJsb2NrIG1heC13LW1kIG14LWF1dG8gcHQtOVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1ib2xkIGZvbnQtc2VyaWYgbWItM1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0b3B3YXRjaC5wbmdcIiBjbGFzc05hbWU9XCJ3LTggbXItMiBpbmxpbmVcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIFdhbGsgLSBSdW4gUGFjZSBDYWxjdWxhdG9yXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxGb3JtIHZhbHVlcz17dmFsdWVzfSBzZXRWYWx1ZXM9e3NldFZhbHVlc30gLz5cbiAgICAgICAgPFJlc3VsdCBjYWxjdWxhdGlvbnM9e2NhbGN1bGF0aW9uc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})