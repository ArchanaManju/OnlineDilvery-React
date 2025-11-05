
import {useSelector} from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import React from "react";

const Cart = () => {
    // get the cart items from the redux store using useSelector hook
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
    // dispatch action to clear the cart
    dispatch(clearCart());
 }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-xl m-auto">This is Cart Page</h1>
            <button className="m-2 border-r-2ml-2 px-4  border-2 bg-orange-100 rounded-sm" onClick={handleClearCart}>Clear Cart</button>
            <div>
            <h2 className="font-bold text-lg m-4 p-4">Items in your cart :</h2>
            <div>
                {cartItems.length === 0 ? (
                    <h3>Your cart is empty! Please add items to your cart</h3>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="m-2 p-2">
                                {item}{index + 1}
                            </li>
                        ))}
                    </ul>
                )}  
            </div>

        </div>

        </div>
    );
}

export default Cart;