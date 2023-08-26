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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CustomInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CustomInput */ \"./src/components/CustomInput.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_useApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/useApi */ \"./src/utils/useApi.ts\");\n/* harmony import */ var _utils_api_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/api-urls */ \"./src/utils/api-urls.ts\");\n/* harmony import */ var _context_auth_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/auth-provider */ \"./src/context/auth-provider.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LoginPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { login } = (0,_context_auth_provider__WEBPACK_IMPORTED_MODULE_7__.useAuth)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const successMessage = router.query.success;\n    const { apiResponse, call } = (0,_utils_useApi__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        if (name === \"email\") {\n            setEmail(value);\n        } else if (name === \"password\") {\n            setPassword(value);\n        }\n    };\n    const handleLogin = async (event)=>{\n        event.preventDefault();\n        try {\n            const a = call(_utils_api_urls__WEBPACK_IMPORTED_MODULE_6__.SIGN_IN, \"POST\", {\n                email,\n                password\n            }).then((response1)=>{\n                console.log(\"response\", response1);\n            });\n            console.log(\"response\", response);\n        } catch (error) {\n        // Handle error case here\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-auto w-96 bg-white rounded-lg shadow-lg p-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-semibold mb-6\",\n                    children: \"Sign in to your account\"\n                }, void 0, false, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined),\n                successMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-green-200 text-green-800 p-4 mb-4\",\n                    children: \"Registration successful! You can now log in.\"\n                }, void 0, false, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined),\n                apiResponse.error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-red-200 text-red-800 p-4 mb-4\",\n                    children: \"Please Enter a valied email/passowrd\"\n                }, void 0, false, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleLogin,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"Email\",\n                            type: \"email\",\n                            id: \"email\",\n                            name: \"email\",\n                            placeholder: \"Enter your email\",\n                            value: email,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"Password\",\n                            type: \"password\",\n                            id: \"password\",\n                            name: \"password\",\n                            placeholder: \"Enter your password\",\n                            value: password,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-4 text-center text-sm text-gray-500\",\n                    children: [\n                        \"Don't have an account? \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/registration\",\n                            className: \"text-blue-500\",\n                            children: \"Create one\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 34\n                        }, undefined),\n                        \".\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/login/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"X1N3cRtJwMy+iKH6oRKa0SilaAY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _context_auth_provider__WEBPACK_IMPORTED_MODULE_7__.useAuth,\n        _utils_useApi__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4vaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNxRDtBQUN4QjtBQUN1QjtBQUNaO0FBQ0o7QUFDTztBQUNPO0FBR2xELE1BQU1RLFlBQXNCOztJQUMxQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxLQUFLLEVBQUUsR0FBR0gsK0RBQU9BO0lBRXpCLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFDekMsTUFBTWMsaUJBQWlCTixPQUFPTyxLQUFLLENBQUNDLE9BQU87SUFFM0MsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRSxHQUFHZCx5REFBTUE7SUFFcEMsTUFBTWUsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsTUFBTUcsTUFBTTtRQUNwQyxJQUFJRixTQUFTLFNBQVM7WUFDcEJWLFNBQVNXO1FBQ1gsT0FBTyxJQUFJRCxTQUFTLFlBQVk7WUFDOUJSLFlBQVlTO1FBQ2Q7SUFDRjtJQUVBLE1BQU1FLGNBQWMsT0FBT0o7UUFDekJBLE1BQU1LLGNBQWM7UUFDcEIsSUFBSTtZQUNILE1BQU1DLElBQUtSLEtBQUtiLG9EQUFPQSxFQUFFLFFBQVE7Z0JBQUVLO2dCQUFPRTtZQUFTLEdBQUdlLElBQUksQ0FBQyxDQUFDQztnQkFDekRDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRjtZQUMxQjtZQUNBQyxRQUFRQyxHQUFHLENBQUMsWUFBWUY7UUFHMUIsRUFBRSxPQUFPRyxPQUFPO1FBQ2QseUJBQXlCO1FBQzNCO0lBRUY7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUE4Qjs7Ozs7O2dCQUMzQ25CLGdDQUNDLDhEQUFDa0I7b0JBQUlDLFdBQVU7OEJBQXVDOzs7Ozs7Z0JBS3ZEaEIsWUFBWWMsS0FBSyxrQkFDaEIsOERBQUNDO29CQUFJQyxXQUFVOzhCQUFtQzs7Ozs7OzhCQUlwRCw4REFBQ0U7b0JBQUtDLFVBQVVaOztzQ0FDZCw4REFBQ3RCLCtEQUFZQTs0QkFDWG1DLE9BQU07NEJBQ05DLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0hsQixNQUFLOzRCQUNMbUIsYUFBWTs0QkFDWmxCLE9BQU9aOzRCQUNQK0IsVUFBVXRCOzs7Ozs7c0NBRVosOERBQUNqQiwrREFBWUE7NEJBQ1htQyxPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIbEIsTUFBSzs0QkFDTG1CLGFBQVk7NEJBQ1psQixPQUFPVjs0QkFDUDZCLFVBQVV0Qjs7Ozs7O3NDQUVaLDhEQUFDdUI7NEJBQ0NKLE1BQUs7NEJBQ0xMLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs4QkFJSCw4REFBQ1U7b0JBQUVWLFdBQVU7O3dCQUF5QztzQ0FDN0IsOERBQUNoQyxrREFBSUE7NEJBQUMyQyxNQUFLOzRCQUFnQlgsV0FBVTtzQ0FBZ0I7Ozs7Ozt3QkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RztHQWpGTTFCOztRQUNXSixrREFBU0E7UUFDTkcsMkRBQU9BO1FBTUtGLHFEQUFNQTs7O0tBUmhDRztBQW1GTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW4vaW5kZXgudHN4PzkyNTIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBDdXN0b21lSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL0N1c3RvbUlucHV0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB1c2VBcGkgZnJvbSAnQC91dGlscy91c2VBcGknO1xuaW1wb3J0IHsgU0lHTl9JTiB9IGZyb20gJ0AvdXRpbHMvYXBpLXVybHMnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvY29udGV4dC9hdXRoLXByb3ZpZGVyJztcbmltcG9ydCB7IFNpZ25JblJlcG9uc2UsIFVzZXIgfSBmcm9tICdAL3R5cGUvdXNlcic7XG5cbmNvbnN0IExvZ2luUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGxvZ2luIH0gPSB1c2VBdXRoKCk7XG5cbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IHJvdXRlci5xdWVyeS5zdWNjZXNzO1xuICBcbiAgY29uc3QgeyBhcGlSZXNwb25zZSwgY2FsbCB9ID0gdXNlQXBpPFNpZ25JblJlcG9uc2U+KCk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChuYW1lID09PSAnZW1haWwnKSB7XG4gICAgICBzZXRFbWFpbCh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAncGFzc3dvcmQnKSB7XG4gICAgICBzZXRQYXNzd29yZCh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgIGNvbnN0IGEgPSAgY2FsbChTSUdOX0lOLCAnUE9TVCcsIHsgZW1haWwsIHBhc3N3b3JkIH0pLnRoZW4oKHJlc3BvbnNlKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKVxuXG4gIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBIYW5kbGUgZXJyb3IgY2FzZSBoZXJlXG4gICAgfVxuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW4gYmctZ3JheS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHctOTYgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgcC04XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTZcIj5TaWduIGluIHRvIHlvdXIgYWNjb3VudDwvaDI+XG4gICAgICAgIHtzdWNjZXNzTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi0yMDAgdGV4dC1ncmVlbi04MDAgcC00IG1iLTRcIj5cbiAgICAgICAgICAgIFJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsISBZb3UgY2FuIG5vdyBsb2cgaW4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge2FwaVJlc3BvbnNlLmVycm9yICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC0yMDAgdGV4dC1yZWQtODAwIHAtNCBtYi00XCI+XG4gICAgICAgICAgICBQbGVhc2UgRW50ZXIgYSB2YWxpZWQgZW1haWwvcGFzc293cmRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgICA8Q3VzdG9tZUlucHV0XG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEN1c3RvbWVJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gPExpbmsgaHJlZj1cIi9yZWdpc3RyYXRpb25cIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+Q3JlYXRlIG9uZTwvTGluaz4uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiQ3VzdG9tZUlucHV0IiwidXNlUm91dGVyIiwidXNlQXBpIiwiU0lHTl9JTiIsInVzZUF1dGgiLCJMb2dpblBhZ2UiLCJyb3V0ZXIiLCJsb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic3VjY2Vzc01lc3NhZ2UiLCJxdWVyeSIsInN1Y2Nlc3MiLCJhcGlSZXNwb25zZSIsImNhbGwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlTG9naW4iLCJwcmV2ZW50RGVmYXVsdCIsImEiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login/index.tsx\n"));

/***/ })

});