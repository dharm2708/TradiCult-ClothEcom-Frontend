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
    changeQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((prod) => prod.name === item);
      if (existingItem.quantity >= existingItem.stock) {
        existingItem.quantity = existingItem.stock;
      } else {
        existingItem.quantity += 1;
      }
    },
    decQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((prod) => prod.name === item);
      if (existingItem.quantity <= 1) {
        state.cart = state.cart.filter((prod) => prod.name !== item);
      } else {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeCart, clearCart, changeQuantity, decQuantity } =
  productsSlice.actions;
export default productsSlice.reducer;
