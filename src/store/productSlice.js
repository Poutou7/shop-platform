import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
  name: "products",
  initialState: { displayFormat: "bar", colorFormat: true },
  reducers: {
    changeDisplay: (state, action) => {
      if (action.payload === "bar") {
        state.displayFormat = "bar";
        state.colorFormat = true;
      } else {
        state.displayFormat = "border";
        state.colorFormat = false;
      }
    }
  }
});

export const { changeDisplay } = productSlice.actions;

export default productSlice.reducer;