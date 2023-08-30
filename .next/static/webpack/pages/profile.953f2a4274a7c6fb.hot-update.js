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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AuthenticatedLayout */ \"./src/pages/AuthenticatedLayout.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _context_auth_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/auth-provider */ \"./src/context/auth-provider.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_ThredList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ThredList */ \"./src/components/ThredList.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProfilePage = ()=>{\n    _s();\n    const { googleAccessToken, user } = (0,_context_auth_provider__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const [thread, setThread] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const fetchData = async ()=>{\n        try {\n            var _user;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/api/mail/list/\" + ((_user = user) === null || _user === void 0 ? void 0 : _user.email), {\n                headers: {\n                    Authorization: \"Bearer \".concat(googleAccessToken)\n                }\n            });\n            console.log(\"Response:\", response.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>fetchData(),\n                children: [\n                    \"This content can only be accessed by authenticated users \",\n                    googleAccessToken,\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto py-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-semibold mb-4\",\n                        children: \"Thread List\"\n                    }, void 0, false, {\n                        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ThredList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        threads: threads\n                    }, void 0, false, {\n                        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/pages/profile/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProfilePage, \"pTG4LJESvDlRKUwT1YLuIh9m/LM=\", false, function() {\n    return [\n        _context_auth_provider__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2lCO0FBQ2hCO0FBQ1M7QUFDeEI7QUFDc0I7QUFFaEQsTUFBTU8sY0FBd0I7O0lBQzFCLE1BQU0sRUFBRUMsaUJBQWlCLEVBQUVDLElBQUksRUFBRSxHQUFHTCwrREFBT0E7SUFDM0MsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQTtJQUVwQyxNQUFNVyxZQUFZO1FBQ2QsSUFBSTtnQkFDMEVIO1lBQTFFLE1BQU1JLFdBQVcsTUFBTVIsaURBQVMsQ0FBQywyQ0FBeUNJLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTU0sS0FBSyxHQUFFO2dCQUNuRkMsU0FBUztvQkFDTEMsZUFBZSxVQUE0QixPQUFsQlQ7Z0JBQzdCO1lBQ0o7WUFFQVUsUUFBUUMsR0FBRyxDQUFDLGFBQWFOLFNBQVNPLElBQUk7UUFDMUMsRUFBRSxPQUFPQyxPQUFPO1lBQ1pILFFBQVFHLEtBQUssQ0FBQyx3QkFBd0JBO1FBQzFDO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ25CLDREQUFtQkE7OzBCQUNoQiw4REFBQ0MsMERBQU1BOzs7OzswQkFDUCw4REFBQ21CO2dCQUFJQyxTQUFTLElBQU1YOztvQkFBYTtvQkFBMERKO29CQUFrQjs7Ozs7OzswQkFDN0csOERBQUNjO2dCQUFJRSxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQThCOzs7Ozs7a0NBQzVDLDhEQUFDbEIsNkRBQVVBO3dCQUFDb0IsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQztHQTNCTW5COztRQUNrQ0gsMkRBQU9BOzs7S0FEekNHO0FBK0JOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9maWxlL2luZGV4LnRzeD9kNTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdXRoZW50aWNhdGVkTGF5b3V0IGZyb20gJy4uL0F1dGhlbnRpY2F0ZWRMYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2NvbnRleHQvYXV0aC1wcm92aWRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFRocmVhZExpc3QgZnJvbSAnQC9jb21wb25lbnRzL1RocmVkTGlzdCc7XG5cbmNvbnN0IFByb2ZpbGVQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGdvb2dsZUFjY2Vzc1Rva2VuLCB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gICAgY29uc3QgW3RocmVhZCwgc2V0VGhyZWFkXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9tYWlsL2xpc3QvJyArIHVzZXI/LmVtYWlsLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z29vZ2xlQWNjZXNzVG9rZW59YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZTonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aGVudGljYXRlZExheW91dD5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gZmV0Y2hEYXRhKCl9PlRoaXMgY29udGVudCBjYW4gb25seSBiZSBhY2Nlc3NlZCBieSBhdXRoZW50aWNhdGVkIHVzZXJzIHtnb29nbGVBY2Nlc3NUb2tlbn0uPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LThcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+VGhyZWFkIExpc3Q8L2gxPlxuICAgICAgICAgICAgICAgIDxUaHJlYWRMaXN0IHRocmVhZHM9e3RocmVhZHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9BdXRoZW50aWNhdGVkTGF5b3V0PlxuICAgICk7XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF1dGhlbnRpY2F0ZWRMYXlvdXQiLCJIZWFkZXIiLCJ1c2VBdXRoIiwiYXhpb3MiLCJUaHJlYWRMaXN0IiwiUHJvZmlsZVBhZ2UiLCJnb29nbGVBY2Nlc3NUb2tlbiIsInVzZXIiLCJ0aHJlYWQiLCJzZXRUaHJlYWQiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsImVtYWlsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiZGl2Iiwib25DbGljayIsImNsYXNzTmFtZSIsImgxIiwidGhyZWFkcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/profile/index.tsx\n"));

/***/ })

});