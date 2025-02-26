import { useTranslation } from "react-i18next";
import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import AddressCard from "components/address/AddressCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BottomSheetComponent from "components/bottomSheet/BottomSheetComponent";
import Axios from "middleware/axiosInstance";
import DeleteItem from "components/deleteItem/DeleteItem";

const Addresses = () => {
  const { t } = useTranslation();
  const [showNextStepBottomSheet, setShowNextStepBottomSheet] = useState(false);
  const [allAddresses, setAllAddresses] = useState([]);

  const getAllAddresses = () => {
    Axios.get("/account/addresses/")
      .then((res) => {
        setAllAddresses(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const setShowBottomSheetHandler = () => {
    setShowNextStepBottomSheet(true);
  };

  useEffect(() => {
    getAllAddresses();
  }, []);

  return (
    <div>
      <TitleWithUnderline title={t("addresses")} className="all-center" />
      <div className="mt-5">
        <Link
          className="fr-primary-button block text-center mb-5"
          to="/add-address"
        >
          {t("Add New Address")}
        </Link>
        {allAddresses.map((address) => {
          return (
            <AddressCard
              address={address}
              setShowBottomSheetHandler={setShowBottomSheetHandler}
              getAllAddresses={getAllAddresses}
            />
          );
        })}
      </div>

     

      {/*   <BottomSheetComponent
        showBottomSheet={showNextStepBottomSheet}
        setShowBottomSheet={setShowNextStepBottomSheet}
      >
        <div className="all-center flex-col">
          <Link
            to="/order/event"
            className="fr-orange-button w-[260px] my-3 text-center"
          >
            {t("another event")}
          </Link>
          <Link
            to="/order/school"
            className="fr-orange-button  w-[260px] my-3 text-center"
          >
            {t("school")}
          </Link>
          <Link
            to="/select-payment-method"
            className="fr-primary-button  w-[260px] my-3 text-center"
          >
            {t("proceed to payment")}
          </Link>
        </div>
      </BottomSheetComponent> */}
    </div>
  );
};

export default Addresses;
