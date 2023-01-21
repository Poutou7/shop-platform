import { createSlice } from "@reduxjs/toolkit";


const addItemSlice = createSlice({
  name: "addItem",
  initialState: { addCategory: false, addClient: false, addPage: false },
  reducers: {
    getaddCategory: (state) => {
      state.addCategory = !state.addCategory;
    },
    getaddClient: (state) => {
      state.addClient = !state.addClient;
    },
    getaddPage: (state) => {
      state.addPage = !state.addPage;
    },
  }
});

export const { getaddCategory, getaddClient, getaddPage } = addItemSlice.actions;

export default addItemSlice.reducer;