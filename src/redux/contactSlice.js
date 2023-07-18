import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


const initContactsState = {
  items: [],
  isLoading: false,
  error: null,
};



const handlePending = (state) => {
  state.isLoading = true;
}

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
}

const handleFulfilledGet = (state, action) => {
  state.items = action.payload;
  // state.isLoading = false;
  // state.error = null;
  handleFulfilled(state);
}
      
const handleFulfilledAdd=(state, action) => {
  state.items.push(action.payload);
  handleFulfilled(state);
}
    
const handleFulfilledDelete=(state, action) => {
  state.items=state.items.filter(({id})=>id!==action.payload.id);
  handleFulfilled(state);
};





// === contactSlice ===
export const contactSlice = createSlice({
  name: "contacts",
  initialState: initContactsState,

  // reducers: {
  //   addContact(state, action) {
  //     state.items.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     const idx = state.items.findIndex(cont => cont.id === action.payload);
  //     state.items.splice(idx, 1);
  //   },
  // }
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addCase(deleteContact.rejected, handleRejected)

  }
});

// // ====== PERSIST ======
// const persistConfig = {
//   key: 'contacts',
//   storage,
//   // whitelist: ['vlue', 'a'],
//   // blacklist: ['vlue', 'a'],
// }

// export const persistContactReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer,
// );
// // ======/ PERSIST ======

// export const { addContact, deleteContact} = contactSlice.actions;
// export const contactReducer = contactSlice.reducer;


// ========== GET selectors =========
// export const getContacts = state => state.contacts.items;