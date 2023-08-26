"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/authentication-context.tsx":
/*!************************************************!*\
  !*** ./src/context/authentication-context.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n// Create the authentication context\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\n// Define the AuthProvider component\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedUser = sessionStorage.getItem(\"user\");\n        const storedToken = sessionStorage.getItem(\"token\");\n        if (storedUser && storedToken) {\n            setUser(JSON.parse(storedUser));\n            setToken(storedToken);\n        }\n    }, []);\n    const login = (userData, authToken)=>{\n        setUser(userData);\n        setToken(authToken);\n    };\n    const logout = ()=>{\n        setUser(null);\n        setToken(null);\n    };\n    const authContextValue = {\n        user,\n        token,\n        login,\n        logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: authContextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/mahfuz/Desktop/spam-email-web1/src/context/authentication-context.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"cANLe8RtnwDE5y1hInrXoZDdgy8=\");\n_c = AuthProvider;\n// Define a custom hook to use the authentication context\nconst useAuth = ()=>{\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!context) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n};\n_s1(useAuth, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hdXRoZW50aWNhdGlvbi1jb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN5RjtBQVV6RixvQ0FBb0M7QUFDcEMsTUFBTUssNEJBQWNKLG9EQUFhQSxDQUE4Qks7QUFPL0Qsb0NBQW9DO0FBQzdCLE1BQU1DLGVBQTRDO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUNwRSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFnQjtJQUVsREMsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxhQUFhQyxlQUFlQyxPQUFPLENBQUM7UUFDMUMsTUFBTUMsY0FBY0YsZUFBZUMsT0FBTyxDQUFDO1FBQzNDLElBQUlGLGNBQWNHLGFBQWE7WUFDM0JOLFFBQVFPLEtBQUtDLEtBQUssQ0FBQ0w7WUFDbkJELFNBQVNJO1FBQ2I7SUFDSixHQUFHLEVBQUU7SUFFSCxNQUFNRyxRQUFRLENBQUNDLFVBQWdCQztRQUM3QlgsUUFBUVU7UUFDUlIsU0FBU1M7SUFDWDtJQUVBLE1BQU1DLFNBQVM7UUFDYlosUUFBUTtRQUNSRSxTQUFTO0lBQ1g7SUFFQSxNQUFNVyxtQkFBb0M7UUFDeENkO1FBQ0FFO1FBQ0FRO1FBQ0FHO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2pCLFlBQVltQixRQUFRO1FBQUNDLE9BQU9GO2tCQUFtQmY7Ozs7OztBQUVwRCxFQUFFO0dBakNXRDtLQUFBQTtBQW1DYix5REFBeUQ7QUFDbEQsTUFBTW1CLFVBQVU7O0lBQ3JCLE1BQU1DLFVBQVV6QixpREFBVUEsQ0FBQ0c7SUFDM0IsSUFBSSxDQUFDc0IsU0FBUztRQUNaLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QsRUFBRTtJQU5XRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9hdXRoZW50aWNhdGlvbi1jb250ZXh0LnRzeD9mZDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICdAL3R5cGUvdXNlcic7XG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuIFxuLy8gRGVmaW5lIHRoZSBhdXRoZW50aWNhdGlvbiBjb250ZXh0IHR5cGVcbmludGVyZmFjZSBBdXRoQ29udGV4dFR5cGUge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbiAgdG9rZW46IHN0cmluZyB8IG51bGw7XG4gIGxvZ2luOiAodXNlckRhdGE6IFVzZXIsIHRva2VuOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGxvZ291dDogKCkgPT4gdm9pZDtcbn1cblxuLy8gQ3JlYXRlIHRoZSBhdXRoZW50aWNhdGlvbiBjb250ZXh0XG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4vLyBEZWZpbmUgdGhlIEF1dGhQcm92aWRlciBwcm9wc1xuaW50ZXJmYWNlIEF1dGhQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuLy8gRGVmaW5lIHRoZSBBdXRoUHJvdmlkZXIgY29tcG9uZW50XG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQzxBdXRoUHJvdmlkZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZFVzZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgY29uc3Qgc3RvcmVkVG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIGlmIChzdG9yZWRVc2VyICYmIHN0b3JlZFRva2VuKSB7XG4gICAgICAgIHNldFVzZXIoSlNPTi5wYXJzZShzdG9yZWRVc2VyKSk7XG4gICAgICAgIHNldFRva2VuKHN0b3JlZFRva2VuKTtcbiAgICB9XG59LCBbXSk7XG5cbiAgY29uc3QgbG9naW4gPSAodXNlckRhdGE6IFVzZXIsIGF1dGhUb2tlbjogc3RyaW5nKSA9PiB7XG4gICAgc2V0VXNlcih1c2VyRGF0YSk7XG4gICAgc2V0VG9rZW4oYXV0aFRva2VuKTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICBzZXRUb2tlbihudWxsKTtcbiAgfTtcblxuICBjb25zdCBhdXRoQ29udGV4dFZhbHVlOiBBdXRoQ29udGV4dFR5cGUgPSB7XG4gICAgdXNlcixcbiAgICB0b2tlbixcbiAgICBsb2dpbixcbiAgICBsb2dvdXQsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGhDb250ZXh0VmFsdWV9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuLy8gRGVmaW5lIGEgY3VzdG9tIGhvb2sgdG8gdXNlIHRoZSBhdXRoZW50aWNhdGlvbiBjb250ZXh0XG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF1dGggbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoUHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXV0aENvbnRleHQiLCJ1bmRlZmluZWQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwidG9rZW4iLCJzZXRUb2tlbiIsInN0b3JlZFVzZXIiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRUb2tlbiIsIkpTT04iLCJwYXJzZSIsImxvZ2luIiwidXNlckRhdGEiLCJhdXRoVG9rZW4iLCJsb2dvdXQiLCJhdXRoQ29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/authentication-context.tsx\n"));

/***/ })

});