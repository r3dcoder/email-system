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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CustomInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CustomInput */ \"./src/components/CustomInput.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_useApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/useApi */ \"./src/utils/useApi.ts\");\n/* harmony import */ var _utils_api_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/api-urls */ \"./src/utils/api-urls.ts\");\n/* harmony import */ var _context_auth_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/auth-provider */ \"./src/context/auth-provider.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LoginPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { login } = (0,_context_auth_provider__WEBPACK_IMPORTED_MODULE_7__.useAuth)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const successMessage = router.query.success;\n    const { apiResponse, call } = (0,_utils_useApi__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        if (name === \"email\") {\n            setEmail(value);\n        } else if (name === \"password\") {\n            setPassword(value);\n        }\n    };\n    const handleLogin = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await call(_utils_api_urls__WEBPACK_IMPORTED_MODULE_6__.SIGN_IN, \"POST\", {\n                email,\n                password\n            });\n            const { data, error } = apiResponse;\n            if (!error) {\n            // Handle successful sign-in here\n            } else {\n            // Handle error case here\n            }\n        } catch (error) {\n        // Handle error case here\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-auto w-96 bg-white rounded-lg shadow-lg p-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-semibold mb-6\",\n                    children: \"Sign in to your account\"\n                }, void 0, false, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                successMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-green-200 text-green-800 p-4 mb-4\",\n                    children: \"Registration successful! You can now log in.\"\n                }, void 0, false, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, undefined),\n                apiResponse.error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-200 text-red-800 p-4 mb-4\",\n                    children: \"Please Enter a valied email/passowrd\"\n                }, void 0, false, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleLogin,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"Email\",\n                            type: \"email\",\n                            id: \"email\",\n                            name: \"email\",\n                            placeholder: \"Enter your email\",\n                            value: email,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"Password\",\n                            type: \"password\",\n                            id: \"password\",\n                            name: \"password\",\n                            placeholder: \"Enter your password\",\n                            value: password,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-4 text-center text-sm text-gray-500\",\n                    children: [\n                        \"Don't have an account? \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/registration\",\n                            className: \"text-blue-500\",\n                            children: \"Create one\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 34\n                        }, undefined),\n                        \".\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"X1N3cRtJwMy+iKH6oRKa0SilaAY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _context_auth_provider__WEBPACK_IMPORTED_MODULE_7__.useAuth,\n        _utils_useApi__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4vaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNxRDtBQUN4QjtBQUN1QjtBQUNaO0FBQ0o7QUFDTztBQUNPO0FBR2xELE1BQU1RLFlBQXNCOztJQUMxQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxLQUFLLEVBQUUsR0FBR0gsK0RBQU9BO0lBRXpCLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFDekMsTUFBTWMsaUJBQWlCTixPQUFPTyxLQUFLLENBQUNDLE9BQU87SUFFM0MsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRSxHQUFHZCx5REFBTUE7SUFFcEMsTUFBTWUsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsTUFBTUcsTUFBTTtRQUNwQyxJQUFJRixTQUFTLFNBQVM7WUFDcEJWLFNBQVNXO1FBQ1gsT0FBTyxJQUFJRCxTQUFTLFlBQVk7WUFDOUJSLFlBQVlTO1FBQ2Q7SUFDRjtJQUVBLE1BQU1FLGNBQWMsT0FBT0o7UUFDekJBLE1BQU1LLGNBQWM7UUFDcEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVIsS0FBS2Isb0RBQU9BLEVBQUUsUUFBUTtnQkFBRUs7Z0JBQU9FO1lBQVM7WUFDL0QsTUFBTSxFQUFFZSxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHWDtZQUV4QixJQUFJLENBQUNXLE9BQU87WUFDVCxpQ0FBaUM7WUFDcEMsT0FBTztZQUNMLHlCQUF5QjtZQUMzQjtRQUNGLEVBQUUsT0FBT0EsT0FBTztRQUNkLHlCQUF5QjtRQUMzQjtJQUVGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBOEI7Ozs7OztnQkFDM0NoQixnQ0FDQyw4REFBQ2U7b0JBQUlDLFdBQVU7OEJBQXVDOzs7Ozs7Z0JBS3ZEYixZQUFZVyxLQUFLLGtCQUNoQiw4REFBQ0M7b0JBQUlDLFdBQVU7OEJBQW1DOzs7Ozs7OEJBSXBELDhEQUFDRTtvQkFBS0MsVUFBVVQ7O3NDQUNkLDhEQUFDdEIsK0RBQVlBOzRCQUNYZ0MsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSGYsTUFBSzs0QkFDTGdCLGFBQVk7NEJBQ1pmLE9BQU9aOzRCQUNQNEIsVUFBVW5COzs7Ozs7c0NBRVosOERBQUNqQiwrREFBWUE7NEJBQ1hnQyxPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIZixNQUFLOzRCQUNMZ0IsYUFBWTs0QkFDWmYsT0FBT1Y7NEJBQ1AwQixVQUFVbkI7Ozs7OztzQ0FFWiw4REFBQ29COzRCQUNDSixNQUFLOzRCQUNMTCxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7OEJBSUgsOERBQUNVO29CQUFFVixXQUFVOzt3QkFBeUM7c0NBQzdCLDhEQUFDN0Isa0RBQUlBOzRCQUFDd0MsTUFBSzs0QkFBZ0JYLFdBQVU7c0NBQWdCOzs7Ozs7d0JBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkc7R0FuRk12Qjs7UUFDV0osa0RBQVNBO1FBQ05HLDJEQUFPQTtRQU1LRixxREFBTUE7OztLQVJoQ0c7QUFxRk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luL2luZGV4LnRzeD85MjUyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ3VzdG9tZUlucHV0IGZyb20gJ0AvY29tcG9uZW50cy9DdXN0b21JbnB1dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgdXNlQXBpIGZyb20gJ0AvdXRpbHMvdXNlQXBpJztcbmltcG9ydCB7IFNJR05fSU4gfSBmcm9tICdAL3V0aWxzL2FwaS11cmxzJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2NvbnRleHQvYXV0aC1wcm92aWRlcic7XG5pbXBvcnQgeyBTaWduSW5SZXBvbnNlLCBVc2VyIH0gZnJvbSAnQC90eXBlL3VzZXInO1xuXG5jb25zdCBMb2dpblBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBsb2dpbiB9ID0gdXNlQXV0aCgpO1xuXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSByb3V0ZXIucXVlcnkuc3VjY2VzcztcbiAgXG4gIGNvbnN0IHsgYXBpUmVzcG9uc2UsIGNhbGwgfSA9IHVzZUFwaTxTaWduSW5SZXBvbnNlPigpO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAobmFtZSA9PT0gJ2VtYWlsJykge1xuICAgICAgc2V0RW1haWwodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgc2V0UGFzc3dvcmQodmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWxsKFNJR05fSU4sICdQT1NUJywgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhcGlSZXNwb25zZTtcblxuICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3NmdWwgc2lnbi1pbiBoZXJlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgZXJyb3IgY2FzZSBoZXJlXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIEhhbmRsZSBlcnJvciBjYXNlIGhlcmVcbiAgICB9XG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdy05NiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBwLThcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNlwiPlNpZ24gaW4gdG8geW91ciBhY2NvdW50PC9oMj5cbiAgICAgICAge3N1Y2Nlc3NNZXNzYWdlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTIwMCB0ZXh0LWdyZWVuLTgwMCBwLTQgbWItNFwiPlxuICAgICAgICAgICAgUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwhIFlvdSBjYW4gbm93IGxvZyBpbi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7YXBpUmVzcG9uc2UuZXJyb3IgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTIwMCB0ZXh0LXJlZC04MDAgcC00IG1iLTRcIj5cbiAgICAgICAgICAgIFBsZWFzZSBFbnRlciBhIHZhbGllZCBlbWFpbC9wYXNzb3dyZFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTG9naW59PlxuICAgICAgICAgIDxDdXN0b21lSW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q3VzdG9tZUlucHV0XG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8TGluayBocmVmPVwiL3JlZ2lzdHJhdGlvblwiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5DcmVhdGUgb25lPC9MaW5rPi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJDdXN0b21lSW5wdXQiLCJ1c2VSb3V0ZXIiLCJ1c2VBcGkiLCJTSUdOX0lOIiwidXNlQXV0aCIsIkxvZ2luUGFnZSIsInJvdXRlciIsImxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzdWNjZXNzTWVzc2FnZSIsInF1ZXJ5Iiwic3VjY2VzcyIsImFwaVJlc3BvbnNlIiwiY2FsbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVMb2dpbiIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login/index.tsx\n"));

/***/ })

});