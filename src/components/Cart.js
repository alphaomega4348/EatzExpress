import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center m-4 p-4 bg-gray-200 rounded shadow-lg w-full max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <ItemList items={cartItems} />
          <button
            className="bg-red-500 rounded-xl hover:bg-red-700 text-white font-bold py-2 px-4  mt-4"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </>
      ) : (
        <p className="text-lg text-gray-700">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
