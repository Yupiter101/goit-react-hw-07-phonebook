
import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlice";
import { contactSlice } from "./contactSlice";


export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    contacts: contactSlice.reducer,
  },
});