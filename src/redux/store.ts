import { configureStore } from "@reduxjs/toolkit";
import resourceReducer from "./slices/resourceSlice";
import storageReducer from "./slices/storageSlice";
import findingsReducer from "./slices/findingsSlice";

export const store = configureStore({
  reducer: {
    resource: resourceReducer,
    storage: storageReducer,
    findings: findingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
