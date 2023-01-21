import { createSlice } from "@reduxjs/toolkit";


const infoShopSlice = createSlice({
  name: "infoShop",
  initialState: { name: "تجربة" },
  reducers: {
    putName: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const { putName } = infoShopSlice.actions;

export default infoShopSlice.reducer;