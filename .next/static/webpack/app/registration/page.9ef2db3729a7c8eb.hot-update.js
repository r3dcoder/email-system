"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/registration/page",{

/***/ "(app-pages-browser)/./src/app/registration/page.tsx":
/*!***************************************!*\
  !*** ./src/app/registration/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst RegistrationPage = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        fullName: \"\",\n        email: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-auto w-96 bg-white rounded-lg shadow-lg p-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-semibold mb-6\",\n                    children: \"Create an Account\"\n                }, void 0, false, {\n                    fileName: \"/home/mahfuz/Desktop/email-system/src/app/registration/page.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                            label: \"Full Name\",\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"fullName\",\n                            placeholder: \"Enter your full name\",\n                            value: formData.fullName,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/email-system/src/app/registration/page.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                            label: \"Email\",\n                            type: \"email\",\n                            id: \"email\",\n                            name: \"email\",\n                            placeholder: \"Enter your email\",\n                            value: formData.email,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/email-system/src/app/registration/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                            label: \"Password\",\n                            type: \"password\",\n                            id: \"password\",\n                            name: \"password\",\n                            placeholder: \"Enter your password\",\n                            value: formData.password,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/email-system/src/app/registration/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                            label: \"Confirm Password\",\n                            type: \"password\",\n                            id: \"confirmPassword\",\n                            name: \"confirmPassword\",\n                            placeholder: \"Confirm your password\",\n                            value: formData.confirmPassword,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/email-system/src/app/registration/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/email-system/src/app/registration/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mahfuz/Desktop/email-system/src/app/registration/page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-4 text-center text-sm text-gray-500\",\n                    children: [\n                        \"Already have an account? \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/login\",\n                            className: \"text-blue-500\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/email-system/src/app/registration/page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 36\n                        }, undefined),\n                        \".\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mahfuz/Desktop/email-system/src/app/registration/page.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mahfuz/Desktop/email-system/src/app/registration/page.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/mahfuz/Desktop/email-system/src/app/registration/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RegistrationPage, \"NfOesNd2SBzterqtFTfy2+qb8jE=\");\n_c = RegistrationPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationPage);\nvar _c;\n$RefreshReg$(_c, \"RegistrationPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVnaXN0cmF0aW9uL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3FEO0FBQ3ZCO0FBRTlCLE1BQU1HLG1CQUE2Qjs7SUFDakMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO1FBQ3ZDSyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxpQkFBaUI7SUFDbkI7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixNQUFNRyxNQUFNO1FBQ3BDVCxZQUFZLENBQUNVLFdBQWM7Z0JBQ3pCLEdBQUdBLFFBQVE7Z0JBQ1gsQ0FBQ0gsS0FBSyxFQUFFQztZQUNWO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUE4Qjs7Ozs7OzhCQUM1Qyw4REFBQ0U7O3NDQUNDLDhEQUFDQzs0QkFDQ0MsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSFgsTUFBSzs0QkFDTFksYUFBWTs0QkFDWlgsT0FBT1QsU0FBU0UsUUFBUTs0QkFDeEJtQixVQUFVZjs7Ozs7O3NDQUVaLDhEQUFDVTs0QkFDQ0MsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSFgsTUFBSzs0QkFDTFksYUFBWTs0QkFDWlgsT0FBT1QsU0FBU0csS0FBSzs0QkFDckJrQixVQUFVZjs7Ozs7O3NDQUVaLDhEQUFDVTs0QkFDQ0MsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSFgsTUFBSzs0QkFDTFksYUFBWTs0QkFDWlgsT0FBT1QsU0FBU0ksUUFBUTs0QkFDeEJpQixVQUFVZjs7Ozs7O3NDQUVaLDhEQUFDVTs0QkFDQ0MsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSFgsTUFBSzs0QkFDTFksYUFBWTs0QkFDWlgsT0FBT1QsU0FBU0ssZUFBZTs0QkFDL0JnQixVQUFVZjs7Ozs7O3NDQUVaLDhEQUFDZ0I7NEJBQ0NKLE1BQUs7NEJBQ0xMLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs4QkFJSCw4REFBQ1U7b0JBQUVWLFdBQVU7O3dCQUF5QztzQ0FDM0IsOERBQUNmLGtEQUFJQTs0QkFBQzBCLE1BQUs7NEJBQVNYLFdBQVU7c0NBQWdCOzs7Ozs7d0JBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvRjtHQXRFTWQ7S0FBQUE7QUF3RU4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3JlZ2lzdHJhdGlvbi9wYWdlLnRzeD8wYjE0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcbiBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBSZWdpc3RyYXRpb25QYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgZnVsbE5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKChwcmV2RGF0YSkgPT4gKHtcbiAgICAgIC4uLnByZXZEYXRhLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW4gYmctZ3JheS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHctOTYgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgcC04XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTZcIj5DcmVhdGUgYW4gQWNjb3VudDwvaDI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJGdWxsIE5hbWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIG5hbWU9XCJmdWxsTmFtZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZnVsbCBuYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5mdWxsTmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5jb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+U2lnbiBJbjwvTGluaz4uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIlJlZ2lzdHJhdGlvblBhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZnVsbE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwiSW5wdXQiLCJsYWJlbCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/registration/page.tsx\n"));

/***/ })

});