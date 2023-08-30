"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/callback",{

/***/ "./src/pages/callback.tsx":
/*!********************************!*\
  !*** ./src/pages/callback.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_auth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/auth-provider */ \"./src/context/auth-provider.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n// pages/callback.tsx\nvar _s = $RefreshSig$();\n\n\n\n\nconst CallbackPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { setGAccessToken } = (0,_context_auth_provider__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const urlSearchParams = new URLSearchParams(window.location.hash.substr(1));\n        const accessToken = urlSearchParams.get(\"access_token\");\n        // Check if access_token is present\n        if (accessToken) {\n            console.log(\"access token: \", accessToken);\n            setGAccessToken(accessToken);\n            getUserData(accessToken);\n        // You can store the access_token in a state management solution like Redux,\n        // or use browser's localStorage/sessionStorage to persist it.\n        // For demonstration purposes, we'll just pass it as a query parameter to the next page.\n        //   router.push(`/profile`);\n        } else {\n            // Handle error or redirect to another page\n            router.push(\"/error\");\n        }\n    }, []);\n    const getUserData = async (token)=>{\n        try {\n            // http://localhost:8000/api/mail/user/\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/api/mail/email/\" + token);\n            console.log(\"response\", response);\n            const user = response.data;\n            return response.data;\n        } catch (error) {\n            console.error(\"Error fetching user data:\", error);\n            throw error;\n        }\n    };\n    return null; // This page doesn't render anything\n};\n_s(CallbackPage, \"glVjVoIFdwNWjWRRsFDHTY4vz2c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _context_auth_provider__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = CallbackPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CallbackPage);\nvar _c;\n$RefreshReg$(_c, \"CallbackPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FsbGJhY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxxQkFBcUI7O0FBQ2E7QUFDTTtBQUNVO0FBQ3hCO0FBRzFCLE1BQU1JLGVBQXlCOztJQUMzQixNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxlQUFlLEVBQUksR0FBR0osK0RBQU9BO0lBRXJDRixnREFBU0EsQ0FBQztRQUNOLE1BQU1PLGtCQUFrQixJQUFJQyxnQkFBZ0JDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUM7UUFDeEUsTUFBTUMsY0FBY04sZ0JBQWdCTyxHQUFHLENBQUM7UUFFeEMsbUNBQW1DO1FBQ25DLElBQUlELGFBQWE7WUFDYkUsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkg7WUFDOUJQLGdCQUFnQk87WUFDaEJJLFlBQVlKO1FBQ1osNEVBQTRFO1FBQzVFLDhEQUE4RDtRQUM5RCx3RkFBd0Y7UUFDeEYsNkJBQTZCO1FBQ2pDLE9BQU87WUFDSCwyQ0FBMkM7WUFDM0NSLE9BQU9hLElBQUksQ0FBQztRQUNoQjtJQUNKLEdBQUcsRUFBRTtJQUdMLE1BQU1ELGNBQWMsT0FBT0U7UUFDdkIsSUFBSTtZQUNBLHVDQUF1QztZQUN2QyxNQUFNQyxXQUFXLE1BQU1qQixpREFBUyxDQUFDLDBDQUEwQ2dCO1lBRzNFSixRQUFRQyxHQUFHLENBQUMsWUFBWUk7WUFDeEIsTUFBTUMsT0FBWUQsU0FBU0UsSUFBSTtZQUcvQixPQUFPRixTQUFTRSxJQUFJO1FBQ3hCLEVBQUUsT0FBT0MsT0FBTztZQUNaUixRQUFRUSxLQUFLLENBQUMsNkJBQTZCQTtZQUMzQyxNQUFNQTtRQUNWO0lBQ0o7SUFDQSxPQUFPLE1BQU0sb0NBQW9DO0FBQ3JEO0dBekNNbkI7O1FBQ2FILGtEQUFTQTtRQUNNQywyREFBT0E7OztLQUZuQ0U7QUEyQ04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NhbGxiYWNrLnRzeD81OGZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2NhbGxiYWNrLnRzeFxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvY29udGV4dC9hdXRoLXByb3ZpZGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQC90eXBlL3VzZXInO1xuXG5jb25zdCBDYWxsYmFja1BhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgc2V0R0FjY2Vzc1Rva2VuICwgfSA9IHVzZUF1dGgoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSB1cmxTZWFyY2hQYXJhbXMuZ2V0KCdhY2Nlc3NfdG9rZW4nKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBhY2Nlc3NfdG9rZW4gaXMgcHJlc2VudFxuICAgICAgICBpZiAoYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWNjZXNzIHRva2VuOiBcIiwgYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgc2V0R0FjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgIGdldFVzZXJEYXRhKGFjY2Vzc1Rva2VuKVxuICAgICAgICAgICAgLy8gWW91IGNhbiBzdG9yZSB0aGUgYWNjZXNzX3Rva2VuIGluIGEgc3RhdGUgbWFuYWdlbWVudCBzb2x1dGlvbiBsaWtlIFJlZHV4LFxuICAgICAgICAgICAgLy8gb3IgdXNlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2Uvc2Vzc2lvblN0b3JhZ2UgdG8gcGVyc2lzdCBpdC5cbiAgICAgICAgICAgIC8vIEZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzLCB3ZSdsbCBqdXN0IHBhc3MgaXQgYXMgYSBxdWVyeSBwYXJhbWV0ZXIgdG8gdGhlIG5leHQgcGFnZS5cbiAgICAgICAgICAgIC8vICAgcm91dGVyLnB1c2goYC9wcm9maWxlYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3Igb3IgcmVkaXJlY3QgdG8gYW5vdGhlciBwYWdlXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cblxuICAgIGNvbnN0IGdldFVzZXJEYXRhID0gYXN5bmMgKHRva2VuPzogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL21haWwvdXNlci9cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL21haWwvZW1haWwvYCArIHRva2VuLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCB1c2VyOlVzZXIgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gbnVsbDsgLy8gVGhpcyBwYWdlIGRvZXNuJ3QgcmVuZGVyIGFueXRoaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxsYmFja1BhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlQXV0aCIsImF4aW9zIiwiQ2FsbGJhY2tQYWdlIiwicm91dGVyIiwic2V0R0FjY2Vzc1Rva2VuIiwidXJsU2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckRhdGEiLCJwdXNoIiwidG9rZW4iLCJyZXNwb25zZSIsInVzZXIiLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/callback.tsx\n"));

/***/ })

});