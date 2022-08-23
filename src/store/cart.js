import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalQuantity: 0, total: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.total = state.total + newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          description: newItem.description,
          image: newItem.image,
          name: newItem.name,
          quantity: 1,
          order: state.order + 1,
        });
      }

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      const itemQuantity = existingItem.quantity;
      //   const itemPrice = existingItem.price;

      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity = state.totalQuantity - itemQuantity;

      state.total = state.total - existingItem.totalPrice;
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) return;

      existingItem.quantity--;
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      state.totalQuantity--;
      state.total = state.total - existingItem.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
