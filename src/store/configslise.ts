import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import maincount from "./maincount";

const persistMain = {
  key: "maincount",
  storage,
  whitelist: ["count"],
};
const persistMainReducer = persistReducer(persistMain, maincount);
const store = configureStore({
  reducer: {
    maincount: persistMainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
