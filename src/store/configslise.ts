import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import maincount from "./maincount";
import like from "./like";
import tovars from "./tovars";
import korz from "./korz";
import user from "./user";
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
const persistKorz = {
  key: "korz",
  storage,
  whitelist: ["korz", "tovar", "id", "cost", "name", "img", "kol"],
};
const persistUser = {
  key: "user",
  storage,
  whitelist: ["user", "id", "phone_number", "password"],
}
const persistMainReducer = persistReducer(persistMain, maincount);
const persistLikeReducer = persistReducer(persistLike, like);
const persistTovarsReducer = persistReducer(persistTovars, tovars);
const persistKorzReducer = persistReducer(persistKorz, korz);
const persistUserReducer = persistReducer(persistUser, user);
const store = configureStore({
  reducer: {
    maincount: persistMainReducer,
    like: persistLikeReducer,
    tovar: persistTovarsReducer,
    korz: persistKorzReducer,
    user: persistUserReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
