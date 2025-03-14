import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ProductList from "components/produstList/ProductList";
import SearchBox from "components/searchBox/SearchBox";
import { useLocation, useNavigate } from "react-router-dom";
// nuts start
import OrderTypeAndDeliveryDate from "components/orderTypeAndDeliveryDate/OrderTypeAndOrderDate";
import PackCard from "components/packCard/PackCard";
import TabForSelectOrderType from "components/tabToSelect/TabForSelectOrderType";
import { useCartContext } from "context/CartContext";
import { useTemporaryCartContext } from "context/TemporaryCartContext";
import { checkEventTemporaryCartAndMoveToCart } from "functions/functions";
import Axios from "middleware/axiosInstance";
import convertToISOWithOffset from "functions/convertToISOWithOffset";
import Loading from "layouts/Loading/Loading";

// end of nuts
const EventsOrder = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  // get from querString url
  const defaultDeliveryDate = queryParams.get("date");

  // const [deliveryDateAndTime, setDeliveryDateAndTime] = useState(null);
  const [itemTypes, setItemTypes] = useState("pack");
  const [packs, setPacks] = useState("pack");
  const [searchText, setSearchText] = useState("");
  const { temporaryCart, setTemporaryCart } = useTemporaryCartContext();
  const { cart, setCart } = useCartContext();
  const [deliveryDate, setDeliveryDate] = useState(defaultDeliveryDate || null);
  const [packData, setPackData] = useState(null);

  // reset temporary cart on load
  useEffect(() => {
    setTemporaryCart([]);
    if (itemTypes !== "pack") setPackData(null);
    if (itemTypes === "pack") getPacks();
  }, [itemTypes]);

  const checkTemporaryCartToContinue = () => {
    if (
      checkEventTemporaryCartAndMoveToCart(
        temporaryCart,
        setTemporaryCart,
        deliveryDate,
        cart,
        setCart
      )
    ) {
      navigate("/cart");
    }
  };

  const getPacks = () => {
    const isoDateWithOffset = convertToISOWithOffset(deliveryDate);

    // const type = itemTypes === "custom" ? "FoodType" : "Pack";

    Axios.get(
      `/order/payable-products/?datetime=${isoDateWithOffset}&type=Pack&event=EVENT`
    )
      .then((res) => {
        setPackData(res.data);
      })
      .catch((err) => console.error(err));
  };

  // const packData = [
  //   { nutsName: "pack 1", nutsImage: almonds, packPrice: 1, cal: 280 },
  //   { nutsName: "pack 2", nutsImage: cashew, packPrice: 2, cal: 360 },
  //   { nutsName: "pack 3", nutsImage: hazelnut, packPrice: 3, cal: 430 },
  //   { nutsName: "pack 4", nutsImage: macadamia, packPrice: 4, cal: 570 },
  // ];

  return (
    <div className="w-full flex flex-col">
      <OrderTypeAndDeliveryDate
        deliveryDate={deliveryDate}
        setDeliveryDate={setDeliveryDate}
        orderType={t("Home")}
      />

      {deliveryDate === null ? null : (
        <>
          <div className="w-full flex flex-row justify-evenly mt-5">
            {/* <TabForSelectOrderType
              itemTypes={itemTypes}
              setItemTypes={setItemTypes}
              firstTab={t("Ferezi choice")}
              secondTab={t("Your choice")}
              className=""
            /> */}
          </div>
          <div className=" flex flex-col w-full h-full mt-5 gap-4 ">
    
              <>
                {/* <SearchBox
                  searchText={searchText}
                  setSearchText={setSearchText}
                /> */}
                <ProductList
                  orderType="event"
                  datetime={convertToISOWithOffset(deliveryDate)}
                  searchText={searchText}
                />
              </>
          </div>
          <div className="w-full all-center my-4 ">
                <button
                  className="bg-[#FFB300] w-full rounded-lg block px-6 py-2 "
                >
                  {t("continue")}
                </button>
              </div>
        </>
      )}
    </div>
  );
};
export default EventsOrder;
