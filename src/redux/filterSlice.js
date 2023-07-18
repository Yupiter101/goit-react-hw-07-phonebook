
import { createSlice } from "@reduxjs/toolkit";


const initFilterState = {
  filterName: '',
};

// === filterSlice ===
export const filterSlice = createSlice({
  name: "filter",
  initialState: initFilterState,

  reducers: {
    setFilter(state, action) {
      state.filterName = action.payload;
    },
  },
});


export const { setFilter } = filterSlice.actions;
