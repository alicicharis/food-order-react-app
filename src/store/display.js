import { createSlice } from "@reduxjs/toolkit";

const initalDisplayState = {
  id: undefined,
  image: "",
  name: "Preview",
  price: "Preview",
  description: "Preview",
};

const displaySlice = createSlice({
  name: "display",
  initialState: initalDisplayState,
  reducers: {
    displayItem: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.price = action.payload.price;
      state.description = action.payload.description;
      state.image = action.payload.image;
    },
  },
});

export const displayActions = displaySlice.actions;

export default displaySlice.reducer;
