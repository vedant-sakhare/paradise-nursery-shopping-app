import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice.jsx';

export const store = configureStore({
  reducer: { cart: CartSlice },
});
