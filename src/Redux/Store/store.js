import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Slices/shoppingCartSlices.jsx";

export const store = configureStore({
  reducer: {
    productsData: productsReducer,
  },
});
