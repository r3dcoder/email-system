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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AuthenticatedLayout */ \"./src/pages/AuthenticatedLayout.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _context_auth_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/auth-provider */ \"./src/context/auth-provider.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const { googleAccessToken, user } = (0,_context_auth_provider__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const fetchData = async ()=>{\n        try {\n            var _user;\n            const response = await axios.get(\"http://localhost:8000/mail/list/\" + ((_user = user) === null || _user === void 0 ? void 0 : _user.email), {\n                headers: {\n                    Authorization: \"Bearer \".concat(googleAccessToken)\n                }\n            });\n            console.log(\"Response:\", response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"This content can only be accessed by authenticated users \",\n                    googleAccessToken,\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProfilePage, \"LDjzsMfdYziJnJPFTmqPrZk59Zg=\", false, function() {\n    return [\n        _context_auth_provider__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUMrQjtBQUNoQjtBQUNTO0FBRWxELE1BQU1JLGNBQXdCOztJQUMxQixNQUFNLEVBQUNDLGlCQUFpQixFQUFFQyxJQUFJLEVBQUMsR0FBR0gsK0RBQU9BO0lBRzNDLE1BQU1JLFlBQVk7UUFDaEIsSUFBSTtnQkFDa0VEO1lBQXBFLE1BQU1FLFdBQVcsTUFBTUMsTUFBTUMsR0FBRyxDQUFDLHVDQUFtQ0osUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNSyxLQUFLLEdBQUU7Z0JBQy9FQyxTQUFTO29CQUNQQyxlQUFlLFVBQTRCLE9BQWxCUjtnQkFDM0I7WUFDRjtZQUVBUyxRQUFRQyxHQUFHLENBQUMsYUFBYVAsU0FBU1EsSUFBSTtRQUN4QyxFQUFFLE9BQU9DLE9BQU87WUFDZEgsUUFBUUcsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUNFLHFCQUNJLDhEQUFDaEIsNERBQW1CQTs7MEJBQ2hCLDhEQUFDQywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDZ0I7O29CQUFJO29CQUEwRGI7b0JBQWtCOzs7Ozs7Ozs7Ozs7O0FBRzdGO0dBdkJNRDs7UUFDZ0NELDJEQUFPQTs7O0tBRHZDQztBQTJCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZmlsZS9pbmRleC50c3g/ZDU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF1dGhlbnRpY2F0ZWRMYXlvdXQgZnJvbSAnLi4vQXV0aGVudGljYXRlZExheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvY29udGV4dC9hdXRoLXByb3ZpZGVyJztcblxuY29uc3QgUHJvZmlsZVBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHtnb29nbGVBY2Nlc3NUb2tlbiwgdXNlcn0gPSB1c2VBdXRoKCk7XG5cblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvbWFpbC9saXN0LycrdXNlcj8uZW1haWwsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnb29nbGVBY2Nlc3NUb2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZTonLCByZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoZW50aWNhdGVkTGF5b3V0PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPGRpdj5UaGlzIGNvbnRlbnQgY2FuIG9ubHkgYmUgYWNjZXNzZWQgYnkgYXV0aGVudGljYXRlZCB1c2VycyB7Z29vZ2xlQWNjZXNzVG9rZW59LjwvZGl2PlxuICAgICAgICA8L0F1dGhlbnRpY2F0ZWRMYXlvdXQ+XG4gICAgKTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF1dGhlbnRpY2F0ZWRMYXlvdXQiLCJIZWFkZXIiLCJ1c2VBdXRoIiwiUHJvZmlsZVBhZ2UiLCJnb29nbGVBY2Nlc3NUb2tlbiIsInVzZXIiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwiZW1haWwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/profile/index.tsx\n"));

/***/ })

});