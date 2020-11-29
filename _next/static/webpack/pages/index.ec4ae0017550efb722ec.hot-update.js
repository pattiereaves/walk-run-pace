webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flat */ \"./node_modules/flat/index.js\");\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flat__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Form */ \"./components/Form/index.tsx\");\n/* harmony import */ var _components_Result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Result */ \"./components/Result/index.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/pattie/Development/walk-run-pace/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar defaultValues = {\n  event: {\n    distance: 3.10686,\n    // 5K\n    duration: 60 // 1 hour\n\n  },\n  intervalDuration: {\n    run: 4,\n    walk: 1\n  }\n};\nvar walkPace = 20;\nfunction Home() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](defaultValues),\n      _React$useState2 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      values = _React$useState2[0],\n      setValues = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](undefined),\n      _React$useState4 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      calculations = _React$useState4[0],\n      setCalculations = _React$useState4[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function buildValuesFromQueryString() {\n    var queryValues = flat__WEBPACK_IMPORTED_MODULE_6___default.a.unflatten(query_string__WEBPACK_IMPORTED_MODULE_5___default.a.parse(location.search, {\n      parseNumbers: true\n    })); // If there are query values\n\n    if (Object.keys(queryValues).length > 0) {\n      // And those query values do not match the current values.\n      if (JSON.stringify(queryValues) !== JSON.stringify(values)) {\n        var _queryValues$event, _queryValues$event2, _queryValues$interval, _queryValues$interval2;\n\n        // Set values to numbers.\n        setValues({\n          event: {\n            distance: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$event = queryValues.event) === null || _queryValues$event === void 0 ? void 0 : _queryValues$event.distance) || values.event.distance,\n            duration: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$event2 = queryValues.event) === null || _queryValues$event2 === void 0 ? void 0 : _queryValues$event2.duration) || values.event.duration\n          },\n          intervalDuration: {\n            run: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$interval = queryValues.intervalDuration) === null || _queryValues$interval === void 0 ? void 0 : _queryValues$interval.run) || values.intervalDuration.run,\n            walk: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$interval2 = queryValues.intervalDuration) === null || _queryValues$interval2 === void 0 ? void 0 : _queryValues$interval2.walk) || values.intervalDuration.walk\n          }\n        });\n      }\n    }\n  }, []); // React.useEffect(function updateUrl() {\n  //   if (JSON.stringify(values) !== JSON.stringify(query)) {\n  //     router.replace({ query: flat(values) }, undefined, { shallow: true } );\n  //   }\n  // }, [values]);\n\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function () {\n    var _values$event = values.event,\n        distance = _values$event.distance,\n        duration = _values$event.duration;\n    var eachIntervalDuration = values.intervalDuration.run + values.intervalDuration.walk;\n    var totalIntervals = eachIntervalDuration > 0 ? duration / eachIntervalDuration : 0;\n    var intervalDistance = totalIntervals > 0 ? distance / totalIntervals : 0;\n    var walkDistance = values.intervalDuration.walk / walkPace;\n    var runDistance = intervalDistance - walkDistance;\n    var runPace = runDistance / values.intervalDuration.run * 60;\n    setCalculations({\n      distance: {\n        run: runDistance,\n        walk: walkDistance\n      },\n      intervals: totalIntervals,\n      pace: {\n        run: runPace,\n        walk: walkPace\n      }\n    });\n  }, [values]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"container mx-auto px-4 flex flex-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Walk - Run Pace calculator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"stopwatch.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      className: \"block max-w-md mx-auto pt-9\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-center text-2xl font-bold font-serif mb-3\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n          src: \"stopwatch.png\",\n          className: \"w-8 mr-2 inline\",\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, this), \"Walk - Run Pace Calculator\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        values: values,\n        setValues: setValues\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Result__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        calculations: calculations\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"b2sVjiiS8gUTQtF0i0hPBuvV4qA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZGVmYXVsdFZhbHVlcyIsImV2ZW50IiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsImludGVydmFsRHVyYXRpb24iLCJydW4iLCJ3YWxrIiwid2Fsa1BhY2UiLCJIb21lIiwiUmVhY3QiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1bmRlZmluZWQiLCJjYWxjdWxhdGlvbnMiLCJzZXRDYWxjdWxhdGlvbnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJidWlsZFZhbHVlc0Zyb21RdWVyeVN0cmluZyIsInF1ZXJ5VmFsdWVzIiwiZmxhdCIsInVuZmxhdHRlbiIsInFzIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhcnNlTnVtYmVycyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiZWFjaEludGVydmFsRHVyYXRpb24iLCJ0b3RhbEludGVydmFscyIsImludGVydmFsRGlzdGFuY2UiLCJ3YWxrRGlzdGFuY2UiLCJydW5EaXN0YW5jZSIsInJ1blBhY2UiLCJpbnRlcnZhbHMiLCJwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsYUFBYSxHQUFHO0FBQ3BCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLE9BREw7QUFDYztBQUNuQkMsWUFBUSxFQUFFLEVBRkwsQ0FFUzs7QUFGVCxHQURhO0FBS3BCQyxrQkFBZ0IsRUFBRTtBQUNoQkMsT0FBRyxFQUFFLENBRFc7QUFFaEJDLFFBQUksRUFBRTtBQUZVO0FBTEUsQ0FBdEI7QUFVQSxJQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsd0JBQ0RDLDhDQUFBLENBQXVCVCxhQUF2QixDQURDO0FBQUE7QUFBQSxNQUN0QlUsTUFEc0I7QUFB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REQ7QUFFSjlCLFlBQUksRUFBRUM7QUFGRjtBQU5RLEtBQUQsQ0FBZjtBQVdELEdBcEJELEVBb0JHLENBQUNHLE1BQUQsQ0FwQkg7QUFzQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsdUNBQWY7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFNLGVBQVMsRUFBQyw2QkFBaEI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsZ0RBQWQ7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyxlQUFUO0FBQXlCLG1CQUFTLEVBQUMsaUJBQW5DO0FBQXFELGFBQUcsRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0UscUVBQUMsd0RBQUQ7QUFBTSxjQUFNLEVBQUVBLE1BQWQ7QUFBc0IsaUJBQVMsRUFBRUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUUscUVBQUMsMERBQUQ7QUFBUSxvQkFBWSxFQUFFRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBekV1QkwsSTtVQUdQUSxxRDs7O0tBSE9SLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgZmxhdCBmcm9tICdmbGF0JztcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybSc7XG5pbXBvcnQgUmVzdWx0IGZyb20gJy4uL2NvbXBvbmVudHMvUmVzdWx0JztcbmltcG9ydCB7IFZhbHVlcywgQ2FsY3VsYXRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0VmFsdWVzID0ge1xuICBldmVudDoge1xuICAgIGRpc3RhbmNlOiAzLjEwNjg2LCAvLyA1S1xuICAgIGR1cmF0aW9uOiA2MCwgLy8gMSBob3VyXG4gIH0sXG4gIGludGVydmFsRHVyYXRpb246IHtcbiAgICBydW46IDQsXG4gICAgd2FsazogMSxcbiAgfSxcbn07XG5jb25zdCB3YWxrUGFjZSA9IDIwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGU8VmFsdWVzPihkZWZhdWx0VmFsdWVzKTtcbiAgY29uc3QgW2NhbGN1bGF0aW9ucywgc2V0Q2FsY3VsYXRpb25zXSA9IFJlYWN0LnVzZVN0YXRlPENhbGN1bGF0aW9uc3x1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiBidWlsZFZhbHVlc0Zyb21RdWVyeVN0cmluZygpIHtcbiAgICBjb25zdCBxdWVyeVZhbHVlcyA9IGZsYXQudW5mbGF0dGVuKFxuICAgICAgcXMucGFyc2UobG9jYXRpb24uc2VhcmNoLCB7IHBhcnNlTnVtYmVyczogdHJ1ZSB9KVxuICAgICkgYXMgdW5rbm93biBhcyBhbnk7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgcXVlcnkgdmFsdWVzXG4gICAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5VmFsdWVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBBbmQgdGhvc2UgcXVlcnkgdmFsdWVzIGRvIG5vdCBtYXRjaCB0aGUgY3VycmVudCB2YWx1ZXMuXG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocXVlcnlWYWx1ZXMpICE9PSBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpKSB7XG4gICAgICAgIC8vIFNldCB2YWx1ZXMgdG8gbnVtYmVycy5cbiAgICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgZGlzdGFuY2U6IHF1ZXJ5VmFsdWVzPy5ldmVudD8uZGlzdGFuY2UgfHwgdmFsdWVzLmV2ZW50LmRpc3RhbmNlLFxuICAgICAgICAgICAgZHVyYXRpb246IHF1ZXJ5VmFsdWVzPy5ldmVudD8uZHVyYXRpb24gfHwgdmFsdWVzLmV2ZW50LmR1cmF0aW9uLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW50ZXJ2YWxEdXJhdGlvbjoge1xuICAgICAgICAgICAgcnVuOiBxdWVyeVZhbHVlcz8uaW50ZXJ2YWxEdXJhdGlvbj8ucnVuIHx8IHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLnJ1bixcbiAgICAgICAgICAgIHdhbGs6IHF1ZXJ5VmFsdWVzPy5pbnRlcnZhbER1cmF0aW9uPy53YWxrIHx8IHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLndhbGssXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gdXBkYXRlVXJsKCkge1xuICAvLyAgIGlmIChKU09OLnN0cmluZ2lmeSh2YWx1ZXMpICE9PSBKU09OLnN0cmluZ2lmeShxdWVyeSkpIHtcbiAgLy8gICAgIHJvdXRlci5yZXBsYWNlKHsgcXVlcnk6IGZsYXQodmFsdWVzKSB9LCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9ICk7XG4gIC8vICAgfVxuICAvLyB9LCBbdmFsdWVzXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGRpc3RhbmNlLCBkdXJhdGlvbiB9ID0gdmFsdWVzLmV2ZW50O1xuICAgIGNvbnN0IGVhY2hJbnRlcnZhbER1cmF0aW9uID0gdmFsdWVzLmludGVydmFsRHVyYXRpb24ucnVuICsgdmFsdWVzLmludGVydmFsRHVyYXRpb24ud2FsaztcbiAgICBjb25zdCB0b3RhbEludGVydmFscyA9IGVhY2hJbnRlcnZhbER1cmF0aW9uID4gMCA/IGR1cmF0aW9uIC8gZWFjaEludGVydmFsRHVyYXRpb24gOiAwO1xuICAgIGNvbnN0IGludGVydmFsRGlzdGFuY2UgPSB0b3RhbEludGVydmFscyA+IDAgPyBkaXN0YW5jZSAvIHRvdGFsSW50ZXJ2YWxzIDogMDtcbiAgICBjb25zdCB3YWxrRGlzdGFuY2UgPSB2YWx1ZXMuaW50ZXJ2YWxEdXJhdGlvbi53YWxrIC8gd2Fsa1BhY2U7XG4gICAgY29uc3QgcnVuRGlzdGFuY2UgPSBpbnRlcnZhbERpc3RhbmNlIC0gd2Fsa0Rpc3RhbmNlO1xuICAgIGNvbnN0IHJ1blBhY2UgPSBydW5EaXN0YW5jZSAvIHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLnJ1biAqIDYwO1xuXG4gICAgc2V0Q2FsY3VsYXRpb25zKHtcbiAgICAgIGRpc3RhbmNlOiB7XG4gICAgICAgIHJ1bjogcnVuRGlzdGFuY2UsXG4gICAgICAgIHdhbGs6IHdhbGtEaXN0YW5jZSxcbiAgICAgIH0sXG4gICAgICBpbnRlcnZhbHM6IHRvdGFsSW50ZXJ2YWxzLFxuICAgICAgcGFjZToge1xuICAgICAgICBydW46IHJ1blBhY2UsXG4gICAgICAgIHdhbGs6IHdhbGtQYWNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSwgW3ZhbHVlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IGZsZXggZmxleC13cmFwXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldhbGsgLSBSdW4gUGFjZSBjYWxjdWxhdG9yPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJzdG9wd2F0Y2gucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJsb2NrIG1heC13LW1kIG14LWF1dG8gcHQtOVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1ib2xkIGZvbnQtc2VyaWYgbWItM1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwic3RvcHdhdGNoLnBuZ1wiIGNsYXNzTmFtZT1cInctOCBtci0yIGlubGluZVwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgV2FsayAtIFJ1biBQYWNlIENhbGN1bGF0b3JcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPEZvcm0gdmFsdWVzPXt2YWx1ZXN9IHNldFZhbHVlcz17c2V0VmFsdWVzfSAvPlxuICAgICAgICA8UmVzdWx0IGNhbGN1bGF0aW9ucz17Y2FsY3VsYXRpb25zfSAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})