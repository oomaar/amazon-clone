import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload);
      let newBasket = [...state.items];

      if (index <= 0) {
        // The item exists in the basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove roduct (id: ${action.payload.id}) as it's not in the basket`
        );
      };

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
