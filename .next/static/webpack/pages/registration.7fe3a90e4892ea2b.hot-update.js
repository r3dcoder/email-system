"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/registration",{

/***/ "./src/components/form/RegistrationForm.tsx":
/*!**************************************************!*\
  !*** ./src/components/form/RegistrationForm.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Select */ \"./src/components/Select.tsx\");\n/* harmony import */ var _CustomInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CustomInput */ \"./src/components/CustomInput.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst RegistrationForm = ()=>{\n    _s();\n    const [passwordMatchError, setPasswordMatchError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [keys, setKyes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        email: \"\",\n        gender: \"male\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        setKyes(keys + 1);\n        console.log(\"name\");\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n        if (name === \"confirmPassword\") {\n            if (value !== formData.password) {\n                setPasswordMatchError(\"Passwords don't match\");\n            } else {\n                setPasswordMatchError(\"\");\n            }\n        }\n    };\n    const handleSubmit = ()=>{\n        console.log(\"clicked\");\n        alert(\"Passwords don't match!\");\n        if (formData.password !== formData.confirmPassword) {\n            alert(\"Passwords don't match!\");\n        } else {\n        // Perform registration logic here\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-auto w-full md:max-w-[450px] bg-white rounded-lg shadow-lg p-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-semibold mb-6\",\n                    children: \"Create an Account\"\n                }, void 0, false, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, undefined),\n                formData.gender,\n                \"--\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"First Name\",\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"firstName\",\n                            placeholder: \"Enter your first name\",\n                            value: formData.firstName,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Last Name\",\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"lastName\",\n                            placeholder: \"Enter your last name\",\n                            value: formData.lastName,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Email\",\n                            type: \"email\",\n                            id: \"email\",\n                            name: \"email\",\n                            placeholder: \"Enter your email\",\n                            value: formData.email,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Select__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"Gender\",\n                            name: \"gender\",\n                            value: formData.gender,\n                            options: [\n                                {\n                                    value: \"male\",\n                                    label: \"Male\"\n                                },\n                                {\n                                    value: \"female\",\n                                    label: \"Female\"\n                                },\n                                {\n                                    value: \"other\",\n                                    label: \"Other\"\n                                }\n                            ],\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Password\",\n                            type: \"password\",\n                            id: \"password\",\n                            name: \"password\",\n                            placeholder: \"Enter your password\",\n                            value: formData.password,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Confirm Password\",\n                            type: \"password\",\n                            id: \"confirmPassword\",\n                            name: \"confirmPassword\",\n                            placeholder: \"Confirm your password\",\n                            value: formData.confirmPassword,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 21\n                        }, undefined),\n                        passwordMatchError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-500 text-sm mb-2\",\n                            children: passwordMatchError\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleSubmit(),\n                            className: \"w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600\",\n                            children: \"Register..\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-4 text-center text-sm text-gray-500\",\n                    children: [\n                        \"Already have an account? \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/login\",\n                            className: \"text-blue-500\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 46\n                        }, undefined),\n                        \".\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, undefined)\n    }, keys, false, {\n        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RegistrationForm, \"gEg0ATymxZQz4adabFpp2qe81gk=\");\n_c = RegistrationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationForm);\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb3JtL1JlZ2lzdHJhdGlvbkZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ3hCO0FBQ0U7QUFDVztBQUUxQyxNQUFNSyxtQkFBNkI7O0lBRS9CLE1BQU0sQ0FBQ0Msb0JBQW9CQyxzQkFBc0IsR0FBR04sK0NBQVFBLENBQUM7SUFDN0QsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztRQUNyQ1csV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLGlCQUFpQjtJQUNyQjtJQUdBLE1BQU1DLG9CQUFvQixDQUFDQztRQUN2QixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLE1BQU1HLE1BQU07UUFDcENiLFFBQVFELE9BQUs7UUFDYmUsUUFBUUMsR0FBRyxDQUFDO1FBRVpiLFlBQVksQ0FBQ2MsV0FBYztnQkFDdkIsR0FBR0EsUUFBUTtnQkFDWCxDQUFDTCxLQUFLLEVBQUVDO1lBQ1o7UUFFQSxJQUFJRCxTQUFTLG1CQUFtQjtZQUM1QixJQUFJQyxVQUFVWCxTQUFTTSxRQUFRLEVBQUU7Z0JBQzdCVCxzQkFBc0I7WUFDMUIsT0FBTztnQkFDSEEsc0JBQXNCO1lBQzFCO1FBQ0o7SUFDSjtJQUVBLE1BQU1tQixlQUFlO1FBQ2pCSCxRQUFRQyxHQUFHLENBQUM7UUFDWkcsTUFBTTtRQUVMLElBQUlqQixTQUFTTSxRQUFRLEtBQUtOLFNBQVNPLGVBQWUsRUFBRTtZQUNqRFUsTUFBTTtRQUNWLE9BQU87UUFDSCxrQ0FBa0M7UUFDdEM7SUFDSjtJQUNDLHFCQUNHLDhEQUFDQztRQUFlQyxXQUFVO2tCQUN0Qiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzhCQUE4Qjs7Ozs7O2dCQUMzQ25CLFNBQVNLLE1BQU07Z0JBQUM7OEJBQ2pCLDhEQUFDYTs7c0NBQ0csOERBQUN4QixvREFBWUE7NEJBQ1QyQixPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIYixNQUFLOzRCQUNMYyxhQUFZOzRCQUNaYixPQUFPWCxTQUFTRSxTQUFTOzRCQUN6QnVCLFVBQVVqQjs7Ozs7O3NDQUVkLDhEQUFDZCxvREFBWUE7NEJBQ1QyQixPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIYixNQUFLOzRCQUNMYyxhQUFZOzRCQUNaYixPQUFPWCxTQUFTRyxRQUFROzRCQUN4QnNCLFVBQVVqQjs7Ozs7O3NDQUVkLDhEQUFDZCxvREFBWUE7NEJBQ1QyQixPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIYixNQUFLOzRCQUNMYyxhQUFZOzRCQUNaYixPQUFPWCxTQUFTSSxLQUFLOzRCQUNyQnFCLFVBQVVqQjs7Ozs7O3NDQUdkLDhEQUFDZiwrQ0FBTUE7NEJBQ0g0QixPQUFNOzRCQUNOWCxNQUFLOzRCQUNMQyxPQUFPWCxTQUFTSyxNQUFNOzRCQUN0QnFCLFNBQVM7Z0NBQ0w7b0NBQUVmLE9BQU87b0NBQVFVLE9BQU87Z0NBQU87Z0NBQy9CO29DQUFFVixPQUFPO29DQUFVVSxPQUFPO2dDQUFTO2dDQUNuQztvQ0FBRVYsT0FBTztvQ0FBU1UsT0FBTztnQ0FBUTs2QkFDcEM7NEJBQ0RJLFVBQVVqQjs7Ozs7O3NDQUVkLDhEQUFDZCxvREFBWUE7NEJBQ1QyQixPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIYixNQUFLOzRCQUNMYyxhQUFZOzRCQUNaYixPQUFPWCxTQUFTTSxRQUFROzRCQUN4Qm1CLFVBQVVqQjs7Ozs7O3NDQUVkLDhEQUFDZCxvREFBWUE7NEJBQ1QyQixPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIYixNQUFLOzRCQUNMYyxhQUFZOzRCQUNaYixPQUFPWCxTQUFTTyxlQUFlOzRCQUMvQmtCLFVBQVVqQjs7Ozs7O3dCQUdiWixvQ0FDRyw4REFBQytCOzRCQUFFUixXQUFVO3NDQUE2QnZCOzs7Ozs7c0NBRTlDLDhEQUFDZ0M7NEJBQ0VDLFNBQVMsSUFBSWI7NEJBQ1hHLFdBQVU7c0NBQ2Q7Ozs7Ozs7Ozs7Ozs4QkFJTCw4REFBQ1E7b0JBQUVSLFdBQVU7O3dCQUF5QztzQ0FDekIsOERBQUMzQixrREFBSUE7NEJBQUNzQyxNQUFLOzRCQUFTWCxXQUFVO3NDQUFnQjs7Ozs7O3dCQUFjOzs7Ozs7Ozs7Ozs7O09BMUV2RnJCOzs7OztBQStFbEI7R0E1SE1IO0tBQUFBO0FBOEhOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybS9SZWdpc3RyYXRpb25Gb3JtLnRzeD82ZjIxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL1NlbGVjdCc7XG5pbXBvcnQgQ3VzdG9tZUlucHV0IGZyb20gJy4uL0N1c3RvbUlucHV0JztcbiBcbmNvbnN0IFJlZ2lzdHJhdGlvbkZvcm06IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3Bhc3N3b3JkTWF0Y2hFcnJvciwgc2V0UGFzc3dvcmRNYXRjaEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBba2V5cywgc2V0S3llc10gPSB1c2VTdGF0ZSgxKTtcblxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgZ2VuZGVyOiAnbWFsZScsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgICB9KTtcblxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBzZXRLeWVzKGtleXMrMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmFtZVwiKVxuXG4gICAgICAgIHNldEZvcm1EYXRhKChwcmV2RGF0YSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZEYXRhLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChuYW1lID09PSAnY29uZmlybVBhc3N3b3JkJykge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBmb3JtRGF0YS5wYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkTWF0Y2hFcnJvcihcIlBhc3N3b3JkcyBkb24ndCBtYXRjaFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmRNYXRjaEVycm9yKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKVxuICAgICAgICBhbGVydChcIlBhc3N3b3JkcyBkb24ndCBtYXRjaCFcIik7XG5cbiAgICAgICAgIGlmIChmb3JtRGF0YS5wYXNzd29yZCAhPT0gZm9ybURhdGEuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICBhbGVydChcIlBhc3N3b3JkcyBkb24ndCBtYXRjaCFcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBQZXJmb3JtIHJlZ2lzdHJhdGlvbiBsb2dpYyBoZXJlXG4gICAgICAgIH1cbiAgICB9XG4gICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtrZXlzfSBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIGJnLWdyYXktMTAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byB3LWZ1bGwgbWQ6bWF4LXctWzQ1MHB4XSBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBwLThcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi02XCI+Q3JlYXRlIGFuIEFjY291bnQ8L2gyPlxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YS5nZW5kZXJ9LS1cbiAgICAgICAgICAgICAgICA8ZGl2ICA+XG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21lSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZmlyc3QgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBsYXN0IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR2VuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmdlbmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnbWFsZScsIGxhYmVsOiAnTWFsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnZmVtYWxlJywgbGFiZWw6ICdGZW1hbGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ290aGVyJywgbGFiZWw6ICdPdGhlcicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21lSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21lSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0geW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHtwYXNzd29yZE1hdGNoRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gbWItMlwiPntwYXNzd29yZE1hdGNoRXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5oYW5kbGVTdWJtaXQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyLi5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+U2lnbiBJbjwvTGluaz4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25Gb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiU2VsZWN0IiwiQ3VzdG9tZUlucHV0IiwiUmVnaXN0cmF0aW9uRm9ybSIsInBhc3N3b3JkTWF0Y2hFcnJvciIsInNldFBhc3N3b3JkTWF0Y2hFcnJvciIsImtleXMiLCJzZXRLeWVzIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJnZW5kZXIiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwicHJldkRhdGEiLCJoYW5kbGVTdWJtaXQiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibGFiZWwiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/form/RegistrationForm.tsx\n"));

/***/ })

});