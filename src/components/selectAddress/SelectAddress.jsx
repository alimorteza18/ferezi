import { ReactComponent as LeftArrow } from "assets/icons/arrow-left-green.svg";
import { useState } from "react";
import classes from "./SelectAddress.module.scss";
import { ReactComponent as PinLocationIcon } from "assets/icons/location-pin.svg";
import Child from "assets/icons/child.png";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SelectAddress = ({ addresses }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressList, setShowAddressList] = useState(false);
  const { t } = useTranslation();
  return (
    <div
      className={classes.addressSelection}
      onClick={() => {
        setShowAddressList(!showAddressList);
      }}
    >
      <div className="all-center flex-row justify-between w-full">
        <div className={classes.addressName}>
          {selectedAddress ? (
            <div className="flex flex-row items-center gap-[6px]">
              <PinLocationIcon /> {selectedAddress?.address}
            </div>
          ) : (
            t("selectAddress")
          )}
        </div>
        <LeftArrow className="h-3 w-4 -rotate-90 " />
      </div>
      {showAddressList ? (
        <div className={classes.addressListContainer}>
          {addresses.map((address) => {
            return (
              <div
                className={`${classes.addressItem} ${
                  address.id === selectedAddress?.id ? classes.activeItem : ""
                }`}
                onClick={() => setSelectedAddress(address)}
              >
                <div className="flex flex-row gap-2 text-[#393939]">
                  <span>
                    <img src={Child} className="w-6 h-6" />
                  </span>
                  <span>{address.name}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span>
                    <PinLocationIcon />
                  </span>
                  <span>{address?.address}</span>
                </div>
              </div>
            );
          })}
          <Link className={`${classes.addressItem} py-1`} to="/add-address?redirectToCard=true">
            add new address
          </Link>
        </div>
      ) : null}
    </div>
  );
};
export default SelectAddress;
