import OrderTypeAndDeliveryDate from "components/orderTypeAndDeliveryDate/OrderTypeAndOrderDate";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import SwitchItem from "components/formItems/switch/SwitchItem";
import PackCard from "components/packCard/PackCard";
import ProductList from "components/produstList/ProductList";
import SearchBox from "components/searchBox/SearchBox";
import { useLocation, useNavigate } from "react-router-dom";
// nuts start
import AddChildComponent from "components/children/AddOrEditChildComponent";
import SelectChild from "components/selectChild/SelectChild";
import TabForSelectOrderType from "components/tabToSelect/TabForSelectOrderType";
import { useCartContext } from "context/CartContext";
import { useTemporaryCartContext } from "context/TemporaryCartContext";
import convertToISOWithOffset from "functions/convertToISOWithOffset";
import {
  calcFinalFTEE,
  checkSchoolTemporaryCartAndMoveToCart,
} from "functions/functions";
import Axios from "middleware/axiosInstance";

// end of nuts
const SchoolOrder = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  // get from querString url
  const defaultDeliveryDate = queryParams.get("date");

  // const [deliveryDateAndTime, setDeliveryDateAndTime] = useState(null);
  const [itemTypes, setItemTypes] = useState(null);
  const [selectedChild, setSelectedChild] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [examCheckBox, setExamCheckBox] = useState(false);
  const [sportCheckBox, setSportCheckBox] = useState(false);
  const [noBreakfastCheckBox, setNoBreakfastCheckBox] = useState(false);
  const { temporaryCart, setTemporaryCart } = useTemporaryCartContext();
  // const { cart, setCart } = useCartContext();
  const [deliveryDate, setDeliveryDate] = useState(defaultDeliveryDate || null);
  const [selectedChildFTEE, setSelectedChildFTEE] = useState(null);
  const [showAddChildForm, setShowAddChildForm] = useState(false);
  const [children, setChildren] = useState([]);
  const [packData, setPackData] = useState();
  const [cart, setCart] = useState([]);

  const isoDateWithOffset = convertToISOWithOffset(deliveryDate);


  const getAllchildList = () => {
    Axios.get("/account/children/")
      .then((res) => {
        const childrenList = res.data;
        setChildren(childrenList);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const sendCartToApi = () => {
    Axios.post("order/cart/", { packs: cart })
    .then(response => {
      console.log("Sepet gönderildi:", response.data);
      navigate("/cart");
    })
    .catch(error => console.error("Sepet gönderilirken hata oluştu:", error));
  };
  const getProductList = () => {
    //  -&-&-&- darsad telerance be surat pishfarz -&-&-&-
    Axios.get(
      `/product/packs/?page=1`
    )
      .then((res) => {
        setPackData(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllchildList();
    getProductList();
  }, [showAddChildForm]);

  useEffect(() => {
    getProductList();
  }, [selectedChildFTEE]);

  useEffect(() => {
    setItemTypes("custom");
    // if (deliveryDateAndTime) {
    //   setDeliveryDate(deliveryDateAndTime?.slice(0, 10));
    // }
  }, [deliveryDate]);

  // reset temporary cart on load
  useEffect(() => {
    setTemporaryCart([]);
  }, []);

  const FteeValueHandler = () => {
    try {
      if (selectedChild) {
        const { gender, age, weight, height } = selectedChild;

        // calcFinalFTEE(gender, age, weight, height)

        let initialFTEE = calcFinalFTEE(gender, age, weight, height);

        if (examCheckBox) {
          initialFTEE += 150;
        }
        if (sportCheckBox) {
          initialFTEE += 498;
        }
        if (noBreakfastCheckBox) {
          initialFTEE += 360;
        }
        selectedChild.needFTEE = initialFTEE;
        setSelectedChildFTEE(initialFTEE);
      }
    } catch {
      setSelectedChildFTEE(selectedChild.FTEE);
    }
  };

  useEffect(() => {
    FteeValueHandler();
  }, [selectedChild, examCheckBox, sportCheckBox, noBreakfastCheckBox]);


  console.log("PACK", packData)
  return (
    <div className="w-full flex flex-col">
      {/* <OrderTypeAndDeliveryDate
        deliveryDate={deliveryDate}
        setDeliveryDate={setDeliveryDate}
        orderType={t("school")}
      /> */}
      {deliveryDate === null ? null : (
        <>
          <div className="flex flex-col mt-3">
            <SelectChild
              children={children}
              setSelectedChild={setSelectedChild}
              selectedChild={selectedChild}
              setShowAddChildForm={setShowAddChildForm}
            />
            {selectedChildFTEE && (
              <div className="flex flex-col text-xs px-2 my-3 py-1 bg-[#87CB44] rounded-md">
                <div className="flex flex-row">
                  <span>{t("dailyValue")}</span>:
                  <span className="mx-1">{selectedChildFTEE}</span>
                </div>
              </div>
            )}
            {selectedChild ? (
              <div className="w-full h-auto px-3 py-2 rounded-[10px] box-shadow-primary bg-[#fff] mt-2">
                <p className="text-[#717171] mb-3 ">{t("childsStatus")}</p>
                <SwitchItem
                  switchStatus={examCheckBox}
                  toggleSwitchHandler={setExamCheckBox}
                  name={t("exam")}
                />
                <SwitchItem
                  switchStatus={sportCheckBox}
                  toggleSwitchHandler={setSportCheckBox}
                  name={t("sport")}
                />
                <SwitchItem
                  switchStatus={noBreakfastCheckBox}
                  toggleSwitchHandler={setNoBreakfastCheckBox}
                  name={t("no breakfast")}
                />
              </div>
            ) : null}
          </div>

          {selectedChild ? (
            <>
              {/* <div className="w-full flex flex-row justify-evenly mt-5">

                <TabForSelectOrderType
                  itemTypes={itemTypes}
                  setItemTypes={setItemTypes}
                  firstTab={t("Ferezi choice")}
                  secondTab={t("Your choice")}
                  className=""
                />
              </div> */}

              <div className="w-full h-full mt-5 flex flex-col gap-3">
                {itemTypes === "custom" ? (
                  <>
                    {packData.map((pack, index) => {
                      return (
                        <PackCard
                          key={pack.slug}
                          pack={pack}
                          cart={cart}
                          setCart={setCart}
                          selectedChildFTEE={selectedChildFTEE}

                        />
                      );
                    })}
                  </>
                ) : (
                  <>
                    <SearchBox
                      searchText={searchText}
                      setSearchText={setSearchText}
                    />
                    {/* <ProductList
                      orderType="school"
                      selectedChildFTEE={selectedChildFTEE}
                      searchText={searchText}
                      datetime={isoDateWithOffset}
                    /> */}
                  </>
                )}
              </div>
              <div className="w-full all-center my-4 ">
                <button
                  onClick={sendCartToApi}
                  className="bg-[#FFB300] w-full rounded-lg block px-6 py-2"
                >
                  {t("continue")}
                </button>
              </div>
            </>
          ) : null}
        </>
      )}
      {showAddChildForm && (
        <AddChildComponent
          showBottomSheet={showAddChildForm}
          setShowBottomSheet={setShowAddChildForm}
        />
      )}
    </div>
  );
};

export default SchoolOrder;
