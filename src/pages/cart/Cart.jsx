import React, { useEffect, useState } from "react";
import axios from "axios";
import Axios from "middleware/axiosInstance";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartData, setCartData] = useState(null);

  const navigate = useNavigate();

  const goFinish = () => {
    navigate("/cart-finish");
  }

  useEffect(() => {
    Axios.get("/order/cart/")
      .then(response => setCartData(response.data))
      .catch(error => console.error("Error fetching cart data:", error));
  }, []);

  if (!cartData || !cartData.items) return <p>Loading...</p>;

  const { items, total_price } = cartData;

  return (
    <div className="w-full flex flex-col">
      <div className="w-full space-y-4">
        <img src="./cartbar.svg" alt="Cart Bar" />
        <img src="./add.svg" alt="Add" />
        <div className="w-full flex flex-col p-2 space-y-4 rounded-lg bg-white">
          <img src="./pack-image.svg" alt="Pack" />
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center shadow-sm text-center p-2 rounded-lg"
            >
              <div className="flex space-x-2">
                <p className="font-semibold">{item.product_name}</p>
                <p className="font-light">{item.quantity}+</p>
              </div>
              <p className="font-semibold">${(item.product_price / 100).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <p>Total</p>
            <p className="font-bold">${(total_price / 100).toFixed(2)}</p>
          </div>
          <div onClick={goFinish} className="flex justify-center items-center px-8 py-3 cursor-pointer bg-[#FFB300] rounded-lg">
            <p className="text-white">Complete the Order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
