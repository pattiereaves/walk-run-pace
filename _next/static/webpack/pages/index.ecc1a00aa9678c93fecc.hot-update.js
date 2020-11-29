webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flat */ \"./node_modules/flat/index.js\");\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flat__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Form */ \"./components/Form/index.tsx\");\n/* harmony import */ var _components_Result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Result */ \"./components/Result/index.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/pattie/Development/walk-run-pace/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar defaultValues = {\n  event: {\n    distance: 3.10686,\n    // 5K\n    duration: 60 // 1 hour\n\n  },\n  intervalDuration: {\n    run: 4,\n    walk: 1\n  }\n};\nvar walkPace = 20;\nfunction Home() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](defaultValues),\n      _React$useState2 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      values = _React$useState2[0],\n      setValues = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](undefined),\n      _React$useState4 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      calculations = _React$useState4[0],\n      setCalculations = _React$useState4[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var queryValues = react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"](function () {\n    var _location;\n\n    return typeof location !== undefined ? flat__WEBPACK_IMPORTED_MODULE_6___default.a.unflatten(query_string__WEBPACK_IMPORTED_MODULE_5___default.a.parse((_location = location) === null || _location === void 0 ? void 0 : _location.search, {\n      parseNumbers: true\n    })) : {};\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function buildValuesFromQueryString() {\n    // If there are query values\n    if (Object.keys(queryValues).length > 0) {\n      // And those query values do not match the current values.\n      if (JSON.stringify(queryValues) !== JSON.stringify(values)) {\n        var _queryValues$event, _queryValues$event2, _queryValues$interval, _queryValues$interval2;\n\n        // Set values to numbers.\n        setValues({\n          event: {\n            distance: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$event = queryValues.event) === null || _queryValues$event === void 0 ? void 0 : _queryValues$event.distance) || values.event.distance,\n            duration: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$event2 = queryValues.event) === null || _queryValues$event2 === void 0 ? void 0 : _queryValues$event2.duration) || values.event.duration\n          },\n          intervalDuration: {\n            run: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$interval = queryValues.intervalDuration) === null || _queryValues$interval === void 0 ? void 0 : _queryValues$interval.run) || values.intervalDuration.run,\n            walk: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$interval2 = queryValues.intervalDuration) === null || _queryValues$interval2 === void 0 ? void 0 : _queryValues$interval2.walk) || values.intervalDuration.walk\n          }\n        });\n      }\n    }\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function updateUrlWhenValuesChange() {\n    if (JSON.stringify(queryValues) !== JSON.stringify(values)) {\n      console.log({\n        values: values,\n        queryValues: queryValues\n      }); // router.replace({ query: flat(values) }, undefined, { shallow: true } );\n    }\n  }, [values]);\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function () {\n    var _values$event = values.event,\n        distance = _values$event.distance,\n        duration = _values$event.duration;\n    var eachIntervalDuration = values.intervalDuration.run + values.intervalDuration.walk;\n    var totalIntervals = eachIntervalDuration > 0 ? duration / eachIntervalDuration : 0;\n    var intervalDistance = totalIntervals > 0 ? distance / totalIntervals : 0;\n    var walkDistance = values.intervalDuration.walk / walkPace;\n    var runDistance = intervalDistance - walkDistance;\n    var runPace = runDistance / values.intervalDuration.run * 60;\n    setCalculations({\n      distance: {\n        run: runDistance,\n        walk: walkDistance\n      },\n      intervals: totalIntervals,\n      pace: {\n        run: runPace,\n        walk: walkPace\n      }\n    });\n  }, [values]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"container mx-auto px-4 flex flex-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Walk - Run Pace calculator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"stopwatch.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      className: \"block max-w-md mx-auto pt-9\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-center text-2xl font-bold font-serif mb-3\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n          src: \"stopwatch.png\",\n          className: \"w-8 mr-2 inline\",\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, this), \"Walk - Run Pace Calculator\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        values: values,\n        setValues: setValues\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Result__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        calculations: calculations\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"A+0e7ZjwSF+T7apxGZV48+mDLtQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZGVmYXVsdFZhbHVlcyIsImV2ZW50IiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsImludGVydmFsRHVyYXRpb24iLCJydW4iLCJ3YWxrIiwid2Fsa1BhY2UiLCJIb21lIiwiUmVhY3QiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1bmRlZmluZWQiLCJjYWxjdWxhdGlvbnMiLCJzZXRDYWxjdWxhdGlvbnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeVZhbHVlcyIsImxvY2F0aW9uIiwiZmxhdCIsInVuZmxhdHRlbiIsInFzIiwicGFyc2UiLCJzZWFyY2giLCJwYXJzZU51bWJlcnMiLCJidWlsZFZhbHVlc0Zyb21RdWVyeVN0cmluZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlVXJsV2hlblZhbHVlc0NoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJlYWNoSW50ZXJ2YWxEdXJhdGlvbiIsInRvdGFsSW50ZXJ2YWxzIiwiaW50ZXJ2YWxEaXN0YW5jZSIsIndhbGtEaXN0YW5jZSIsInJ1bkRpc3RhbmNlIiwicnVuUGFjZSIsImludGVydmFscyIsInBhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxhQUFhLEdBQUc7QUFDcEJDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUUsT0FETDtBQUNjO0FBQ25CQyxZQUFRLEVBQUUsRUFGTCxDQUVTOztBQUZULEdBRGE7QUFLcEJDLGtCQUFnQixFQUFFO0FBQ2hCQyxPQUFHLEVBQUUsQ0FEVztBQUVoQkMsUUFBSSxFQUFFO0FBRlU7QUFMRSxDQUF0QjtBQVVBLElBQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSx3QkFDREMsOENBQUEs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QUFBQTtBQUFBLGNBTEYsZUFNRSxxRUFBQywwREFBRDtBQUFRLG9CQUFZLEVBQUVFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7R0F6RXVCTCxJO1VBR1BRLHFEOzs7S0FIT1IsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgcXMgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBmbGF0IGZyb20gJ2ZsYXQnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtJztcbmltcG9ydCBSZXN1bHQgZnJvbSAnLi4vY29tcG9uZW50cy9SZXN1bHQnO1xuaW1wb3J0IHsgVmFsdWVzLCBDYWxjdWxhdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB7XG4gIGV2ZW50OiB7XG4gICAgZGlzdGFuY2U6IDMuMTA2ODYsIC8vIDVLXG4gICAgZHVyYXRpb246IDYwLCAvLyAxIGhvdXJcbiAgfSxcbiAgaW50ZXJ2YWxEdXJhdGlvbjoge1xuICAgIHJ1bjogNCxcbiAgICB3YWxrOiAxLFxuICB9LFxufTtcbmNvbnN0IHdhbGtQYWNlID0gMjA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZTxWYWx1ZXM+KGRlZmF1bHRWYWx1ZXMpO1xuICBjb25zdCBbY2FsY3VsYXRpb25zLCBzZXRDYWxjdWxhdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8Q2FsY3VsYXRpb25zfHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHF1ZXJ5VmFsdWVzID0gUmVhY3QudXNlTWVtbygoKSA9PiB0eXBlb2YgbG9jYXRpb24gIT09IHVuZGVmaW5lZCA/IGZsYXQudW5mbGF0dGVuKFxuICAgIHFzLnBhcnNlKGxvY2F0aW9uPy5zZWFyY2gsIHsgcGFyc2VOdW1iZXJzOiB0cnVlIH0pXG4gICkgOiB7fSwgW10pIGFzIHVua25vd24gYXMgYW55O1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiBidWlsZFZhbHVlc0Zyb21RdWVyeVN0cmluZygpIHtcbiAgICAvLyBJZiB0aGVyZSBhcmUgcXVlcnkgdmFsdWVzXG4gICAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5VmFsdWVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBBbmQgdGhvc2UgcXVlcnkgdmFsdWVzIGRvIG5vdCBtYXRjaCB0aGUgY3VycmVudCB2YWx1ZXMuXG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocXVlcnlWYWx1ZXMpICE9PSBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpKSB7XG4gICAgICAgIC8vIFNldCB2YWx1ZXMgdG8gbnVtYmVycy5cbiAgICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgZGlzdGFuY2U6IHF1ZXJ5VmFsdWVzPy5ldmVudD8uZGlzdGFuY2UgfHwgdmFsdWVzLmV2ZW50LmRpc3RhbmNlLFxuICAgICAgICAgICAgZHVyYXRpb246IHF1ZXJ5VmFsdWVzPy5ldmVudD8uZHVyYXRpb24gfHwgdmFsdWVzLmV2ZW50LmR1cmF0aW9uLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW50ZXJ2YWxEdXJhdGlvbjoge1xuICAgICAgICAgICAgcnVuOiBxdWVyeVZhbHVlcz8uaW50ZXJ2YWxEdXJhdGlvbj8ucnVuIHx8IHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLnJ1bixcbiAgICAgICAgICAgIHdhbGs6IHF1ZXJ5VmFsdWVzPy5pbnRlcnZhbER1cmF0aW9uPy53YWxrIHx8IHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLndhbGssXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gdXBkYXRlVXJsV2hlblZhbHVlc0NoYW5nZSgpIHtcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkocXVlcnlWYWx1ZXMpICE9PSBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpKSB7XG4gICAgICBjb25zb2xlLmxvZyh7IHZhbHVlcywgcXVlcnlWYWx1ZXMgfSk7XG4gICAgICAvLyByb3V0ZXIucmVwbGFjZSh7IHF1ZXJ5OiBmbGF0KHZhbHVlcykgfSwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSApO1xuICAgIH1cbn0sIFt2YWx1ZXNdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgZGlzdGFuY2UsIGR1cmF0aW9uIH0gPSB2YWx1ZXMuZXZlbnQ7XG4gICAgY29uc3QgZWFjaEludGVydmFsRHVyYXRpb24gPSB2YWx1ZXMuaW50ZXJ2YWxEdXJhdGlvbi5ydW4gKyB2YWx1ZXMuaW50ZXJ2YWxEdXJhdGlvbi53YWxrO1xuICAgIGNvbnN0IHRvdGFsSW50ZXJ2YWxzID0gZWFjaEludGVydmFsRHVyYXRpb24gPiAwID8gZHVyYXRpb24gLyBlYWNoSW50ZXJ2YWxEdXJhdGlvbiA6IDA7XG4gICAgY29uc3QgaW50ZXJ2YWxEaXN0YW5jZSA9IHRvdGFsSW50ZXJ2YWxzID4gMCA/IGRpc3RhbmNlIC8gdG90YWxJbnRlcnZhbHMgOiAwO1xuICAgIGNvbnN0IHdhbGtEaXN0YW5jZSA9IHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLndhbGsgLyB3YWxrUGFjZTtcbiAgICBjb25zdCBydW5EaXN0YW5jZSA9IGludGVydmFsRGlzdGFuY2UgLSB3YWxrRGlzdGFuY2U7XG4gICAgY29uc3QgcnVuUGFjZSA9IHJ1bkRpc3RhbmNlIC8gdmFsdWVzLmludGVydmFsRHVyYXRpb24ucnVuICogNjA7XG5cbiAgICBzZXRDYWxjdWxhdGlvbnMoe1xuICAgICAgZGlzdGFuY2U6IHtcbiAgICAgICAgcnVuOiBydW5EaXN0YW5jZSxcbiAgICAgICAgd2Fsazogd2Fsa0Rpc3RhbmNlLFxuICAgICAgfSxcbiAgICAgIGludGVydmFsczogdG90YWxJbnRlcnZhbHMsXG4gICAgICBwYWNlOiB7XG4gICAgICAgIHJ1bjogcnVuUGFjZSxcbiAgICAgICAgd2Fsazogd2Fsa1BhY2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbdmFsdWVzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2FsayAtIFJ1biBQYWNlIGNhbGN1bGF0b3I8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cInN0b3B3YXRjaC5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYmxvY2sgbWF4LXctbWQgbXgtYXV0byBwdC05XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1zZXJpZiBtYi0zXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJzdG9wd2F0Y2gucG5nXCIgY2xhc3NOYW1lPVwidy04IG1yLTIgaW5saW5lXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICBXYWxrIC0gUnVuIFBhY2UgQ2FsY3VsYXRvclxuICAgICAgICA8L2gxPlxuICAgICAgICA8Rm9ybSB2YWx1ZXM9e3ZhbHVlc30gc2V0VmFsdWVzPXtzZXRWYWx1ZXN9IC8+XG4gICAgICAgIDxSZXN1bHQgY2FsY3VsYXRpb25zPXtjYWxjdWxhdGlvbnN9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})