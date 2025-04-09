import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import maincount from "./maincount";
import like from "./like"
const persistMain = {
  key: "maincount",
  storage,
  whitelist: ["count"],
};
const persistLike={
  key:"like",
  storage,
  whitelist:["likecount","id","Likeobj"]
}
const persistMainReducer = persistReducer(persistMain, maincount);
const persistLikeReducer =persistReducer(persistLike,like);
const store = configureStore({
  reducer: {
    maincount: persistMainReducer,
    like:persistLikeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
