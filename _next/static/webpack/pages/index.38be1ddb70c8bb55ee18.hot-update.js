webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flat */ \"./node_modules/flat/index.js\");\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flat__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Form */ \"./components/Form/index.tsx\");\n/* harmony import */ var _components_Result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Result */ \"./components/Result/index.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/pattie/Development/walk-run-pace/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar defaultValues = {\n  event: {\n    distance: 3.10686,\n    // 5K\n    duration: 60 // 1 hour\n\n  },\n  intervalDuration: {\n    run: 4,\n    walk: 1\n  }\n};\nvar walkPace = 20;\nfunction Home() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](undefined),\n      _React$useState2 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      values = _React$useState2[0],\n      setValues = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](undefined),\n      _React$useState4 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      calculations = _React$useState4[0],\n      setCalculations = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](true),\n      _React$useState6 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState5, 2),\n      isUpdating = _React$useState6[0],\n      setIsUpdating = _React$useState6[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function buildValuesFromQueryString() {\n    var queryValues = flat__WEBPACK_IMPORTED_MODULE_6___default.a.unflatten(query_string__WEBPACK_IMPORTED_MODULE_5___default.a.parse(location.search, {\n      parseNumbers: true\n    })); // If there are query values\n\n    if (Object.keys(queryValues).length > 0) {\n      var _queryValues$event, _queryValues$event2, _queryValues$interval, _queryValues$interval2;\n\n      // Set values to numbers.\n      setValues({\n        event: {\n          distance: queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$event = queryValues.event) === null || _queryValues$event === void 0 ? void 0 : _queryValues$event.distance,\n          duration: queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$event2 = queryValues.event) === null || _queryValues$event2 === void 0 ? void 0 : _queryValues$event2.duration\n        },\n        intervalDuration: {\n          run: queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$interval = queryValues.intervalDuration) === null || _queryValues$interval === void 0 ? void 0 : _queryValues$interval.run,\n          walk: queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$interval2 = queryValues.intervalDuration) === null || _queryValues$interval2 === void 0 ? void 0 : _queryValues$interval2.walk\n        }\n      });\n    } else {\n      setValues(defaultValues);\n    }\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function updateUrl() {\n    if (!isUpdating) {\n      setIsUpdating(true);\n      var queryValues = flat__WEBPACK_IMPORTED_MODULE_6___default.a.unflatten(query_string__WEBPACK_IMPORTED_MODULE_5___default.a.parse(location.search, {\n        parseNumbers: true\n      }));\n\n      if (JSON.stringify(values) !== JSON.stringify(queryValues)) {\n        router.replace({\n          query: flat__WEBPACK_IMPORTED_MODULE_6___default()(values)\n        }, undefined, {\n          shallow: true\n        });\n      }\n    } else {\n      setIsUpdating(false);\n    }\n  }, [values]);\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function () {\n    if (!values) {\n      return;\n    }\n\n    var _values$event = values.event,\n        distance = _values$event.distance,\n        duration = _values$event.duration;\n    var eachIntervalDuration = values.intervalDuration.run + values.intervalDuration.walk;\n    var totalIntervals = eachIntervalDuration > 0 ? duration / eachIntervalDuration : 0;\n    var intervalDistance = totalIntervals > 0 ? distance / totalIntervals : 0;\n    var walkDistance = values.intervalDuration.walk / walkPace;\n    var runDistance = intervalDistance - walkDistance;\n    var runPace = runDistance / values.intervalDuration.run * 60;\n    setCalculations({\n      distance: {\n        run: runDistance,\n        walk: walkDistance\n      },\n      intervals: totalIntervals,\n      pace: {\n        run: runPace,\n        walk: walkPace\n      }\n    });\n  }, [values]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"container mx-auto px-4 flex flex-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Walk - Run Pace calculator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"stopwatch.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      className: \"block max-w-md mx-auto pt-9\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-center text-2xl font-bold font-serif mb-3\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n          src: \"stopwatch.png\",\n          className: \"w-8 mr-2 inline\",\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, this), \"Walk - Run Pace Calculator\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        values: values,\n        setValues: setValues\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Result__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        calculations: calculations\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"nUnJSWAFLpHeVB+/HnLQYUNK3Lw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZGVmYXVsdFZhbHVlcyIsImV2ZW50IiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsImludGVydmFsRHVyYXRpb24iLCJydW4iLCJ3YWxrIiwid2Fsa1BhY2UiLCJIb21lIiwiUmVhY3QiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJjYWxjdWxhdGlvbnMiLCJzZXRDYWxjdWxhdGlvbnMiLCJpc1VwZGF0aW5nIiwic2V0SXNVcGRhdGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsImJ1aWxkVmFsdWVzRnJvbVF1ZXJ5U3RyaW5nIiwicXVlcnlWYWx1ZXMiLCJmbGF0IiwidW5mbGF0dGVuIiwicXMiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFyc2VOdW1iZXJzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInVwZGF0ZVVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwicXVlcnkiLCJzaGFsbG93IiwiZWFjaEludGVydmFsRHVyYXRpb24iLCJ0b3RhbEludGVydmFscyIsImludGVydmFsRGlzdGFuY2UiLCJ3YWxrRGlzdGFuY2UiLCJydW5EaXN0YW5jZSIsInJ1blBhY2UiLCJpbnRlcnZhbHMiLCJwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsYUFBYSxHQUFHO0FBQ3BCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLE9BREw7QUFDYztBQUNuQkMsWUFBUSxFQUFFLEVBRkwsQ0FFUzs7QUFGVCxHQURhO0FBS3BCQyxrQkFBZ0IsRUFBRTtBQUNoQkMsT0FBRyxFQUFFLENBRFc7QUFFaEJDLFFBQUksRUFBRTtBQUZVO0FBTEUsQ0FBdEI7QUFVQSxJQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFFZSxTQUFTQyxJQUFULEdBQWdC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Y0FERixlQUtFLHFFQUFDLHdEQUFEO0FBQU0sY0FBTSxFQUFFQSxNQUFkO0FBQXNCLGlCQUFTLEVBQUVDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FLHFFQUFDLDBEQUFEO0FBQVEsb0JBQVksRUFBRUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztHQXRGdUJMLEk7VUFJUFUscUQ7OztLQUpPVixJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IGZsYXQgZnJvbSAnZmxhdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0nO1xuaW1wb3J0IFJlc3VsdCBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdCc7XG5pbXBvcnQgeyBWYWx1ZXMsIENhbGN1bGF0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcbiAgZXZlbnQ6IHtcbiAgICBkaXN0YW5jZTogMy4xMDY4NiwgLy8gNUtcbiAgICBkdXJhdGlvbjogNjAsIC8vIDEgaG91clxuICB9LFxuICBpbnRlcnZhbER1cmF0aW9uOiB7XG4gICAgcnVuOiA0LFxuICAgIHdhbGs6IDEsXG4gIH0sXG59O1xuY29uc3Qgd2Fsa1BhY2UgPSAyMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlPFZhbHVlc3x1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtjYWxjdWxhdGlvbnMsIHNldENhbGN1bGF0aW9uc10gPSBSZWFjdC51c2VTdGF0ZTxDYWxjdWxhdGlvbnN8dW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBbaXNVcGRhdGluZywgc2V0SXNVcGRhdGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uIGJ1aWxkVmFsdWVzRnJvbVF1ZXJ5U3RyaW5nKCkge1xuICAgIGNvbnN0IHF1ZXJ5VmFsdWVzID0gZmxhdC51bmZsYXR0ZW4oXG4gICAgICBxcy5wYXJzZShsb2NhdGlvbi5zZWFyY2gsIHsgcGFyc2VOdW1iZXJzOiB0cnVlIH0pXG4gICAgKSBhcyB1bmtub3duIGFzIGFueTtcblxuICAgIC8vIElmIHRoZXJlIGFyZSBxdWVyeSB2YWx1ZXNcbiAgICBpZiAoT2JqZWN0LmtleXMocXVlcnlWYWx1ZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNldCB2YWx1ZXMgdG8gbnVtYmVycy5cbiAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgZGlzdGFuY2U6IHF1ZXJ5VmFsdWVzPy5ldmVudD8uZGlzdGFuY2UsXG4gICAgICAgICAgZHVyYXRpb246IHF1ZXJ5VmFsdWVzPy5ldmVudD8uZHVyYXRpb24sXG4gICAgICAgIH0sXG4gICAgICAgIGludGVydmFsRHVyYXRpb246IHtcbiAgICAgICAgICBydW46IHF1ZXJ5VmFsdWVzPy5pbnRlcnZhbER1cmF0aW9uPy5ydW4sXG4gICAgICAgICAgd2FsazogcXVlcnlWYWx1ZXM/LmludGVydmFsRHVyYXRpb24/LndhbGssXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRWYWx1ZXMoZGVmYXVsdFZhbHVlcyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uIHVwZGF0ZVVybCgpIHtcbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIHNldElzVXBkYXRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCBxdWVyeVZhbHVlcyA9IGZsYXQudW5mbGF0dGVuKFxuICAgICAgICBxcy5wYXJzZShsb2NhdGlvbi5zZWFyY2gsIHsgcGFyc2VOdW1iZXJzOiB0cnVlIH0pXG4gICAgICApIGFzIHVua25vd24gYXMgYW55O1xuXG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodmFsdWVzKSAhPT0gSlNPTi5zdHJpbmdpZnkocXVlcnlWYWx1ZXMpKSB7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKHsgcXVlcnk6IGZsYXQodmFsdWVzKSB9LCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9ICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzVXBkYXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3ZhbHVlc10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF2YWx1ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRpc3RhbmNlLCBkdXJhdGlvbiB9ID0gdmFsdWVzLmV2ZW50O1xuICAgIGNvbnN0IGVhY2hJbnRlcnZhbER1cmF0aW9uID0gdmFsdWVzLmludGVydmFsRHVyYXRpb24ucnVuICsgdmFsdWVzLmludGVydmFsRHVyYXRpb24ud2FsaztcbiAgICBjb25zdCB0b3RhbEludGVydmFscyA9IGVhY2hJbnRlcnZhbER1cmF0aW9uID4gMCA/IGR1cmF0aW9uIC8gZWFjaEludGVydmFsRHVyYXRpb24gOiAwO1xuICAgIGNvbnN0IGludGVydmFsRGlzdGFuY2UgPSB0b3RhbEludGVydmFscyA+IDAgPyBkaXN0YW5jZSAvIHRvdGFsSW50ZXJ2YWxzIDogMDtcbiAgICBjb25zdCB3YWxrRGlzdGFuY2UgPSB2YWx1ZXMuaW50ZXJ2YWxEdXJhdGlvbi53YWxrIC8gd2Fsa1BhY2U7XG4gICAgY29uc3QgcnVuRGlzdGFuY2UgPSBpbnRlcnZhbERpc3RhbmNlIC0gd2Fsa0Rpc3RhbmNlO1xuICAgIGNvbnN0IHJ1blBhY2UgPSBydW5EaXN0YW5jZSAvIHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLnJ1biAqIDYwO1xuXG4gICAgc2V0Q2FsY3VsYXRpb25zKHtcbiAgICAgIGRpc3RhbmNlOiB7XG4gICAgICAgIHJ1bjogcnVuRGlzdGFuY2UsXG4gICAgICAgIHdhbGs6IHdhbGtEaXN0YW5jZSxcbiAgICAgIH0sXG4gICAgICBpbnRlcnZhbHM6IHRvdGFsSW50ZXJ2YWxzLFxuICAgICAgcGFjZToge1xuICAgICAgICBydW46IHJ1blBhY2UsXG4gICAgICAgIHdhbGs6IHdhbGtQYWNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSwgW3ZhbHVlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IGZsZXggZmxleC13cmFwXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldhbGsgLSBSdW4gUGFjZSBjYWxjdWxhdG9yPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJzdG9wd2F0Y2gucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJsb2NrIG1heC13LW1kIG14LWF1dG8gcHQtOVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1ib2xkIGZvbnQtc2VyaWYgbWItM1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwic3RvcHdhdGNoLnBuZ1wiIGNsYXNzTmFtZT1cInctOCBtci0yIGlubGluZVwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgV2FsayAtIFJ1biBQYWNlIENhbGN1bGF0b3JcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPEZvcm0gdmFsdWVzPXt2YWx1ZXN9IHNldFZhbHVlcz17c2V0VmFsdWVzfSAvPlxuICAgICAgICA8UmVzdWx0IGNhbGN1bGF0aW9ucz17Y2FsY3VsYXRpb25zfSAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})