"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/login/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CustomInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CustomInput */ \"./src/components/CustomInput.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst LoginPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const successMessage = router.query.success;\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        if (name === \"email\") {\n            setEmail(value);\n        } else if (name === \"password\") {\n            setPassword(value);\n        }\n    };\n    const handleLogin = (event)=>{\n        event.preventDefault();\n        // Perform login logic here\n        console.log(\"Logging in with:\", email, password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-auto w-96 bg-white rounded-lg shadow-lg p-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-semibold mb-6\",\n                    children: \"Sign in to your account\"\n                }, void 0, false, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                successMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-green-200 text-green-800 p-4 mb-4\",\n                    children: \"Registration successful! You can now log in.\"\n                }, void 0, false, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleLogin,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"Email\",\n                            type: \"email\",\n                            id: \"email\",\n                            name: \"email\",\n                            placeholder: \"Enter your email\",\n                            value: email,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"Password\",\n                            type: \"password\",\n                            id: \"password\",\n                            name: \"password\",\n                            placeholder: \"Enter your password\",\n                            value: password,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-4 text-center text-sm text-gray-500\",\n                    children: [\n                        \"Don't have an account? \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/registration\",\n                            className: \"text-blue-500\",\n                            children: \"Create one\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 34\n                        }, undefined),\n                        \".\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"LSjBy/+8e694Z8+hBRmcdVALamQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4vaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxRDtBQUN4QjtBQUN1QjtBQUNaO0FBRXhDLE1BQU1LLFlBQXNCOztJQUMxQixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEIsTUFBTSxDQUFDRyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNVSxpQkFBaUJMLE9BQU9NLEtBQUssQ0FBQ0MsT0FBTztJQUUzQyxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixNQUFNRyxNQUFNO1FBQ3BDLElBQUlGLFNBQVMsU0FBUztZQUNwQlIsU0FBU1M7UUFDWCxPQUFPLElBQUlELFNBQVMsWUFBWTtZQUM5Qk4sWUFBWU87UUFDZDtJQUNGO0lBRUEsTUFBTUUsY0FBYyxDQUFDSjtRQUNuQkEsTUFBTUssY0FBYztRQUNwQiwyQkFBMkI7UUFDM0JDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JmLE9BQU9FO0lBQ3pDO0lBRUEscUJBQ0UsOERBQUNjO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBOEI7Ozs7OztnQkFDM0NiLGdDQUNDLDhEQUFDWTtvQkFBSUMsV0FBVTs4QkFBdUM7Ozs7Ozs4QkFJeEQsOERBQUNFO29CQUFLQyxVQUFVUjs7c0NBQ2QsOERBQUNoQiwrREFBWUE7NEJBQ1h5QixPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIZCxNQUFLOzRCQUNMZSxhQUFZOzRCQUNaZCxPQUFPVjs0QkFDUHlCLFVBQVVsQjs7Ozs7O3NDQUVaLDhEQUFDWCwrREFBWUE7NEJBQ1h5QixPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIZCxNQUFLOzRCQUNMZSxhQUFZOzRCQUNaZCxPQUFPUjs0QkFDUHVCLFVBQVVsQjs7Ozs7O3NDQUVaLDhEQUFDbUI7NEJBQ0NKLE1BQUs7NEJBQ0xMLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs4QkFJSCw4REFBQ1U7b0JBQUVWLFdBQVU7O3dCQUF5QztzQ0FDN0IsOERBQUN0QixrREFBSUE7NEJBQUNpQyxNQUFLOzRCQUFnQlgsV0FBVTtzQ0FBZ0I7Ozs7Ozt3QkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RztHQS9ETW5COztRQUNXRCxrREFBU0E7OztLQURwQkM7QUFpRU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luL2luZGV4LnRzeD85MjUyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ3VzdG9tZUlucHV0IGZyb20gJ0AvY29tcG9uZW50cy9DdXN0b21JbnB1dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IExvZ2luUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSByb3V0ZXIucXVlcnkuc3VjY2VzcztcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKG5hbWUgPT09ICdlbWFpbCcpIHtcbiAgICAgIHNldEVtYWlsKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgIHNldFBhc3N3b3JkKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gUGVyZm9ybSBsb2dpbiBsb2dpYyBoZXJlXG4gICAgY29uc29sZS5sb2coJ0xvZ2dpbmcgaW4gd2l0aDonLCBlbWFpbCwgcGFzc3dvcmQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIGJnLWdyYXktMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byB3LTk2IGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIHAtOFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi02XCI+U2lnbiBpbiB0byB5b3VyIGFjY291bnQ8L2gyPlxuICAgICAgICB7c3VjY2Vzc01lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tMjAwIHRleHQtZ3JlZW4tODAwIHAtNCBtYi00XCI+XG4gICAgICAgICAgICBSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCEgWW91IGNhbiBub3cgbG9nIGluLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTG9naW59PlxuICAgICAgICAgIDxDdXN0b21lSW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q3VzdG9tZUlucHV0XG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8TGluayBocmVmPVwiL3JlZ2lzdHJhdGlvblwiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5DcmVhdGUgb25lPC9MaW5rPi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJDdXN0b21lSW5wdXQiLCJ1c2VSb3V0ZXIiLCJMb2dpblBhZ2UiLCJyb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInN1Y2Nlc3NNZXNzYWdlIiwicXVlcnkiLCJzdWNjZXNzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZUxvZ2luIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login/index.tsx\n"));

/***/ })

});