import { createSlice } from "@reduxjs/toolkit";
import { categoriesMan } from "../../API/categoriesMan"; // import yours
import { categoriesWomen } from "../../API/categoriesWomen";
import { categoriesKids } from "../../API/categoriesKids";

const initialState = {
  products: {
    men: categoriesMan,
    women: categoriesWomen,
    kids: categoriesKids,
  },
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((prod) => prod.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.name !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeCart, clearCart } = productsSlice.actions;
export default productsSlice.reducer;
