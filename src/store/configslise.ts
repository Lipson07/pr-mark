import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import maincount from "./maincount";
import like from "./like";
import tovars from "./tovars";
const persistMain = {
  key: "maincount",
  storage,
  whitelist: ["count"],
};
const persistLike = {
  key: "like",
  storage,
  whitelist: ["likecount", "id", "Likeobj"],
};
const persistTovars = {
  key: "tovars",
  storage,
  whitelist: ["tovar", "id", "cost", "name", "img"],
};
const persistMainReducer = persistReducer(persistMain, maincount);
const persistLikeReducer = persistReducer(persistLike, like);
const persistTovarsReducer = persistReducer(persistTovars, tovars);
const store = configureStore({
  reducer: {
    maincount: persistMainReducer,
    like: persistLikeReducer,
    tovar: persistTovarsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
