webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flat */ \"./node_modules/flat/index.js\");\n/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flat__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Form */ \"./components/Form/index.tsx\");\n/* harmony import */ var _components_Result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Result */ \"./components/Result/index.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/pattie/Development/walk-run-pace/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar defaultValues = {\n  event: {\n    distance: 3.10686,\n    // 5K\n    duration: 60 // 1 hour\n\n  },\n  intervalDuration: {\n    run: 4,\n    walk: 1\n  }\n};\nvar walkPace = 20;\nfunction Home(_ref) {\n  _s();\n\n  var query = _ref.query;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](defaultValues),\n      _React$useState2 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      values = _React$useState2[0],\n      setValues = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](undefined),\n      _React$useState4 = Object(_Users_pattie_Development_walk_run_pace_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      calculations = _React$useState4[0],\n      setCalculations = _React$useState4[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  console.log({\n    query: query\n  });\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function buildValuesFromQueryString() {\n    var queryValues = flat__WEBPACK_IMPORTED_MODULE_6___default.a.unflatten(query_string__WEBPACK_IMPORTED_MODULE_5___default.a.parse(location.search, {\n      parseNumbers: true\n    })); // If there are query values\n\n    if (Object.keys(queryValues).length > 0) {\n      // And those query values do not match the current values.\n      if (JSON.stringify(queryValues) !== JSON.stringify(values)) {\n        var _queryValues$event, _queryValues$event2, _queryValues$interval, _queryValues$interval2;\n\n        // Set values to numbers.\n        setValues({\n          event: {\n            distance: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$event = queryValues.event) === null || _queryValues$event === void 0 ? void 0 : _queryValues$event.distance) || values.event.distance,\n            duration: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$event2 = queryValues.event) === null || _queryValues$event2 === void 0 ? void 0 : _queryValues$event2.duration) || values.event.duration\n          },\n          intervalDuration: {\n            run: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$interval = queryValues.intervalDuration) === null || _queryValues$interval === void 0 ? void 0 : _queryValues$interval.run) || values.intervalDuration.run,\n            walk: (queryValues === null || queryValues === void 0 ? void 0 : (_queryValues$interval2 = queryValues.intervalDuration) === null || _queryValues$interval2 === void 0 ? void 0 : _queryValues$interval2.walk) || values.intervalDuration.walk\n          }\n        });\n      }\n    }\n  }, []); // React.useEffect(function updateUrl() {\n  //   if (JSON.stringify(values) !== JSON.stringify(queryValues)) {\n  //     console.log('update url', { values, queryValues});\n  //     router.replace({ query: flat(values) }, undefined, { shallow: true } );\n  //   }\n  // }, [values]);\n\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function () {\n    var _values$event = values.event,\n        distance = _values$event.distance,\n        duration = _values$event.duration;\n    var eachIntervalDuration = values.intervalDuration.run + values.intervalDuration.walk;\n    var totalIntervals = eachIntervalDuration > 0 ? duration / eachIntervalDuration : 0;\n    var intervalDistance = totalIntervals > 0 ? distance / totalIntervals : 0;\n    var walkDistance = values.intervalDuration.walk / walkPace;\n    var runDistance = intervalDistance - walkDistance;\n    var runPace = runDistance / values.intervalDuration.run * 60;\n    setCalculations({\n      distance: {\n        run: runDistance,\n        walk: walkDistance\n      },\n      intervals: totalIntervals,\n      pace: {\n        run: runPace,\n        walk: walkPace\n      }\n    });\n  }, [values]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"container mx-auto px-4 flex flex-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Walk - Run Pace calculator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"stopwatch.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n      className: \"block max-w-md mx-auto pt-9\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-center text-2xl font-bold font-serif mb-3\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n          src: \"stopwatch.png\",\n          className: \"w-8 mr-2 inline\",\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this), \"Walk - Run Pace Calculator\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        values: values,\n        setValues: setValues\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Result__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        calculations: calculations\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"b2sVjiiS8gUTQtF0i0hPBuvV4qA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Home;\n\nHome.getInitialProps = function (_ref2) {\n  var query = _ref2.query;\n  return {\n    query: query\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZGVmYXVsdFZhbHVlcyIsImV2ZW50IiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsImludGVydmFsRHVyYXRpb24iLCJydW4iLCJ3YWxrIiwid2Fsa1BhY2UiLCJIb21lIiwicXVlcnkiLCJSZWFjdCIsInZhbHVlcyIsInNldFZhbHVlcyIsInVuZGVmaW5lZCIsImNhbGN1bGF0aW9ucyIsInNldENhbGN1bGF0aW9ucyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJidWlsZFZhbHVlc0Zyb21RdWVyeVN0cmluZyIsInF1ZXJ5VmFsdWVzIiwiZmxhdCIsInVuZmxhdHRlbiIsInFzIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhcnNlTnVtYmVycyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiZWFjaEludGVydmFsRHVyYXRpb24iLCJ0b3RhbEludGVydmFscyIsImludGVydmFsRGlzdGFuY2UiLCJ3YWxrRGlzdGFuY2UiLCJydW5EaXN0YW5jZSIsInJ1blBhY2UiLCJpbnRlcnZhbHMiLCJwYWNlIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsYUFBYSxHQUFHO0FBQ3BCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFLE9BREw7QUFDYztBQUNuQkMsWUFBUSxFQUFFLEVBRkwsQ0FFUzs7QUFGVCxHQURhO0FBS3BCQyxrQkFBZ0IsRUFBRTtBQUNoQkMsT0FBRyxFQUFFLENBRFc7QUFFaEJDLFFBQUksRUFBRTtBQUZVO0FBTEUsQ0FBdEI7QUFVQSxJQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFFZSxTQUFTQyxJQUFULE9BRVo7QUFBQTs7QUFBQSxNQUREQyxLQUNDLFFBRERB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U0FBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQUVBLFNBQUssRUFBTEE7QUFBRixHQUFoQjtBQUFBLENBQXZCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IGZsYXQgZnJvbSAnZmxhdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0nO1xuaW1wb3J0IFJlc3VsdCBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdCc7XG5pbXBvcnQgeyBWYWx1ZXMsIENhbGN1bGF0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcbiAgZXZlbnQ6IHtcbiAgICBkaXN0YW5jZTogMy4xMDY4NiwgLy8gNUtcbiAgICBkdXJhdGlvbjogNjAsIC8vIDEgaG91clxuICB9LFxuICBpbnRlcnZhbER1cmF0aW9uOiB7XG4gICAgcnVuOiA0LFxuICAgIHdhbGs6IDEsXG4gIH0sXG59O1xuY29uc3Qgd2Fsa1BhY2UgPSAyMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7XG4gIHF1ZXJ5LFxufSkge1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGU8VmFsdWVzPihkZWZhdWx0VmFsdWVzKTtcbiAgY29uc3QgW2NhbGN1bGF0aW9ucywgc2V0Q2FsY3VsYXRpb25zXSA9IFJlYWN0LnVzZVN0YXRlPENhbGN1bGF0aW9uc3x1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zb2xlLmxvZyh7IHF1ZXJ5IH0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiBidWlsZFZhbHVlc0Zyb21RdWVyeVN0cmluZygpIHtcbiAgICBjb25zdCBxdWVyeVZhbHVlcyA9IGZsYXQudW5mbGF0dGVuKFxuICAgICAgcXMucGFyc2UobG9jYXRpb24uc2VhcmNoLCB7IHBhcnNlTnVtYmVyczogdHJ1ZSB9KVxuICAgICkgYXMgdW5rbm93biBhcyBhbnk7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgcXVlcnkgdmFsdWVzXG4gICAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5VmFsdWVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBBbmQgdGhvc2UgcXVlcnkgdmFsdWVzIGRvIG5vdCBtYXRjaCB0aGUgY3VycmVudCB2YWx1ZXMuXG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocXVlcnlWYWx1ZXMpICE9PSBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpKSB7XG4gICAgICAgIC8vIFNldCB2YWx1ZXMgdG8gbnVtYmVycy5cbiAgICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgZGlzdGFuY2U6IHF1ZXJ5VmFsdWVzPy5ldmVudD8uZGlzdGFuY2UgfHwgdmFsdWVzLmV2ZW50LmRpc3RhbmNlLFxuICAgICAgICAgICAgZHVyYXRpb246IHF1ZXJ5VmFsdWVzPy5ldmVudD8uZHVyYXRpb24gfHwgdmFsdWVzLmV2ZW50LmR1cmF0aW9uLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW50ZXJ2YWxEdXJhdGlvbjoge1xuICAgICAgICAgICAgcnVuOiBxdWVyeVZhbHVlcz8uaW50ZXJ2YWxEdXJhdGlvbj8ucnVuIHx8IHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLnJ1bixcbiAgICAgICAgICAgIHdhbGs6IHF1ZXJ5VmFsdWVzPy5pbnRlcnZhbER1cmF0aW9uPy53YWxrIHx8IHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLndhbGssXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gdXBkYXRlVXJsKCkge1xuICAvLyAgIGlmIChKU09OLnN0cmluZ2lmeSh2YWx1ZXMpICE9PSBKU09OLnN0cmluZ2lmeShxdWVyeVZhbHVlcykpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgdXJsJywgeyB2YWx1ZXMsIHF1ZXJ5VmFsdWVzfSk7XG4gIC8vICAgICByb3V0ZXIucmVwbGFjZSh7IHF1ZXJ5OiBmbGF0KHZhbHVlcykgfSwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSApO1xuICAvLyAgIH1cbiAgLy8gfSwgW3ZhbHVlc10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBkaXN0YW5jZSwgZHVyYXRpb24gfSA9IHZhbHVlcy5ldmVudDtcbiAgICBjb25zdCBlYWNoSW50ZXJ2YWxEdXJhdGlvbiA9IHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLnJ1biArIHZhbHVlcy5pbnRlcnZhbER1cmF0aW9uLndhbGs7XG4gICAgY29uc3QgdG90YWxJbnRlcnZhbHMgPSBlYWNoSW50ZXJ2YWxEdXJhdGlvbiA+IDAgPyBkdXJhdGlvbiAvIGVhY2hJbnRlcnZhbER1cmF0aW9uIDogMDtcbiAgICBjb25zdCBpbnRlcnZhbERpc3RhbmNlID0gdG90YWxJbnRlcnZhbHMgPiAwID8gZGlzdGFuY2UgLyB0b3RhbEludGVydmFscyA6IDA7XG4gICAgY29uc3Qgd2Fsa0Rpc3RhbmNlID0gdmFsdWVzLmludGVydmFsRHVyYXRpb24ud2FsayAvIHdhbGtQYWNlO1xuICAgIGNvbnN0IHJ1bkRpc3RhbmNlID0gaW50ZXJ2YWxEaXN0YW5jZSAtIHdhbGtEaXN0YW5jZTtcbiAgICBjb25zdCBydW5QYWNlID0gcnVuRGlzdGFuY2UgLyB2YWx1ZXMuaW50ZXJ2YWxEdXJhdGlvbi5ydW4gKiA2MDtcblxuICAgIHNldENhbGN1bGF0aW9ucyh7XG4gICAgICBkaXN0YW5jZToge1xuICAgICAgICBydW46IHJ1bkRpc3RhbmNlLFxuICAgICAgICB3YWxrOiB3YWxrRGlzdGFuY2UsXG4gICAgICB9LFxuICAgICAgaW50ZXJ2YWxzOiB0b3RhbEludGVydmFscyxcbiAgICAgIHBhY2U6IHtcbiAgICAgICAgcnVuOiBydW5QYWNlLFxuICAgICAgICB3YWxrOiB3YWxrUGFjZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sIFt2YWx1ZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XYWxrIC0gUnVuIFBhY2UgY2FsY3VsYXRvcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwic3RvcHdhdGNoLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJibG9jayBtYXgtdy1tZCBteC1hdXRvIHB0LTlcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtYm9sZCBmb250LXNlcmlmIG1iLTNcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cInN0b3B3YXRjaC5wbmdcIiBjbGFzc05hbWU9XCJ3LTggbXItMiBpbmxpbmVcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIFdhbGsgLSBSdW4gUGFjZSBDYWxjdWxhdG9yXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxGb3JtIHZhbHVlcz17dmFsdWVzfSBzZXRWYWx1ZXM9e3NldFZhbHVlc30gLz5cbiAgICAgICAgPFJlc3VsdCBjYWxjdWxhdGlvbnM9e2NhbGN1bGF0aW9uc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiAoeyBxdWVyeSB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})