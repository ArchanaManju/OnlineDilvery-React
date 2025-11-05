import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer:{
        // add reducers here
        cart: cartReducer,
        // add more reducers as needed
        // ex: user: userReducer

    }
})

export default appStore