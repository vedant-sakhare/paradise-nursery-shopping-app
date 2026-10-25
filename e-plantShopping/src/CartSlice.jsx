import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const found = state.items.find((item) => item.name === plant.name);
      if (found) found.quantity += 1;
      else state.items.push({ ...plant, quantity: 1 });
    },
    removeItem: (state, action) => {
      const name = typeof action.payload === 'string' ? action.payload : action.payload.name;
      state.items = state.items.filter((item) => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const found = state.items.find((item) => item.name === name);
      if (!found) return;
      if (quantity <= 0) state.items = state.items.filter((item) => item.name !== name);
      else found.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
