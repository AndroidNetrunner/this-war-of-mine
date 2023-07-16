"use strict";
exports.id = 233;
exports.ids = [233];
exports.modules = {

/***/ 969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IH": () => (/* binding */ add),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "eJ": () => (/* binding */ discard),
/* harmony export */   "mc": () => (/* binding */ reset)
/* harmony export */ });
/* unused harmony export update */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
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
    sawblade: 0,
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
};
const findingsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "findings",
    initialState,
    reducers: {
        add: (state, { payload: { resource , quantity  }  })=>{
            state[resource] += quantity;
        },
        discard: (state, { payload: { resource , quantity  }  })=>{
            state[resource] -= quantity;
        },
        reset: (state)=>{
            return {
                ...initialState
            };
        },
        update: (state, action)=>{
            return action.payload;
        }
    }
});
const { add , discard , reset , update  } = findingsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findingsSlice.reducer);


/***/ }),

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ slices_resourceSlice),
  "hB": () => (/* binding */ lowerValue),
  "_I": () => (/* binding */ raiseValue)
});

// UNUSED EXPORTS: initialize

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
;// CONCATENATED MODULE: ./src/redux/utils.ts
function makeResourceObject(english, korean, color, maxQuantity, value, weight) {
    return {
        english,
        korean,
        color,
        maxQuantity,
        value,
        weight,
        className: english.toLowerCase()
    };
}

;// CONCATENATED MODULE: ./src/redux/slices/resourceSlice.ts


const initialState = {
    wood: makeResourceObject("WOOD", "목재", "brown", 50, -1, 1),
    component: makeResourceObject("COMPONENT", "잡동사니", "white", 50, -1, 1),
    water: makeResourceObject("WATER", "물", "blue", 6, -1, 1),
    alcheol: makeResourceObject("100% ALCHEOL", "100% 알코올", "green", 3, 10, 1),
    moonshine: makeResourceObject("MOONSHINE", "밀주", "green", 3, 3, 1),
    cigarette: makeResourceObject("CIGARETTE", "담배", "green", 6, 1, 0),
    sugar: makeResourceObject("SUGAR", "설탕", "green", 3, 3, 1),
    coffee: makeResourceObject("COFFEE", "커피", "green", 4, 1, 0),
    vegetable: makeResourceObject("VEGETABLE", "채소", "green", 9, 5, 0),
    rawFood: makeResourceObject("RAW FOOD", "날고기", "green", 6, 10, 1),
    cannedFood: makeResourceObject("CANNED FOOD", "통조림", "green", 3, 15, 1),
    shovel: makeResourceObject("SHOVEL", "삽", "gray", 2, 6, 1),
    sawblade: makeResourceObject("SAWBLADE", "줄톱", "gray", 1, 5, 0),
    lockpick: makeResourceObject("LOCKPICK", "자물쇠따개", "gray", 2, 5, 0),
    filter: makeResourceObject("FILTER", "필터", "gray", 3, 1, 1),
    mechanicalPart: makeResourceObject("MECHANICAL PART", "기계부품", "gray", 4, 2, 1),
    electricalPart: makeResourceObject("ELECTRICAL PART", "전기부품", "gray", 4, 3, 1),
    jewelry: makeResourceObject("JEWELRY", "귀금속", "gray", 2, 10, 0),
    book: makeResourceObject("BOOK", "책", "gray", 3, 1, 0),
    brokenGuitar: makeResourceObject("BROKEN GUITAR", "망가진 기타", "gray", 1, 3, 1),
    guitar: makeResourceObject("GUITAR", "기타", "gray", 1, 10, 2),
    weaponPart: makeResourceObject("WEAPON PART", "무기부품", "red", 4, 2, 1),
    brokenPistol: makeResourceObject("BROKEN PISTOL", "망가진 권총", "red", 1, 5, 1),
    pistol: makeResourceObject("PISTOL", "권총", "red", 2, 16, 1),
    knife: makeResourceObject("KNIFE", "칼", "red", 3, 8, 1),
    shell: makeResourceObject("SHELL", "탄피", "red", 1, 1, 0),
    brokenAssaultRifle: makeResourceObject("BROKEN ASSAULT RIFLE", "망가진 돌격소총", "red", 1, 8, 2),
    assaultRifle: makeResourceObject("ASSAULT RIFLE", "돌격소총", "red", 2, 20, 2),
    hatchet: makeResourceObject("HATCHET", "도끼", "red", 2, 12, 1),
    ammo: makeResourceObject("AMMO", "탄약", "red", 9, 3, 0),
    brokenShotgun: makeResourceObject("BROKEN SHOTGUN", "망가진 산탄총", "red", 1, 2, 8),
    shotgun: makeResourceObject("SHOTGUN", "산탄총", "red", 2, 20, 2),
    herb: makeResourceObject("HERB", "허브", "yellow", 3, 1, 0),
    chems: makeResourceObject("CHEMS", "화공약품", "yellow", 6, 1, 0),
    herbalMeds: makeResourceObject("HERBAL MEDS", "허브약", "yellow", 3, 6, 0),
    meds: makeResourceObject("MEDS", "의약품", "yellow", 3, 10, 0),
    bandages: makeResourceObject("BANDAGES", "붕대", "yellow", 3, 10, 0)
};
const resourceSlice = (0,toolkit_.createSlice)({
    name: "resource",
    initialState,
    reducers: {
        raiseValue: (state, { payload: { resource , modifier  }  })=>{
            state[resource].value += modifier;
        },
        lowerValue: (state, { payload: { resource , modifier  }  })=>{
            state[resource].value -= modifier;
        },
        remove: (state, { payload: { resource , modifier  }  })=>{
            state[resource].maxQuantity -= modifier;
        },
        restore: (state, { payload: { resource , modifier  }  })=>{
            state[resource].maxQuantity += modifier;
        },
        initialize: (state, action)=>{
            return action.payload;
        }
    }
});
const { raiseValue , lowerValue , initialize  } = resourceSlice.actions;
/* harmony default export */ const slices_resourceSlice = (resourceSlice.reducer);


/***/ }),

/***/ 458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IH": () => (/* binding */ add),
/* harmony export */   "Vx": () => (/* binding */ update),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "eJ": () => (/* binding */ discard)
/* harmony export */ });
/* unused harmony export initialize */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    wood: 4,
    component: 4,
    water: 2,
    alcheol: 0,
    moonshine: 0,
    cigarette: 0,
    sugar: 0,
    coffee: 0,
    vegetable: 0,
    rawFood: 3,
    cannedFood: 0,
    shovel: 1,
    lockpick: 1,
    sawblade: 0,
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
};
const storageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "storage",
    initialState,
    reducers: {
        add: (state, { payload: { resource , quantity  }  })=>{
            state[resource] += quantity;
        },
        discard: (state, { payload: { resource , quantity  }  })=>{
            state[resource] -= quantity;
        },
        update: (state, { payload: newStorage  })=>{
            return newStorage;
        },
        initialize: (state, action)=>{
            return action.payload;
        }
    }
});
const { add , discard , update , initialize  } = storageSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageSlice.reducer);


/***/ })

};
;