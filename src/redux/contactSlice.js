import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const initContactsState = {
  contactArr: [
    {id: 'id-0', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-1', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-2', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-3', name: 'Eden3 Clements', number: '645-17-79'},
  ],
};

// === contactSlice ===
export const contactSlice = createSlice({
  name: "contacts",
  initialState: initContactsState,

  reducers: {
    
    addContact(state, action) {
      state.contactArr.push(action.payload);
    },

    deleteContact(state, action) {
      const idx = state.contactArr.findIndex(cont => cont.id === action.payload);
      state.contactArr.splice(idx, 1);
    },
  },
});

// ====== PERSIST ======
const persistConfig = {
  key: 'contacts',
  storage,
  // whitelist: ['vlue', 'a'],
  // blacklist: ['vlue', 'a'],
}

export const persistContactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer,
);
// ======/ PERSIST ======

export const { addContact, deleteContact} = contactSlice.actions;
// export const contactReducer = contactSlice.reducer;


// ========== GET selectors =========
export const getContacts = state => state.contacts.contactArr;