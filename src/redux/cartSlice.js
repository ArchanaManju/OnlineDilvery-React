import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // initial items in the cart since menu card desont work we use hardcoded items
    },
    reducers: {
        addItem: (state, action) => {
            // logic to add item to cart
            // mutating state is allowed in redux toolkit because it uses immer library under the hood
            // which converts mutable code to immutable code
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // logic to remove item from cart
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
        clearCart: (state) => {
            // logic to clear the cart
            state.items = [];
            // or we can also use state.items.length = 0;
            // or we can return a new state object
            // return { items: []}
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;