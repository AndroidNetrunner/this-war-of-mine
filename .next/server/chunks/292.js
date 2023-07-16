"use strict";
exports.id = 292;
exports.ids = [292];
exports.modules = {

/***/ 292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IH": () => (/* binding */ add),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "eJ": () => (/* binding */ discard),
/* harmony export */   "mc": () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    myself: {
        wood: 0,
        component: 0,
        water: 0,
        alcheol: 0,
        moonshine: 0,
        cigarette: 0,
        sugar: 0,
        coffee: 0,
        vegetable: 0,
        rawFood: 0,
        cannedFood: 0,
        shovel: 0,
        lockpick: 0,
        filter: 0,
        sawblade: 0,
        mechanicalPart: 0,
        electricalPart: 0,
        jewelry: 0,
        book: 0,
        brokenGuitar: 0,
        guitar: 0,
        weaponPart: 0,
        brokenPistol: 0,
        pistol: 0,
        knife: 0,
        shell: 0,
        brokenAssaultRifle: 0,
        assaultRifle: 0,
        hatchet: 0,
        ammo: 0,
        brokenShotgun: 0,
        shotgun: 0,
        herb: 0,
        chems: 0,
        herbalMeds: 0,
        meds: 0,
        bandages: 0
    },
    opponent: {
        wood: 0,
        component: 0,
        water: 0,
        alcheol: 0,
        moonshine: 0,
        cigarette: 0,
        sugar: 0,
        coffee: 0,
        vegetable: 0,
        rawFood: 0,
        cannedFood: 0,
        shovel: 0,
        sawblade: 0,
        lockpick: 0,
        filter: 0,
        mechanicalPart: 0,
        electricalPart: 0,
        jewelry: 0,
        book: 0,
        brokenGuitar: 0,
        guitar: 0,
        weaponPart: 0,
        brokenPistol: 0,
        pistol: 0,
        knife: 0,
        shell: 0,
        brokenAssaultRifle: 0,
        assaultRifle: 0,
        hatchet: 0,
        ammo: 0,
        brokenShotgun: 0,
        shotgun: 0,
        herb: 0,
        chems: 0,
        herbalMeds: 0,
        meds: 0,
        bandages: 0
    }
};
const tradingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "trading",
    initialState,
    reducers: {
        reset: (state)=>initialState,
        add: (state, { payload  })=>{
            state[payload.person][payload.resource] = (state[payload.person][payload.resource] || 0) + 1;
        },
        discard: (state, { payload  })=>{
            state[payload.person][payload.resource] = (state[payload.person][payload.resource] || 0) - 1;
        }
    }
});
const { reset , add , discard  } = tradingSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tradingSlice.reducer);


/***/ })

};
;