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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_auth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/auth-provider */ \"./src/context/auth-provider.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n// pages/callback.tsx\nvar _s = $RefreshSig$();\n\n\n\n\nconst CallbackPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { setGAccessToken, login } = (0,_context_auth_provider__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const urlSearchParams = new URLSearchParams(window.location.hash.substr(1));\n        const accessToken = urlSearchParams.get(\"access_token\");\n        // Check if access_token is present\n        if (accessToken) {\n            console.log(\"access token: \", accessToken);\n            setGAccessToken(accessToken);\n            getUserData(accessToken);\n        // You can store the access_token in a state management solution like Redux,\n        // or use browser's localStorage/sessionStorage to persist it.\n        // For demonstration purposes, we'll just pass it as a query parameter to the next page.\n        //   router.push(`/profile`);\n        } else {\n            // Handle error or redirect to another page\n            router.push(\"/error\");\n        }\n    }, []);\n    const getUserData = async (token)=>{\n        try {\n            // http://localhost:8000/api/mail/user/\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/api/mail/email/\" + token);\n            console.log(\"response\", response);\n            const user = response.data;\n            login(user, token || \"\");\n            router.push(\"/profile\");\n            return response.data;\n        } catch (error) {\n            console.error(\"Error fetching user data:\", error);\n            throw error;\n        }\n    };\n    return null; // This page doesn't render anything\n};\n_s(CallbackPage, \"twWv09Hj+vuHV6DxigkfVZSlvgY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _context_auth_provider__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = CallbackPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CallbackPage);\nvar _c;\n$RefreshReg$(_c, \"CallbackPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FsbGJhY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxxQkFBcUI7O0FBQ2E7QUFDTTtBQUNVO0FBQ3hCO0FBSTFCLE1BQU1JLGVBQXlCOztJQUMzQixNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxlQUFlLEVBQUVDLEtBQUssRUFBRSxHQUFHTCwrREFBT0E7SUFFMUNGLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVEsa0JBQWtCLElBQUlDLGdCQUFnQkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sQ0FBQztRQUN4RSxNQUFNQyxjQUFjTixnQkFBZ0JPLEdBQUcsQ0FBQztRQUV4QyxtQ0FBbUM7UUFDbkMsSUFBSUQsYUFBYTtZQUNiRSxRQUFRQyxHQUFHLENBQUMsa0JBQWtCSDtZQUM5QlIsZ0JBQWdCUTtZQUNoQkksWUFBWUo7UUFDWiw0RUFBNEU7UUFDNUUsOERBQThEO1FBQzlELHdGQUF3RjtRQUN4Riw2QkFBNkI7UUFDakMsT0FBTztZQUNILDJDQUEyQztZQUMzQ1QsT0FBT2MsSUFBSSxDQUFDO1FBQ2hCO0lBQ0osR0FBRyxFQUFFO0lBR0wsTUFBTUQsY0FBYyxPQUFPRTtRQUN2QixJQUFJO1lBQ0EsdUNBQXVDO1lBQ3ZDLE1BQU1DLFdBQVcsTUFBTWxCLGlEQUFTLENBQUMsMENBQTBDaUI7WUFHM0VKLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSTtZQUN4QixNQUFNQyxPQUFhRCxTQUFTRSxJQUFJO1lBQ2hDaEIsTUFBTWUsTUFBTUYsU0FBUztZQUVyQmYsT0FBT2MsSUFBSSxDQUFFO1lBRWIsT0FBT0UsU0FBU0UsSUFBSTtRQUN4QixFQUFFLE9BQU9DLE9BQU87WUFDWlIsUUFBUVEsS0FBSyxDQUFDLDZCQUE2QkE7WUFDM0MsTUFBTUE7UUFDVjtJQUNKO0lBQ0EsT0FBTyxNQUFNLG9DQUFvQztBQUNyRDtHQTNDTXBCOztRQUNhSCxrREFBU0E7UUFDV0MsMkRBQU9BOzs7S0FGeENFO0FBNkNOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jYWxsYmFjay50c3g/NThmZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9jYWxsYmFjay50c3hcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2NvbnRleHQvYXV0aC1wcm92aWRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0AvdHlwZS91c2VyJztcbmltcG9ydCB7IGxvZyB9IGZyb20gJ2NvbnNvbGUnO1xuXG5jb25zdCBDYWxsYmFja1BhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgc2V0R0FjY2Vzc1Rva2VuLCBsb2dpbiB9ID0gdXNlQXV0aCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpO1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHVybFNlYXJjaFBhcmFtcy5nZXQoJ2FjY2Vzc190b2tlbicpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGFjY2Vzc190b2tlbiBpcyBwcmVzZW50XG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY2Nlc3MgdG9rZW46IFwiLCBhY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICBzZXRHQWNjZXNzVG9rZW4oYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgZ2V0VXNlckRhdGEoYWNjZXNzVG9rZW4pXG4gICAgICAgICAgICAvLyBZb3UgY2FuIHN0b3JlIHRoZSBhY2Nlc3NfdG9rZW4gaW4gYSBzdGF0ZSBtYW5hZ2VtZW50IHNvbHV0aW9uIGxpa2UgUmVkdXgsXG4gICAgICAgICAgICAvLyBvciB1c2UgYnJvd3NlcidzIGxvY2FsU3RvcmFnZS9zZXNzaW9uU3RvcmFnZSB0byBwZXJzaXN0IGl0LlxuICAgICAgICAgICAgLy8gRm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMsIHdlJ2xsIGp1c3QgcGFzcyBpdCBhcyBhIHF1ZXJ5IHBhcmFtZXRlciB0byB0aGUgbmV4dCBwYWdlLlxuICAgICAgICAgICAgLy8gICByb3V0ZXIucHVzaChgL3Byb2ZpbGVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvciBvciByZWRpcmVjdCB0byBhbm90aGVyIHBhZ2VcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuXG4gICAgY29uc3QgZ2V0VXNlckRhdGEgPSBhc3luYyAodG9rZW4/OiBzdHJpbmcpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbWFpbC91c2VyL1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbWFpbC9lbWFpbC9gICsgdG9rZW4sXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXI6IFVzZXIgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgbG9naW4odXNlciwgdG9rZW4gfHwgJycpXG5cbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcHJvZmlsZWApO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIG51bGw7IC8vIFRoaXMgcGFnZSBkb2Vzbid0IHJlbmRlciBhbnl0aGluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsbGJhY2tQYWdlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZUF1dGgiLCJheGlvcyIsIkNhbGxiYWNrUGFnZSIsInJvdXRlciIsInNldEdBY2Nlc3NUb2tlbiIsImxvZ2luIiwidXJsU2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3Vic3RyIiwiYWNjZXNzVG9rZW4iLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckRhdGEiLCJwdXNoIiwidG9rZW4iLCJyZXNwb25zZSIsInVzZXIiLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/callback.tsx\n"));

/***/ })

});