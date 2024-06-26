import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import axios from "axios";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buyFunction = async () => {
    try {
      const response = await axios.post('http://localhost:3000/payment', {
        items: cartItems.map(item => ({
          name: item.card.info.name,
          price: item.card.info.price || item.card.info.defaultPrice,
          quantity: item.quantity || 1
        }))
      });

      if (response && response.status === 200) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-4 p-4 bg-gray-200 rounded shadow-lg w-full max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <ItemList items={cartItems} />
          <button
            className="bg-red-500 rounded-xl hover:bg-red-700 text-white font-bold py-2 px-4 mt-4"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <button
            className="bg-green-500 rounded-xl hover:bg-green-700 text-white font-bold py-2 px-4 mt-4"
            onClick={buyFunction}
          >
            Proceed to Payment
          </button>
        </>
      ) : (
        <p className="text-lg text-gray-700">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
