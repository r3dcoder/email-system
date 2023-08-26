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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Select */ \"./src/components/Select.tsx\");\n/* harmony import */ var _CustomInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CustomInput */ \"./src/components/CustomInput.tsx\");\n/* harmony import */ var _utils_useApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/useApi */ \"./src/utils/useApi.ts\");\n/* harmony import */ var _utils_api_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/api-urls */ \"./src/utils/api-urls.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_vallidation_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/vallidation-utils */ \"./src/utils/vallidation-utils.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst RegistrationForm = ()=>{\n    _s();\n    const [passwordMatchError, setPasswordMatchError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { apiResponse, call } = (0,_utils_useApi__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        email: \"\",\n        gender: \"male\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleInputChange = (event)=>{\n        const { name, value } = event.target;\n        console.log(name, value);\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n        if (name === \"confirmPassword\") {\n            if (value !== formData.password) {\n                setPasswordMatchError(\"Passwords don't match\");\n            } else {\n                setPasswordMatchError(\"\");\n            }\n        }\n    };\n    const handleSubmit = async ()=>{\n        const errors = (0,_utils_vallidation_utils__WEBPACK_IMPORTED_MODULE_8__.validateForm)(formData, validationSchema);\n        if (Object.keys(errors).length === 0) {\n        // Perform registration logic here\n        // Redirect to login page with success message\n        } else {\n            setValidationErrors(errors);\n        }\n        try {\n            // Perform registration logic here\n            const registrationUrl = _utils_api_urls__WEBPACK_IMPORTED_MODULE_6__.REGISTRATION;\n            const response = await call(registrationUrl, \"POST\", {\n                firstName: formData.firstName,\n                lastName: formData.lastName,\n                email: formData.email,\n                gender: formData.gender,\n                password: formData.password\n            });\n            console.log(\".....................\", response);\n            router.push({\n                pathname: \"/login\",\n                query: {\n                    success: true\n                }\n            });\n        } catch (error) {\n            console.error(\"Registration failed:\", error);\n        // Handle error, show an error message\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-auto w-full md:max-w-[450px] bg-white rounded-lg shadow-lg p-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-semibold mb-6\",\n                    children: \"Create an Account\"\n                }, void 0, false, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, undefined),\n                formData.gender,\n                \"--\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"First Name\",\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"firstName\",\n                            placeholder: \"Enter your first name\",\n                            value: formData.firstName,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Last Name\",\n                            type: \"text\",\n                            id: \"name\",\n                            name: \"lastName\",\n                            placeholder: \"Enter your last name\",\n                            value: formData.lastName,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Email\",\n                            type: \"email\",\n                            id: \"email\",\n                            name: \"email\",\n                            placeholder: \"Enter your email\",\n                            value: formData.email,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Select__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"Gender\",\n                            name: \"gender\",\n                            value: formData.gender,\n                            options: [\n                                {\n                                    value: \"male\",\n                                    label: \"Male\"\n                                },\n                                {\n                                    value: \"female\",\n                                    label: \"Female\"\n                                },\n                                {\n                                    value: \"other\",\n                                    label: \"Other\"\n                                }\n                            ],\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Password\",\n                            type: \"password\",\n                            id: \"password\",\n                            name: \"password\",\n                            placeholder: \"Enter your password\",\n                            value: formData.password,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            label: \"Confirm Password\",\n                            type: \"password\",\n                            id: \"confirmPassword\",\n                            name: \"confirmPassword\",\n                            placeholder: \"Confirm your password\",\n                            value: formData.confirmPassword,\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 21\n                        }, undefined),\n                        passwordMatchError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-500 text-sm mb-2\",\n                            children: passwordMatchError\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 25\n                        }, undefined),\n                        apiResponse.loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600\",\n                            children: \"Loading..\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 151,\n                            columnNumber: 29\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleSubmit(),\n                            className: \"w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 158,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-4 text-center text-sm text-gray-500\",\n                    children: [\n                        \"Already have an account? \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/login\",\n                            className: \"text-blue-500\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                            lineNumber: 167,\n                            columnNumber: 46\n                        }, undefined),\n                        \".\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n                    lineNumber: 166,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n            lineNumber: 84,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/components/form/RegistrationForm.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RegistrationForm, \"sIncE5cpsTCuNSwsiVtLVOGsO8I=\", false, function() {\n    return [\n        _utils_useApi__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = RegistrationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationForm);\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb3JtL1JlZ2lzdHJhdGlvbkZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDcUQ7QUFDeEI7QUFDRTtBQUNXO0FBQ047QUFFWTtBQUNSO0FBQ21DO0FBRTNFLE1BQU1TLG1CQUE2Qjs7SUFFL0IsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHViwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLEVBQUVXLFdBQVcsRUFBRUMsSUFBSSxFQUFFLEdBQUdSLHlEQUFNQTtJQUNwQyxNQUFNLENBQUNTLGtCQUFrQkMsb0JBQW9CLEdBQUdkLCtDQUFRQSxDQUFtQixDQUFDO0lBRTVFLE1BQU1lLFNBQVNULHNEQUFTQTtJQUV4QixNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDO1FBQ3JDa0IsV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLGlCQUFpQjtJQUNyQjtJQUdBLE1BQU1DLG9CQUFvQixDQUFDQztRQUN2QixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLE1BQU1HLE1BQU07UUFDcENDLFFBQVFDLEdBQUcsQ0FBQ0osTUFBTUM7UUFFbEJWLFlBQVksQ0FBQ2MsV0FBYztnQkFDdkIsR0FBR0EsUUFBUTtnQkFDWCxDQUFDTCxLQUFLLEVBQUVDO1lBQ1o7UUFFQSxJQUFJRCxTQUFTLG1CQUFtQjtZQUM1QixJQUFJQyxVQUFVWCxTQUFTTSxRQUFRLEVBQUU7Z0JBQzdCWixzQkFBc0I7WUFDMUIsT0FBTztnQkFDSEEsc0JBQXNCO1lBQzFCO1FBQ0o7SUFDSjtJQUVBLE1BQU1zQixlQUFlO1FBRWpCLE1BQU1DLFNBQVMxQixzRUFBWUEsQ0FBQ1MsVUFBVWtCO1FBQ3RDLElBQUlDLE9BQU9DLElBQUksQ0FBQ0gsUUFBUUksTUFBTSxLQUFLLEdBQUc7UUFDcEMsa0NBQWtDO1FBQ2xDLDhDQUE4QztRQUNoRCxPQUFPO1lBQ0x2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d2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9mb3JtL1JlZ2lzdHJhdGlvbkZvcm0udHN4PzZmMjEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vU2VsZWN0JztcbmltcG9ydCBDdXN0b21lSW5wdXQgZnJvbSAnLi4vQ3VzdG9tSW5wdXQnO1xuaW1wb3J0IHVzZUFwaSBmcm9tICdAL3V0aWxzL3VzZUFwaSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQC90eXBlL3VzZXInO1xuaW1wb3J0IHsgUkVHSVNUUkFUSU9OIH0gZnJvbSAnQC91dGlscy9hcGktdXJscyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JzLCB2YWxpZGF0ZUZvcm0gfSBmcm9tICdAL3V0aWxzL3ZhbGxpZGF0aW9uLXV0aWxzJztcblxuY29uc3QgUmVnaXN0cmF0aW9uRm9ybTogUmVhY3QuRkMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbcGFzc3dvcmRNYXRjaEVycm9yLCBzZXRQYXNzd29yZE1hdGNoRXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IHsgYXBpUmVzcG9uc2UsIGNhbGwgfSA9IHVzZUFwaTxVc2VyPigpO1xuICAgIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3JzLCBzZXRWYWxpZGF0aW9uRXJyb3JzXSA9IHVzZVN0YXRlPFZhbGlkYXRpb25FcnJvcnM+KHt9KTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBnZW5kZXI6ICdtYWxlJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICcnLFxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHZhbHVlKVxuXG4gICAgICAgIHNldEZvcm1EYXRhKChwcmV2RGF0YSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZEYXRhLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChuYW1lID09PSAnY29uZmlybVBhc3N3b3JkJykge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBmb3JtRGF0YS5wYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkTWF0Y2hFcnJvcihcIlBhc3N3b3JkcyBkb24ndCBtYXRjaFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmRNYXRjaEVycm9yKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZXJyb3JzID0gdmFsaWRhdGVGb3JtKGZvcm1EYXRhLCB2YWxpZGF0aW9uU2NoZW1hKTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gUGVyZm9ybSByZWdpc3RyYXRpb24gbG9naWMgaGVyZVxuICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIGxvZ2luIHBhZ2Ugd2l0aCBzdWNjZXNzIG1lc3NhZ2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRWYWxpZGF0aW9uRXJyb3JzKGVycm9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcblxuXG4gICAgICAgICAgICAvLyBQZXJmb3JtIHJlZ2lzdHJhdGlvbiBsb2dpYyBoZXJlXG4gICAgICAgICAgICBjb25zdCByZWdpc3RyYXRpb25VcmwgPSBSRUdJU1RSQVRJT047XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhbGwocmVnaXN0cmF0aW9uVXJsLCAnUE9TVCcsIHtcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGZvcm1EYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogZm9ybURhdGEubGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxuICAgICAgICAgICAgICAgIGdlbmRlcjogZm9ybURhdGEuZ2VuZGVyLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi5cIiwgcmVzcG9uc2UpXG4gICAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2xvZ2luXCIsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgc3VjY2VzczogdHJ1ZSB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlZ2lzdHJhdGlvbiBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yLCBzaG93IGFuIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdy1mdWxsIG1kOm1heC13LVs0NTBweF0gYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgcC04XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNlwiPkNyZWF0ZSBhbiBBY2NvdW50PC9oMj5cbiAgICAgICAgICAgICAgICB7Zm9ybURhdGEuZ2VuZGVyfS0tXG4gICAgICAgICAgICAgICAgPGRpdiAgPlxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGZpcnN0IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbGFzdCBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbWVJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkdlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5nZW5kZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ21hbGUnLCBsYWJlbDogJ01hbGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ2ZlbWFsZScsIGxhYmVsOiAnRmVtYWxlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdvdGhlcicsIGxhYmVsOiAnT3RoZXInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvbmZpcm1QYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICB7cGFzc3dvcmRNYXRjaEVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIG1iLTJcIj57cGFzc3dvcmRNYXRjaEVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpUmVzcG9uc2UubG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+U2lnbiBJbjwvTGluaz4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25Gb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiU2VsZWN0IiwiQ3VzdG9tZUlucHV0IiwidXNlQXBpIiwiUkVHSVNUUkFUSU9OIiwidXNlUm91dGVyIiwidmFsaWRhdGVGb3JtIiwiUmVnaXN0cmF0aW9uRm9ybSIsInBhc3N3b3JkTWF0Y2hFcnJvciIsInNldFBhc3N3b3JkTWF0Y2hFcnJvciIsImFwaVJlc3BvbnNlIiwiY2FsbCIsInZhbGlkYXRpb25FcnJvcnMiLCJzZXRWYWxpZGF0aW9uRXJyb3JzIiwicm91dGVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJnZW5kZXIiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwicHJldkRhdGEiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJlZ2lzdHJhdGlvblVybCIsInJlc3BvbnNlIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJzdWNjZXNzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImxhYmVsIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9wdGlvbnMiLCJwIiwibG9hZGluZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/form/RegistrationForm.tsx\n"));

/***/ }),

/***/ "./src/utils/vallidation-utils.ts":
/*!****************************************!*\
  !*** ./src/utils/vallidation-utils.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateForm: function() { return /* binding */ validateForm; }\n/* harmony export */ });\nfunction validateForm(formData, schema) {\n    const errors = {};\n    for(const field in schema){\n        const rules = schema[field];\n        for(const rule in rules){\n            var _formData_field;\n            if (rule === \"required\" && rules[rule] && !formData[field]) {\n                errors[field] = \"\".concat(field, \" is required\");\n            }\n            if (rule === \"minLength\" && ((_formData_field = formData[field]) === null || _formData_field === void 0 ? void 0 : _formData_field.length) < rules[rule]) {\n                errors[field] = \"\".concat(field, \" must be at least \").concat(rules[rule], \" characters\");\n            }\n        // Add more validation rules handling here\n        }\n    }\n    return errors;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdmFsbGlkYXRpb24tdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7OztBQVlTLFNBQVNBLGFBQWFDLFFBQWEsRUFBRUMsTUFBd0I7SUFDbEUsTUFBTUMsU0FBMkIsQ0FBQztJQUVsQyxJQUFLLE1BQU1DLFNBQVNGLE9BQVE7UUFDMUIsTUFBTUcsUUFBUUgsTUFBTSxDQUFDRSxNQUFNO1FBQzNCLElBQUssTUFBTUUsUUFBUUQsTUFBTztnQkFJSUo7WUFINUIsSUFBSUssU0FBUyxjQUFjRCxLQUFLLENBQUNDLEtBQUssSUFBSSxDQUFDTCxRQUFRLENBQUNHLE1BQU0sRUFBRTtnQkFDMURELE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLEdBQVMsT0FBTkEsT0FBTTtZQUMzQjtZQUNBLElBQUlFLFNBQVMsZUFBZUwsRUFBQUEsa0JBQUFBLFFBQVEsQ0FBQ0csTUFBTSxjQUFmSCxzQ0FBQUEsZ0JBQWlCTSxNQUFNLElBQUdGLEtBQUssQ0FBQ0MsS0FBSyxFQUFHO2dCQUNsRUgsTUFBTSxDQUFDQyxNQUFNLEdBQUcsR0FBNkJDLE9BQTFCRCxPQUFNLHNCQUFnQyxPQUFaQyxLQUFLLENBQUNDLEtBQUssRUFBQztZQUMzRDtRQUNBLDBDQUEwQztRQUM1QztJQUNGO0lBRUEsT0FBT0g7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvdmFsbGlkYXRpb24tdXRpbHMudHM/NzhmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25TY2hlbWEge1xuICAgIFtrZXk6IHN0cmluZ106IHtcbiAgICAgIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgICAgIG1pbkxlbmd0aD86IG51bWJlcjtcbiAgICAgIC8vIEFkZCBtb3JlIHZhbGlkYXRpb24gcnVsZXMgYXMgbmVlZGVkXG4gICAgfTtcbiAgfVxuICBcbiAgZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oZm9ybURhdGE6IGFueSwgc2NoZW1hOiBWYWxpZGF0aW9uU2NoZW1hKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge307XG4gIFxuICAgIGZvciAoY29uc3QgZmllbGQgaW4gc2NoZW1hKSB7XG4gICAgICBjb25zdCBydWxlcyA9IHNjaGVtYVtmaWVsZF07XG4gICAgICBmb3IgKGNvbnN0IHJ1bGUgaW4gcnVsZXMpIHtcbiAgICAgICAgaWYgKHJ1bGUgPT09ICdyZXF1aXJlZCcgJiYgcnVsZXNbcnVsZV0gJiYgIWZvcm1EYXRhW2ZpZWxkXSkge1xuICAgICAgICAgIGVycm9yc1tmaWVsZF0gPSBgJHtmaWVsZH0gaXMgcmVxdWlyZWRgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydWxlID09PSAnbWluTGVuZ3RoJyAmJiBmb3JtRGF0YVtmaWVsZF0/Lmxlbmd0aCA8IHJ1bGVzW3J1bGVdISkge1xuICAgICAgICAgIGVycm9yc1tmaWVsZF0gPSBgJHtmaWVsZH0gbXVzdCBiZSBhdCBsZWFzdCAke3J1bGVzW3J1bGVdfSBjaGFyYWN0ZXJzYDtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgbW9yZSB2YWxpZGF0aW9uIHJ1bGVzIGhhbmRsaW5nIGhlcmVcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cbiAgIl0sIm5hbWVzIjpbInZhbGlkYXRlRm9ybSIsImZvcm1EYXRhIiwic2NoZW1hIiwiZXJyb3JzIiwiZmllbGQiLCJydWxlcyIsInJ1bGUiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/vallidation-utils.ts\n"));

/***/ })

});