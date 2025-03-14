import React, { useEffect, useState } from "react";
import axios from "axios";
import Axios from "middleware/axiosInstance";
import { useNavigate } from "react-router-dom";
import classes from "./PackCard.module.scss";
import OrderTypeAndDeliveryDate from "components/orderTypeAndDeliveryDate/OrderTypeAndOrderDate";

const Cart = () => {
  const [cartData, setCartData] = useState(null);

  const navigate = useNavigate();

  const goFinish = () => {
    navigate("/cart-finish");
  }
  const hostAddress = "https://admin.ferezi.com/media/";

  useEffect(() => {
    Axios.get("/order/cart/")
      .then(response => setCartData(response.data.carts))
      .catch(error => console.error("Error fetching cart data:", error));
  }, []);

  if (!cartData) return <p>Loading...</p>;

  // const { items, total_price } = cartData;

  return (
    <div className="w-full flex flex-col">
      <div className="w-full space-y-4">
        <img src="./cartbar.svg" alt="Cart Bar" />
        {/* <img src="./add.svg" alt="Add" /> */}
        {cartData.map((item, key) => (
          <div className="w-full flex flex-col p-2 space-y-4 rounded-lg bg-white">
            <div className="w-full bg-white rounded-lg p-1 flex items-center space-x-1 font-bold shadow-md">
              <img src="/head.svg" alt="" />
              <p>{item.child_name}</p>
            </div>
            <div className="bg-[#FFE5DD] flex w-full items-center flex-col justify-center p-2 rounded-lg">
            <div className="w-full flex flex-row justify-between">
            <span className="font-bold">{item.pack_name || 'Pack'}</span>
            <span className="font-bold">{`${item.total_calorie} calories`}</span>
          </div>
              <div className={classes.packTray}>

                <div className={classes.content}>
                <div className={` ${classes.max} grid grid-cols-3 place-items-center gap-2`}>
                  {item.items.map((ingredient,key) =>(
                    <div className="flex justify-center items-center bg-white rounded-lg w-[60px] h-[60px] shadow-md">
                    <img
                      src={`${hostAddress}${ingredient.image}`}
                      alt="tray-pack"
                      className={classes.tray}
                    />
                    {console.log(`${hostAddress}${ingredient.image}`)}
                  </div>
                  ))}
                </div>
                </div>

              </div>
              <div className=' flex flex-wrap mb-4'>
                {item.items.map((ingredient,key) => (
                  <p className=" font-semibold ml-2">{`${ingredient.product_name}, `}</p>
                ))}
              </div>
            </div>

          </div>
        ))}
        <div className="flex items-center">
          <div onClick={goFinish} className="flex justify-center items-center w-full py-3 cursor-pointer bg-[#FFB300] rounded-lg">
            <p className="text-white">Complete the Order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
