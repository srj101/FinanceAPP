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
import monthsReducer from "./reducers/months"; // Adjust the import path if needed

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

// Combine them together
const rootReducer = combineReducers({
  months: persistReducer(persistConfig, monthsReducer),
});

let store = configureStore({
  reducer: rootReducer, // Pass the rootReducer as the reducer
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