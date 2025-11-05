import React from "react";
import { addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Contact = () => {
    const dispatch = useDispatch();
    const handelOnClick = () => {
        dispatch(addItem("item"));
    }
/**
 * add dummy item to the cart on button click
 * to test redux functionality
 * you can see by clicking the button the cart count in header increases
 */
    return (
        <div className="text-center m-4 p-4">
        <h1 >Contact Us Page</h1>
        <button className="m-2 border-r-2ml-2 px-4  border-2 bg-orange-100 rounded-sm"  onClick={handelOnClick}>Add</button>
        </div>

    );
}

export default Contact;