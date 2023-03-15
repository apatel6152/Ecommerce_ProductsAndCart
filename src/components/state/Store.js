import { configureStore } from "@reduxjs/toolkit";
import CheckOutReducer from "./Slice/CheckoutSlice";
import cartReducer from "./Slice/CartSlice";
export const store = configureStore({
  reducer: {
    checkout: CheckOutReducer,
    cart: cartReducer,
  },
});