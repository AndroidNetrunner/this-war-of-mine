import { configureStore } from "@reduxjs/toolkit";
import resourceReducer from "./slices/resourceSlice";
import storageReducer from "./slices/storageSlice";
import findingsReducer from "./slices/findingsSlice";
import tradingReducer from "./slices/tradingSlice";

const store = configureStore({
  reducer: {
    resource: resourceReducer,
    storage: storageReducer,
    findings: findingsReducer,
    trading: tradingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
