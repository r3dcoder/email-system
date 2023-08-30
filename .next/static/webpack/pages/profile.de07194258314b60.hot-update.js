"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./src/pages/profile/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/profile/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AuthenticatedLayout */ \"./src/pages/AuthenticatedLayout.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _context_auth_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/auth-provider */ \"./src/context/auth-provider.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_ThredList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ThredList */ \"./src/components/ThredList.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const { googleAccessToken, user } = (0,_context_auth_provider__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const [threads, setThreads] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        try {\n            var _user;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/api/mail/list/\" + ((_user = user) === null || _user === void 0 ? void 0 : _user.email), {\n                headers: {\n                    Authorization: \"Bearer \".concat(googleAccessToken)\n                }\n            });\n            console.log(\"Response:\", response.data);\n            setThread(response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>fetchData(),\n                children: [\n                    \"This content can only be accessed by authenticated users \",\n                    googleAccessToken,\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto py-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-semibold mb-4\",\n                        children: \"Thread List\"\n                    }, void 0, false, {\n                        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ThredList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        threads: threads\n                    }, void 0, false, {\n                        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProfilePage, \"Bn/2HCBNBlzVicuw8gAcrcYmTpk=\", false, function() {\n    return [\n        _context_auth_provider__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ007QUFDaEI7QUFDUztBQUN4QjtBQUNzQjtBQUdoRCxNQUFNUSxjQUF3Qjs7SUFDMUIsTUFBTSxFQUFFQyxpQkFBaUIsRUFBRUMsSUFBSSxFQUFFLEdBQUdMLCtEQUFPQTtJQUMzQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBO0lBR3RDRCxnREFBU0EsQ0FBQztRQUNOWTtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1BLFlBQVk7UUFDZCxJQUFJO2dCQUMwRUg7WUFBMUUsTUFBTUksV0FBVyxNQUFNUixpREFBUyxDQUFDLDJDQUF5Q0ksUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNTSxLQUFLLEdBQUU7Z0JBQ25GQyxTQUFTO29CQUNMQyxlQUFlLFVBQTRCLE9BQWxCVDtnQkFDN0I7WUFDSjtZQUVBVSxRQUFRQyxHQUFHLENBQUMsYUFBYU4sU0FBU08sSUFBSTtZQUN0Q0MsVUFBVVIsU0FBU08sSUFBSTtRQUMzQixFQUFFLE9BQU9FLE9BQU87WUFDWkosUUFBUUksS0FBSyxDQUFDLHdCQUF3QkE7UUFDMUM7SUFDSjtJQUNBLHFCQUNJLDhEQUFDcEIsNERBQW1CQTs7MEJBQ2hCLDhEQUFDQywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDb0I7Z0JBQUlDLFNBQVMsSUFBTVo7O29CQUFhO29CQUEwREo7b0JBQWtCOzs7Ozs7OzBCQUM3Ryw4REFBQ2U7Z0JBQUlFLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBOEI7Ozs7OztrQ0FDNUMsOERBQUNuQiw2REFBVUE7d0JBQUNJLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckM7R0FqQ01IOztRQUNrQ0gsMkRBQU9BOzs7S0FEekNHO0FBcUNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9maWxlL2luZGV4LnRzeD9kNTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF1dGhlbnRpY2F0ZWRMYXlvdXQgZnJvbSAnLi4vQXV0aGVudGljYXRlZExheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvY29udGV4dC9hdXRoLXByb3ZpZGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgVGhyZWFkTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvVGhyZWRMaXN0JztcbmltcG9ydCB7IFRocmVhZCB9IGZyb20gJ0AvdHlwZS90aHJlYWQnO1xuXG5jb25zdCBQcm9maWxlUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBnb29nbGVBY2Nlc3NUb2tlbiwgdXNlciB9ID0gdXNlQXV0aCgpO1xuICAgIGNvbnN0IFt0aHJlYWRzLCBzZXRUaHJlYWRzXSA9IHVzZVN0YXRlPFRocmVhZFtdPigpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKVxuICAgIH0sIFtdKVxuICAgIFxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL21haWwvbGlzdC8nICsgdXNlcj8uZW1haWwsIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnb29nbGVBY2Nlc3NUb2tlbn1gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlOicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgc2V0VGhyZWFkKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoZW50aWNhdGVkTGF5b3V0PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBmZXRjaERhdGEoKX0+VGhpcyBjb250ZW50IGNhbiBvbmx5IGJlIGFjY2Vzc2VkIGJ5IGF1dGhlbnRpY2F0ZWQgdXNlcnMge2dvb2dsZUFjY2Vzc1Rva2VufS48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktOFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTRcIj5UaHJlYWQgTGlzdDwvaDE+XG4gICAgICAgICAgICAgICAgPFRocmVhZExpc3QgdGhyZWFkcz17dGhyZWFkc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0F1dGhlbnRpY2F0ZWRMYXlvdXQ+XG4gICAgKTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXV0aGVudGljYXRlZExheW91dCIsIkhlYWRlciIsInVzZUF1dGgiLCJheGlvcyIsIlRocmVhZExpc3QiLCJQcm9maWxlUGFnZSIsImdvb2dsZUFjY2Vzc1Rva2VuIiwidXNlciIsInRocmVhZHMiLCJzZXRUaHJlYWRzIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJlbWFpbCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzZXRUaHJlYWQiLCJlcnJvciIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/profile/index.tsx\n"));

/***/ })

});