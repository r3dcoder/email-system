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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_auth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/auth-provider */ \"./src/context/auth-provider.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n// pages/callback.tsx\nvar _s = $RefreshSig$();\n\n\n\n\nconst CallbackPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { setGAccessToken } = (0,_context_auth_provider__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const urlSearchParams = new URLSearchParams(window.location.hash.substr(1));\n        const accessToken = urlSearchParams.get(\"access_token\");\n        // Check if access_token is present\n        if (accessToken) {\n            console.log(\"access token: \", accessToken);\n            setGAccessToken(accessToken);\n            getUserData(accessToken);\n        // You can store the access_token in a state management solution like Redux,\n        // or use browser's localStorage/sessionStorage to persist it.\n        // For demonstration purposes, we'll just pass it as a query parameter to the next page.\n        //   router.push(`/profile`);\n        } else {\n            // Handle error or redirect to another page\n            router.push(\"/error\");\n        }\n    }, []);\n    const getUserData = async (token)=>{\n        try {\n            // http://localhost:8000/api/mail/user/\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/api/mail/email/\" + token);\n            console.log(\"response\", response);\n            {}\n            return response.data;\n        } catch (error) {\n            console.error(\"Error fetching user data:\", error);\n            throw error;\n        }\n    };\n    return null; // This page doesn't render anything\n};\n_s(CallbackPage, \"e24gl7erXyNHXTzedex9QhxCC1I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _context_auth_provider__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = CallbackPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CallbackPage);\nvar _c;\n$RefreshReg$(_c, \"CallbackPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FsbGJhY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxxQkFBcUI7O0FBQ2E7QUFDTTtBQUNVO0FBQ3hCO0FBRTFCLE1BQU1JLGVBQXlCOztJQUMzQixNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxlQUFlLEVBQUUsR0FBR0osK0RBQU9BO0lBRW5DRixnREFBU0EsQ0FBQztRQUNOLE1BQU1PLGtCQUFrQixJQUFJQyxnQkFBZ0JDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUM7UUFDeEUsTUFBTUMsY0FBY04sZ0JBQWdCTyxHQUFHLENBQUM7UUFFeEMsbUNBQW1DO1FBQ25DLElBQUlELGFBQWE7WUFDYkUsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkg7WUFDOUJQLGdCQUFnQk87WUFDaEJJLFlBQVlKO1FBQ1osNEVBQTRFO1FBQzVFLDhEQUE4RDtRQUM5RCx3RkFBd0Y7UUFDeEYsNkJBQTZCO1FBQ2pDLE9BQU87WUFDSCwyQ0FBMkM7WUFDM0NSLE9BQU9hLElBQUksQ0FBQztRQUNoQjtJQUNKLEdBQUcsRUFBRTtJQUdMLE1BQU1ELGNBQWMsT0FBT0U7UUFDdkIsSUFBSTtZQUNBLHVDQUF1QztZQUN2QyxNQUFNQyxXQUFXLE1BQU1qQixpREFBUyxDQUFDLDBDQUEwQ2dCO1lBRzNFSixRQUFRQyxHQUFHLENBQUMsWUFBWUk7WUFDeEIsQ0FFQTtZQUVBLE9BQU9BLFNBQVNDLElBQUk7UUFDeEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pQLFFBQVFPLEtBQUssQ0FBQyw2QkFBNkJBO1lBQzNDLE1BQU1BO1FBQ1Y7SUFDSjtJQUNBLE9BQU8sTUFBTSxvQ0FBb0M7QUFDckQ7R0ExQ01sQjs7UUFDYUgsa0RBQVNBO1FBQ0lDLDJEQUFPQTs7O0tBRmpDRTtBQTRDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2FsbGJhY2sudHN4PzU4ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvY2FsbGJhY2sudHN4XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQC9jb250ZXh0L2F1dGgtcHJvdmlkZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQ2FsbGJhY2tQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHNldEdBY2Nlc3NUb2tlbiB9ID0gdXNlQXV0aCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpO1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVybFNlYXJjaFBhcmFtcy5nZXQoJ2FjY2Vzc190b2tlbicpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGFjY2Vzc190b2tlbiBpcyBwcmVzZW50XG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY2Nlc3MgdG9rZW46IFwiLCBhY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICBzZXRHQWNjZXNzVG9rZW4oYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgZ2V0VXNlckRhdGEoYWNjZXNzVG9rZW4pXG4gICAgICAgICAgICAvLyBZb3UgY2FuIHN0b3JlIHRoZSBhY2Nlc3NfdG9rZW4gaW4gYSBzdGF0ZSBtYW5hZ2VtZW50IHNvbHV0aW9uIGxpa2UgUmVkdXgsXG4gICAgICAgICAgICAvLyBvciB1c2UgYnJvd3NlcidzIGxvY2FsU3RvcmFnZS9zZXNzaW9uU3RvcmFnZSB0byBwZXJzaXN0IGl0LlxuICAgICAgICAgICAgLy8gRm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMsIHdlJ2xsIGp1c3QgcGFzcyBpdCBhcyBhIHF1ZXJ5IHBhcmFtZXRlciB0byB0aGUgbmV4dCBwYWdlLlxuICAgICAgICAgICAgLy8gICByb3V0ZXIucHVzaChgL3Byb2ZpbGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvciBvciByZWRpcmVjdCB0byBhbm90aGVyIHBhZ2VcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuXG4gICAgY29uc3QgZ2V0VXNlckRhdGEgPSBhc3luYyAodG9rZW4/OiBzdHJpbmcpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbWFpbC91c2VyL1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbWFpbC9lbWFpbC9gICsgdG9rZW4sXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBudWxsOyAvLyBUaGlzIHBhZ2UgZG9lc24ndCByZW5kZXIgYW55dGhpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGxiYWNrUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoIiwiYXhpb3MiLCJDYWxsYmFja1BhZ2UiLCJyb3V0ZXIiLCJzZXRHQWNjZXNzVG9rZW4iLCJ1cmxTZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHIiLCJhY2Nlc3NUb2tlbiIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyRGF0YSIsInB1c2giLCJ0b2tlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/callback.tsx\n"));

/***/ })

});