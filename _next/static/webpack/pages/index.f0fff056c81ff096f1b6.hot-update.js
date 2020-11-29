webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flat */ \"./node_modules/flat/index.js\");\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flat__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Form */ \"./components/Form/index.tsx\");\n/* harmony import */ var _components_Result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Result */ \"./components/Result/index.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/pattie/Development/walk-run-pace/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar defaultValues = {\n  event: {\n    distance: 3.10686,\n    // 5K\n    duration: 60 // 1 hour\n\n  },\n  intervalDuration: {\n    run: 4,\n    walk: 1\n  }\n};\nvar walkPace = 20;\nfunction Home() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](defaultValues),\n      _React$useState2 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      values = _React$useState2[0],\n      setValues = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](undefined),\n      _React$useState4 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      calculations = _React$useState4[0],\n      setCalculations = _React$useState4[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var queryValues = react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"](function () {\n    var _location;\n\n    return ((_location = location) === null || _location === void 0 ? void 0 : _location.search) ? flat__WEBPACK_IMPORTED_MODULE_6___default.a.unflatten(query_string__WEBPACK_IMPORTED_MODULE_5___default.a.parse(location.search, {\n      parseNumbers: true\n    })) : {};\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function buildValuesFromQueryString() {\n    // If there are query values\n    if (Object.keys(queryValues).length > 0) {\n      // And those query values do not match the current values.\n      if (JSON.stringify(queryValues) !== JSON.stringify(values)) {\n        var _queryValues$event, _queryValues$event2, _queryValues$interval, _queryValues$interval2;\n\n        // Set values to numbers.\n        setValues({\n          event: {\n            distance: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$event = queryValues.event) === null || _queryValues$event === void 0 ? void 0 : _queryValues$event.distance) || values.event.distance,\n            duration: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$event2 = queryValues.event) === null || _queryValues$event2 === void 0 ? void 0 : _queryValues$event2.duration) || values.event.duration\n          },\n          intervalDuration: {\n            run: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$interval = queryValues.intervalDuration) === null || _queryValues$interval === void 0 ? void 0 : _queryValues$interval.run) || values.intervalDuration.run,\n            walk: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$interval2 = queryValues.intervalDuration) === null || _queryValues$interval2 === void 0 ? void 0 : _queryValues$interval2.walk) || values.intervalDuration.walk\n          }\n        });\n      }\n    }\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function updateUrlWhenValuesChange() {\n    if (JSON.stringify(queryValues) !== JSON.stringify(values)) {\n      console.log({\n        values: values,\n        queryValues: queryValues\n      }); // router.replace({ query: flat(values) }, undefined, { shallow: true } );\n    }\n  }, [values]);\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function () {\n    var _values$event = values.event,\n        distance = _values$event.distance,\n        duration = _values$event.duration;\n    var eachIntervalDuration = values.intervalDuration.run + values.intervalDuration.walk;\n    var totalIntervals = eachIntervalDuration > 0 ? duration / eachIntervalDuration : 0;\n    var intervalDistance = totalIntervals > 0 ? distance / totalIntervals : 0;\n    var walkDistance = values.intervalDuration.walk / walkPace;\n    var runDistance = intervalDistance - walkDistance;\n    var runPace = runDistance / values.intervalDuration.run * 60;\n    setCalculations({\n      distance: {\n        run: runDistance,\n        walk: walkDistance\n      },\n      intervals: totalIntervals,\n      pace: {\n        run: runPace,\n        walk: walkPace\n      }\n    });\n  }, [values]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"container mx-auto px-4 flex flex-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Walk - Run Pace calculator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"stopwatch.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      className: \"block max-w-md mx-auto pt-9\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-center text-2xl font-bold font-serif mb-3\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n          src: \"stopwatch.png\",\n          className: \"w-8 mr-2 inline\",\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, this), \"Walk - Run Pace Calculator\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        values: values,\n        setValues: setValues\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Result__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        calculations: calculations\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"A+0e7ZjwSF+T7apxGZV48+mDLtQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZGVmYXVsdFZhbHVlcyIsImV2ZW50IiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsImludGVydmFsRHVyYXRpb24iLCJydW4iLCJ3YWxrIiwid2Fsa1BhY2UiLCJIb21lIiwiUmVhY3QiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1bmRlZmluZWQiLCJjYWxjdWxhdGlvbnMiLCJzZXRDYWxjdWxhdGlvbnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeVZhbHVlcyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZmxhdCIsInVuZmxhdHRlbiIsInFzIiwicGFyc2UiLCJwYXJzZU51bWJlcnMiLCJidWlsZFZhbHVlc0Zyb21RdWVyeVN0cmluZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlVXJsV2hlblZhbHVlc0NoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJlYWNoSW50ZXJ2YWxEdXJhdGlvbiIsInRvdGFsSW50ZXJ2YWxzIiwiaW50ZXJ2YWxEaXN0YW5jZSIsIndhbGtEaXN0YW5jZSIsInJ1bkRpc3RhbmNlIiwicnVuUGFjZSIsImludGVydmFscyIsInBhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxhQUFhLEdBQUc7QUFDcEJDLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUUsT0FETDtBQUNjO0FBQ25CQyxZQUFRLEVBQUUsRUFGTCxDQUVTOztBQUZULEdBRGE7QUFLcEJDLGtCQUFnQixFQUFFO0FBQ2hCQyxPQUFHLEVBQUUsQ0FEVztBQUVoQkMsUUFBSSxFQUFFO0FBRlU7QUFMRSxDQUF0QjtBQVVBLElBQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSx3QkFDREMsOENBQUEs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QUE7QUFBQSxjQUxGLGVBTUUscUVBQUMsMERBQUQ7QUFBUSxvQkFBWSxFQUFFRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBekV1QkwsSTtVQUdQUSxxRDs7O0tBSE9SLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgZmxhdCBmcm9tICdmbGF0JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybSc7XG5pbXBvcnQgUmVzdWx0IGZyb20gJy4uL2NvbXBvbmVudHMvUmVzdWx0JztcbmltcG9ydCB7IFZhbHVlcywgQ2FsY3VsYXRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0VmFsdWVzID0ge1xuICBldmVudDoge1xuICAgIGRpc3RhbmNlOiAzLjEwNjg2LCAvLyA1S1xuICAgIGR1cmF0aW9uOiA2MCwgLy8gMSBob3VyXG4gIH0sXG4gIGludGVydmFsRHVyYXRpb246IHtcbiAgICBydW46IDQsXG4gICAgd2FsazogMSxcbiAgfSxcbn07XG5jb25zdCB3YWxrUGFjZSA9IDIwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGU8VmFsdWVzPihkZWZhdWx0VmFsdWVzKTtcbiAgY29uc3QgW2NhbGN1bGF0aW9ucywgc2V0Q2FsY3VsYXRpb25zXSA9IFJlYWN0LnVzZVN0YXRlPENhbGN1bGF0aW9uc3x1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBxdWVyeVZhbHVlcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gbG9jYXRpb24/LnNlYXJjaCA/IGZsYXQudW5mbGF0dGVuKFxuICAgIHFzLnBhcnNlKGxvY2F0aW9uLnNlYXJjaCwgeyBwYXJzZU51bWJlcnM6IHRydWUgfSlcbiAgKSA6IHt9LCBbXSkgYXMgdW5rbm93biBhcyBhbnk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uIGJ1aWxkVmFsdWVzRnJvbVF1ZXJ5U3RyaW5nKCkge1xuICAgIC8vIElmIHRoZXJlIGFyZSBxdWVyeSB2YWx1ZXNcbiAgICBpZiAoT2JqZWN0LmtleXMocXVlcnlWYWx1ZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIEFuZCB0aG9zZSBxdWVyeSB2YWx1ZXMgZG8gbm90IG1hdGNoIHRoZSBjdXJyZW50IHZhbHVlcy5cbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShxdWVyeVZhbHVlcykgIT09IEpTT04uc3RyaW5naWZ5KHZhbHVlcykpIHtcbiAgICAgICAgLy8gU2V0IHZhbHVlcyB0byBudW1iZXJzLlxuICAgICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICBkaXN0YW5jZTogcXVlcnlWYWx1ZXM/LmV2ZW50Py5kaXN0YW5jZSB8fCB2YWx1ZXMuZXZlbnQuZGlzdGFuY2UsXG4gICAgICAgICAgICBkdXJhdGlvbjogcXVlcnlWYWx1ZXM/LmV2ZW50Py5kdXJhdGlvbiB8fCB2YWx1ZXMuZXZlbnQuZHVyYXRpb24sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnRlcnZhbER1cmF0aW9uOiB7XG4gICAgICAgICAgICBydW46IHF1ZXJ5VmFsdWVzPy5pbnRlcnZhbER1cmF0aW9uPy5ydW4gfHwgdmFsdWVzLmludGVydmFsRHVyYXRpb24ucnVuLFxuICAgICAgICAgICAgd2FsazogcXVlcnlWYWx1ZXM/LmludGVydmFsRHVyYXRpb24/LndhbGsgfHwgdmFsdWVzLmludGVydmFsRHVyYXRpb24ud2FsayxcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiB1cGRhdGVVcmxXaGVuVmFsdWVzQ2hhbmdlKCkge1xuICAgIGlmIChKU09OLnN0cmluZ2lmeShxdWVyeVZhbHVlcykgIT09IEpTT04uc3RyaW5naWZ5KHZhbHVlcykpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgdmFsdWVzLCBxdWVyeVZhbHVlcyB9KTtcbiAgICAgIC8vIHJvdXRlci5yZXBsYWNlKHsgcXVlcnk6IGZsYXQodmFsdWVzKSB9LCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9ICk7XG4gICAgfVxufSwgW3ZhbHVlc10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBkaXN0YW5jZSwgZHVyYXRpb24gfSA9IHZhbHVlcy5ldmVudDtcbiAgICBjb25zdCBlYWNoSW50ZXJ2YWxEdXJhdGlvbiA9IHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLnJ1biArIHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLndhbGs7XG4gICAgY29uc3QgdG90YWxJbnRlcnZhbHMgPSBlYWNoSW50ZXJ2YWxEdXJhdGlvbiA+IDAgPyBkdXJhdGlvbiAvIGVhY2hJbnRlcnZhbER1cmF0aW9uIDogMDtcbiAgICBjb25zdCBpbnRlcnZhbERpc3RhbmNlID0gdG90YWxJbnRlcnZhbHMgPiAwID8gZGlzdGFuY2UgLyB0b3RhbEludGVydmFscyA6IDA7XG4gICAgY29uc3Qgd2Fsa0Rpc3RhbmNlID0gdmFsdWVzLmludGVydmFsRHVyYXRpb24ud2FsayAvIHdhbGtQYWNlO1xuICAgIGNvbnN0IHJ1bkRpc3RhbmNlID0gaW50ZXJ2YWxEaXN0YW5jZSAtIHdhbGtEaXN0YW5jZTtcbiAgICBjb25zdCBydW5QYWNlID0gcnVuRGlzdGFuY2UgLyB2YWx1ZXMuaW50ZXJ2YWxEdXJhdGlvbi5ydW4gKiA2MDtcblxuICAgIHNldENhbGN1bGF0aW9ucyh7XG4gICAgICBkaXN0YW5jZToge1xuICAgICAgICBydW46IHJ1bkRpc3RhbmNlLFxuICAgICAgICB3YWxrOiB3YWxrRGlzdGFuY2UsXG4gICAgICB9LFxuICAgICAgaW50ZXJ2YWxzOiB0b3RhbEludGVydmFscyxcbiAgICAgIHBhY2U6IHtcbiAgICAgICAgcnVuOiBydW5QYWNlLFxuICAgICAgICB3YWxrOiB3YWxrUGFjZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sIFt2YWx1ZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XYWxrIC0gUnVuIFBhY2UgY2FsY3VsYXRvcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwic3RvcHdhdGNoLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJibG9jayBtYXgtdy1tZCBteC1hdXRvIHB0LTlcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtYm9sZCBmb250LXNlcmlmIG1iLTNcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cInN0b3B3YXRjaC5wbmdcIiBjbGFzc05hbWU9XCJ3LTggbXItMiBpbmxpbmVcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIFdhbGsgLSBSdW4gUGFjZSBDYWxjdWxhdG9yXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxGb3JtIHZhbHVlcz17dmFsdWVzfSBzZXRWYWx1ZXM9e3NldFZhbHVlc30gLz5cbiAgICAgICAgPFJlc3VsdCBjYWxjdWxhdGlvbnM9e2NhbGN1bGF0aW9uc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})