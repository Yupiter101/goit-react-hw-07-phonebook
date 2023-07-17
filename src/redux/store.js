
import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlice";
// import { contactSlice } from "./contactSlice";
import { persistStore, FLUSH, REHYDRATE,  PAUSE,
    PERSIST, PURGE, REGISTER, } from "redux-persist";
import { persistContactReducer } from "./contactSlice";



export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    // contacts: contactSlice.reducer,
    contacts: persistContactReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
  }
});

export const persistor = persistStore(store);
