exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 398:
/***/ ((module) => {

// Exports
module.exports = {
	"findings": "Findings_findings__PtqLB"
};


/***/ }),

/***/ 636:
/***/ ((module) => {

// Exports
module.exports = {
	"greenToken": "ResourceRow_greenToken__NmrYI",
	"redToken": "ResourceRow_redToken__3aTR9",
	"yellowToken": "ResourceRow_yellowToken__EeAm_",
	"grayToken": "ResourceRow_grayToken__8_s7d",
	"brownToken": "ResourceRow_brownToken__Rzsf3",
	"blueToken": "ResourceRow_blueToken__B3cau",
	"resourceRow": "ResourceRow_resourceRow__qXwI8",
	"zero": "ResourceRow_zero___kqrP",
	"flexContainer": "ResourceRow_flexContainer__7BSnQ",
	"value": "ResourceRow_value__CpkAF"
};


/***/ }),

/***/ 555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Findings)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/styles/Findings.module.css
var Findings_module = __webpack_require__(398);
var Findings_module_default = /*#__PURE__*/__webpack_require__.n(Findings_module);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./src/components/ResourceRow.tsx
var ResourceRow = __webpack_require__(980);
// EXTERNAL MODULE: ./src/redux/slices/storageSlice.ts
var storageSlice = __webpack_require__(458);
// EXTERNAL MODULE: ./src/redux/slices/findingsSlice.ts
var findingsSlice = __webpack_require__(969);
;// CONCATENATED MODULE: ./src/hooks/useFindingsHandlers.ts



function useFindingsHandlers() {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const findings = (0,external_react_redux_.useSelector)((state)=>state.findings);
    const storage = (0,external_react_redux_.useSelector)((state)=>state.storage);
    const handleAddToStorage = ()=>{
        dispatch((0,storageSlice/* update */.Vx)(addFindingsToNewStorage(findings, storage)));
        dispatch((0,findingsSlice/* reset */.mc)());
    };
    return {
        handleAddToStorage
    };
}
function addFindingsToNewStorage(findings, storage) {
    return Object.keys(findings).reduce((newStorage, resourceName)=>{
        const resource = resourceName;
        newStorage[resource] = (storage[resource] || 0) + findings[resource];
        return newStorage;
    }, {
        ...storage
    });
}
/* harmony default export */ const hooks_useFindingsHandlers = (useFindingsHandlers);

;// CONCATENATED MODULE: ./src/components/Findings.tsx







function Findings() {
    const { handleAddToStorage  } = hooks_useFindingsHandlers();
    const findings = (0,external_react_redux_.useSelector)((state)=>state.findings);
    const resourceInfoList = (0,external_react_redux_.useSelector)((state)=>state.resource);
    const calculateWeight = createWeightCalculator(resourceInfoList);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_react_bootstrap_.Button, {
                onClick: handleAddToStorage,
                children: "저장고에 추가"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    "총 무게: ",
                    calculateWeight(findings)
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_bootstrap_.Table, {
                className: (Findings_module_default()).findings,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("thead", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                    children: "이름"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                    children: "수량"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                    children: "무게"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                    children: "가치"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("th", {
                                    children: "여분"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                        children: Object.keys(findings).map((resource)=>/*#__PURE__*/ jsx_runtime.jsx(ResourceRow/* default */.Z, {
                                resource: resource,
                                pageName: "findings"
                            }, resource))
                    })
                ]
            })
        ]
    });
}
function createWeightCalculator(resourceInfoList) {
    return (inventory)=>{
        return Object.keys(inventory).reduce((acc, resourceName)=>acc += inventory[resourceName] * resourceInfoList[resourceName].weight, 0);
    };
}


/***/ }),

/***/ 980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ResourceRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_ResourceRow_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(636);
/* harmony import */ var _styles_ResourceRow_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_ResourceRow_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_slices_resourceSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _redux_slices_findingsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(969);
/* harmony import */ var _redux_slices_storageSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(458);







function ResourceRow({ resource , pageName  }) {
    const storageQuantity = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.storage[resource]);
    const findingsQuantity = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.findings[resource]);
    const currentQuantity = pageName === "storage" ? storageQuantity : findingsQuantity;
    const add = pageName === "storage" ? _redux_slices_storageSlice__WEBPACK_IMPORTED_MODULE_5__/* .add */ .IH : _redux_slices_findingsSlice__WEBPACK_IMPORTED_MODULE_4__/* .add */ .IH;
    const discard = pageName === "storage" ? _redux_slices_storageSlice__WEBPACK_IMPORTED_MODULE_5__/* .discard */ .eJ : _redux_slices_findingsSlice__WEBPACK_IMPORTED_MODULE_4__/* .discard */ .eJ;
    const { className , korean , maxQuantity , value , color , weight  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.resource[resource]);
    const inventory = maxQuantity - (storageQuantity + findingsQuantity);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
        className: (_styles_ResourceRow_module_css__WEBPACK_IMPORTED_MODULE_6___default().resourceRow) + " " + (_styles_ResourceRow_module_css__WEBPACK_IMPORTED_MODULE_6___default())[className] + " " + (_styles_ResourceRow_module_css__WEBPACK_IMPORTED_MODULE_6___default())[color + "Token"],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                children: korean
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: !currentQuantity ? (_styles_ResourceRow_module_css__WEBPACK_IMPORTED_MODULE_6___default().zero) : "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_ResourceRow_module_css__WEBPACK_IMPORTED_MODULE_6___default().flexContainer),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "success",
                            disabled: !inventory,
                            onClick: ()=>dispatch(add({
                                    resource: resource,
                                    quantity: 1
                                })),
                            children: "+"
                        }),
                        ` ${currentQuantity} `,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "danger",
                            disabled: !currentQuantity,
                            onClick: ()=>dispatch(discard({
                                    resource: resource,
                                    quantity: 1
                                })),
                            children: "-"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: (_styles_ResourceRow_module_css__WEBPACK_IMPORTED_MODULE_6___default().weight),
                children: weight
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: (_styles_ResourceRow_module_css__WEBPACK_IMPORTED_MODULE_6___default().value),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_ResourceRow_module_css__WEBPACK_IMPORTED_MODULE_6___default().flexContainer),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "success",
                            onClick: ()=>dispatch((0,_redux_slices_resourceSlice__WEBPACK_IMPORTED_MODULE_3__/* .raiseValue */ ._I)({
                                    resource: resource,
                                    modifier: 1
                                })),
                            children: "+"
                        }),
                        ` ${value !== -1 ? value : "거래 불가(-1)"} `,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "danger",
                            disabled: value < 0,
                            onClick: ()=>dispatch((0,_redux_slices_resourceSlice__WEBPACK_IMPORTED_MODULE_3__/* .lowerValue */ .hB)({
                                    resource: resource,
                                    modifier: 1
                                })),
                            children: "-"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: !inventory ? (_styles_ResourceRow_module_css__WEBPACK_IMPORTED_MODULE_6___default().zero) : "",
                children: inventory
            })
        ]
    });
}


/***/ })

};
;