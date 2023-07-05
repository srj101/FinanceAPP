import createSecureStore from "redux-persist-expo-securestore";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import FSStorage from "./ExpoStorage";

import categoriesReducer from "./reducers/categories";
import movementReducer from "./reducers/movement";
import settingsReducer from "./reducers/settings";
import worthReducer from "./reducers/worth";

// Secure storage
const secureStorage = createSecureStore();

const securePersistConfig = {
  key: "secure",
  storage: secureStorage,
};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistConfigFileBased = {
  key: "root",
  storage: FSStorage,
};

// Combine them together
const rootReducer = combineReducers({
  categories: categoriesReducer,
  movement: movementReducer,
  settings: settingsReducer,
  worth: worthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({
  reducer: persistedReducer, // Pass the rootReducer as the reducer
  // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export { persistor, store };
