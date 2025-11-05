/**
 * 
 * ItemList component to render list of items in a restaurant menu
 * our restaurant menu card is not working so we are not using this component
 * we will keep this code for reference purpose for learing redux add to cart functionality
 * dispatching actions to add items to cart
 */

import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";


const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch the addItem action to add the item to the cart
        dispatch(addItem('item'));
    };

    return (
        <div>
            <h2 className="font-bold text-xl mb-4">Menu</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="mb-2">
                        <span className="mr-4">{item.name} - ${item.price / 100}</span>
                        <button
                            className="bg-green-500 text-white px-2 py-1 rounded"
                            onClick={() => handleAddItem(item)}
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}