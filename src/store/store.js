import { configureStore } from "@reduxjs/toolkit";

import infoShopReducer from "./infoShopSlice";
import showListDashboardReducer from "./showListDashboardSlice";
import productSlice from "./productSlice";
import addItemSlice from "./addItemSlice";

const store = configureStore({
  reducer: {
    infoShop: infoShopReducer,
    showListDashboard: showListDashboardReducer,
    products: productSlice,
    addItem: addItemSlice,
  }
});

export default store;