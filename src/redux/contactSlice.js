import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";


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
  handleFulfilled(state);
}
      
const handleFulfilledAdd = (state, action) => {
  state.items.push(action.payload);
  handleFulfilled(state);
}
    
const handleFulfilledDel = (state, action) => {
  state.items=state.items.filter(({id})=>id!==action.payload.id);
  handleFulfilled(state);
};





// === contactSlice ===
export const contactSlice = createSlice({
  name: "contacts",
  initialState: initContactsState,
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilledDel)
      .addCase(deleteContact.rejected, handleRejected)
  }
});
