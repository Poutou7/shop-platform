import { createSlice } from "@reduxjs/toolkit";


const showListDashboardSlice = createSlice({
  name: "showListDashboard",
  initialState: { show: false },
  reducers: {
    showList: (state) => {
      state.show = !state.show;
    }
  }
});

export const { showList } = showListDashboardSlice.actions;

export default showListDashboardSlice.reducer;