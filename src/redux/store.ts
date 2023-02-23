import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authReducer } from "./auth/authSlice";
import { newsReducer } from "./news/newsSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["username", "password, isLoggedIn"],
};

export const store = configureStore({
  reducer: {
    // @ts-ignore
    auth: persistReducer(authPersistConfig, authReducer),
    news: newsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
