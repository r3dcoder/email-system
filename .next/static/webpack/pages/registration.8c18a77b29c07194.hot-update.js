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

/***/ "./src/utils/useApi.ts":
/*!*****************************!*\
  !*** ./src/utils/useApi.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function callApi(url, method, data) {\n    const response = await fetch(url, {\n        method,\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: data ? JSON.stringify(data) : undefined\n    });\n    if (!response.ok) {\n        throw new Error(response.statusText);\n    }\n    return response.json();\n}\nfunction useApi() {\n    const [apiResponse, setApiResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        data: null,\n        error: null,\n        loading: false\n    });\n    const call = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (url, method, data)=>{\n        try {\n            setApiResponse({\n                ...apiResponse,\n                loading: true,\n                error: null\n            });\n            const responseData = await callApi(url, method, data);\n            setApiResponse({\n                data: responseData,\n                error: null,\n                loading: false\n            });\n        } catch (error) {\n            setApiResponse({\n                ...apiResponse,\n                loading: false,\n                error: error instanceof Error ? error : new Error(String(error))\n            });\n        }\n    }, []);\n    return {\n        apiResponse,\n        call,\n        lo\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (useApi);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdXNlQXBpLnRzIiwibWFwcGluZ3MiOiI7OztBQUE4QztBQVU5QyxlQUFlRSxRQUNiQyxHQUFXLEVBQ1hDLE1BQWlCLEVBQ2pCQyxJQUFVO0lBRVYsTUFBTUMsV0FBVyxNQUFNQyxNQUFNSixLQUFLO1FBQ2hDQztRQUNBSSxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO1FBQ0FDLE1BQU1KLE9BQU9LLEtBQUtDLFNBQVMsQ0FBQ04sUUFBUU87SUFDdEM7SUFFQSxJQUFJLENBQUNOLFNBQVNPLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUlDLE1BQU1SLFNBQVNTLFVBQVU7SUFDckM7SUFFQSxPQUFPVCxTQUFTVSxJQUFJO0FBQ3RCO0FBRUEsU0FBU0M7SUFDUCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR25CLCtDQUFRQSxDQUFpQjtRQUM3REssTUFBTTtRQUNOZSxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLE9BQU9yQixrREFBV0EsQ0FDdEIsT0FBT0UsS0FBYUMsUUFBbUJDO1FBQ3JDLElBQUk7WUFDRmMsZUFBZTtnQkFBRSxHQUFHRCxXQUFXO2dCQUFFRyxTQUFTO2dCQUFNRCxPQUFPO1lBQUs7WUFFNUQsTUFBTUcsZUFBZSxNQUFNckIsUUFBV0MsS0FBS0MsUUFBUUM7WUFFbkRjLGVBQWU7Z0JBQUVkLE1BQU1rQjtnQkFBY0gsT0FBTztnQkFBTUMsU0FBUztZQUFNO1FBQ25FLEVBQUUsT0FBT0QsT0FBTztZQUNkRCxlQUFlO2dCQUNiLEdBQUdELFdBQVc7Z0JBQ2RHLFNBQVM7Z0JBQ1RELE9BQU9BLGlCQUFpQk4sUUFBUU0sUUFBUSxJQUFJTixNQUFNVSxPQUFPSjtZQUMzRDtRQUNGO0lBQ0YsR0FDQSxFQUFFO0lBR0osT0FBTztRQUFFRjtRQUFhSTtRQUFNRztJQUFHO0FBQ2pDO0FBRUEsK0RBQWVSLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3VzZUFwaS50cz83ZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIEFwaU1ldGhvZCA9IFwiR0VUXCIgfCBcIlBPU1RcIiB8IFwiUFVUXCIgfCBcIkRFTEVURVwiO1xuXG5pbnRlcmZhY2UgQXBpUmVzcG9uc2U8VD4ge1xuICBkYXRhOiBUIHwgbnVsbDtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbDtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2FsbEFwaTxUPihcbiAgdXJsOiBzdHJpbmcsXG4gIG1ldGhvZDogQXBpTWV0aG9kLFxuICBkYXRhPzogYW55XG4pOiBQcm9taXNlPFQ+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2QsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBkYXRhID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiB1bmRlZmluZWQsXG4gIH0pO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG5mdW5jdGlvbiB1c2VBcGk8VD4oKSB7XG4gIGNvbnN0IFthcGlSZXNwb25zZSwgc2V0QXBpUmVzcG9uc2VdID0gdXNlU3RhdGU8QXBpUmVzcG9uc2U8VD4+KHtcbiAgICBkYXRhOiBudWxsLFxuICAgIGVycm9yOiBudWxsLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBjYWxsID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHVybDogc3RyaW5nLCBtZXRob2Q6IEFwaU1ldGhvZCwgZGF0YT86IGFueSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0QXBpUmVzcG9uc2UoeyAuLi5hcGlSZXNwb25zZSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IG51bGwgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgY2FsbEFwaTxUPih1cmwsIG1ldGhvZCwgZGF0YSk7XG5cbiAgICAgICAgc2V0QXBpUmVzcG9uc2UoeyBkYXRhOiByZXNwb25zZURhdGEsIGVycm9yOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEFwaVJlc3BvbnNlKHtcbiAgICAgICAgICAuLi5hcGlSZXNwb25zZSxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKFN0cmluZyhlcnJvcikpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgcmV0dXJuIHsgYXBpUmVzcG9uc2UsIGNhbGwsIGxvIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFwaTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiY2FsbEFwaSIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidW5kZWZpbmVkIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJqc29uIiwidXNlQXBpIiwiYXBpUmVzcG9uc2UiLCJzZXRBcGlSZXNwb25zZSIsImVycm9yIiwibG9hZGluZyIsImNhbGwiLCJyZXNwb25zZURhdGEiLCJTdHJpbmciLCJsbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/useApi.ts\n"));

/***/ })

});