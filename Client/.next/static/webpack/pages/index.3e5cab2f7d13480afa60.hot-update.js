/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Toolbar.js":
/*!*******************************!*\
  !*** ./components/Toolbar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/adera/Documents/My Practice/GraphQL/ApolloFullstack/Client/components/Toolbar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // import {\n//   Form,\n//   FormGroup,\n//   Input,\n//   Label,\n//   Modal,\n//   ModalBody,\n//   ModalFooter,\n//   ModalHeader,\n// } from 'reactstrap';\n\n\n\n\nvar Toolbar = function Toolbar(_ref) {\n  _s();\n\n  var insertSpeakerEvent = _ref.insertSpeakerEvent;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      modal = _useState[0],\n      setModal = _useState[1];\n\n  var toggle = function toggle() {\n    setModal(!modal);\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      first = _useState2[0],\n      setFirst = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      last = _useState3[0],\n      setLast = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      favorite = _useState4[0],\n      setFavorite = _useState4[1];\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n    console.log(first, last, favorite);\n    insertSpeakerEvent(first, last, favorite);\n    setFirst(\"\");\n    setLast(\"\");\n    setFavorite(false);\n    setModal(!modal);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n    className: \"toolbar\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container mx-auto text-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.default, {\n          variant: \"contained\",\n          color: \"primary\",\n          onClick: toggle,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Insert Speaker\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__.default, {\n          open: modal,\n          onClose: toggle,\n          className: \"text-center\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-xs text-center\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n              className: \"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n              onSubmit: handleSubmit,\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                variant: \"h2\",\n                toggle: \"{toggle}\",\n                children: \"Insert Speaker Dialog\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                  className: \"block text-gray-700 text-sm font-bold mb-2\",\n                  htmlFor: \"First name\",\n                  children: \"First Name\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                  className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                  name: \"first\",\n                  id: \"first\",\n                  type: \"text\",\n                  placeholder: \"First Name\",\n                  onChange: function onChange(e) {\n                    return setFirst(e.target.value);\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                  className: \"block text-gray-700 text-sm font-bold mb-2\",\n                  htmlFor: \"Last Name\",\n                  children: \"Last Name\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 69,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                  className: \"shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline\",\n                  name: \"last\",\n                  id: \"last\",\n                  type: \"last\",\n                  placeholder: \"Last Name\",\n                  onChange: function onChange(e) {\n                    return setLast(e.target.value);\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                classname: \"md-6\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                  className: \"inline-flex items-center\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    className: \"form-radio\",\n                    name: \"accountType\",\n                    onChange: function onChange(e) {\n                      return setFavorite(e.target.value === \"on\");\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 86,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"ml-2\",\n                    children: \"Favorite\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 92,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.default, {\n                  className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                  color: \"primary\",\n                  variant: \"contained\",\n                  type: \"submit\",\n                  children: \"Submit\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.default, {\n                  onClick: toggle,\n                  color: \"primary\",\n                  children: \"Disagree\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 104,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Toolbar, \"eWkZXoJZnELhVW3y9IEndLaG1uI=\");\n\n_c = Toolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Toolbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub29sYmFyLmpzPzg1MDMiXSwibmFtZXMiOlsiVG9vbGJhciIsImluc2VydFNwZWFrZXJFdmVudCIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsInRvZ2dsZSIsImZpcnN0Iiwic2V0Rmlyc3QiLCJsYXN0Iiwic2V0TGFzdCIsImZhdm9yaXRlIiwic2V0RmF2b3JpdGUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Q0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLGtCQUF5QixRQUF6QkEsa0JBQXlCOztBQUFBLGtCQUNoQkMsK0NBQVEsQ0FBQyxLQUFELENBRFE7QUFBQSxNQUNuQ0MsS0FEbUM7QUFBQSxNQUM1QkMsUUFENEI7O0FBRzFDLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJELFlBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQVI7QUFDRCxHQUZEOztBQUgwQyxtQkFPaEJELCtDQUFRLENBQUMsRUFBRCxDQVBRO0FBQUEsTUFPbkNJLEtBUG1DO0FBQUEsTUFPNUJDLFFBUDRCOztBQUFBLG1CQVFsQkwsK0NBQVEsQ0FBQyxFQUFELENBUlU7QUFBQSxNQVFuQ00sSUFSbUM7QUFBQSxNQVE3QkMsT0FSNkI7O0FBQUEsbUJBU1ZQLCtDQUFRLENBQUMsS0FBRCxDQVRFO0FBQUEsTUFTbkNRLFFBVG1DO0FBQUEsTUFTekJDLFdBVHlCOztBQVcxQyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBQyxX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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBdkNGLGVBa0RFO0FBQUsseUJBQVMsRUFBQyxtQ0FBZjtBQUFBLHdDQUNFLDhEQUFDLDZEQUFEO0FBQ0UsMkJBQVMsRUFBQyw4R0FEWjtBQUVFLHVCQUFLLEVBQUMsU0FGUjtBQUdFLHlCQUFPLEVBQUMsV0FIVjtBQUlFLHNCQUFJLEVBQUMsUUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQVNFLDhEQUFDLDZEQUFEO0FBQVEseUJBQU8sRUFBRWQsTUFBakI7QUFBeUIsdUJBQUssRUFBQyxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErRUQsQ0FwR0Q7O0dBQU1MLE87O0tBQUFBLE87QUFzR04sK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rvb2xiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7XG4vLyAgIEZvcm0sXG4vLyAgIEZvcm1Hcm91cCxcbi8vICAgSW5wdXQsXG4vLyAgIExhYmVsLFxuLy8gICBNb2RhbCxcbi8vICAgTW9kYWxCb2R5LFxuLy8gICBNb2RhbEZvb3Rlcixcbi8vICAgTW9kYWxIZWFkZXIsXG4vLyB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XG5cbmNvbnN0IFRvb2xiYXIgPSAoeyBpbnNlcnRTcGVha2VyRXZlbnQsfSkgPT4ge1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWwoIW1vZGFsKTtcbiAgfTtcblxuICBjb25zdCBbZmlyc3QsIHNldEZpcnN0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGFzdCwgc2V0TGFzdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Zhdm9yaXRlLCBzZXRGYXZvcml0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhmaXJzdCwgbGFzdCwgZmF2b3JpdGUpXG4gICAgaW5zZXJ0U3BlYWtlckV2ZW50KGZpcnN0LCBsYXN0LCBmYXZvcml0ZSk7XG4gICAgc2V0Rmlyc3QoXCJcIik7XG4gICAgc2V0TGFzdChcIlwiKTtcbiAgICBzZXRGYXZvcml0ZShmYWxzZSk7XG4gICAgc2V0TW9kYWwoIW1vZGFsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvb2xiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0b2dnbGV9PlxuICAgICAgICAgICAgPHNwYW4+SW5zZXJ0IFNwZWFrZXI8L3NwYW4+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPE1vZGFsIG9wZW49e21vZGFsfSBvbkNsb3NlPXt0b2dnbGV9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy14cyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkIHB4LTggcHQtNiBwYi04IG1iLTRcIlxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IHZhcmlhbnQ9XCJoMlwiIHRvZ2dsZT1cInt0b2dnbGV9XCI+XG4gICAgICAgICAgICAgICAgICBJbnNlcnQgU3BlYWtlciBEaWFsb2dcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiRmlyc3QgbmFtZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWVcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpcnN0XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpcnN0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIExhc3QgTmFtZVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItcmVkLTUwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3RcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibGFzdFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc25hbWU9XCJtZC02XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1yYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnRUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZhdm9yaXRlKGUudGFyZ2V0LnZhbHVlID09PSBcIm9uXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+RmF2b3JpdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlfSBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgRGlzYWdyZWVcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Toolbar.js\n");

/***/ })

});