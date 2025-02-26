import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import pinIcon from "assets/icons/user-profile-circle.svg";
import DeleteItem from "components/deleteItem/DeleteItem";
import OpenNotificationWithIcon from "components/notificationWithIcon/OpenNotificationWithIcon";
import * as L from "leaflet";
import Axios from "middleware/axiosInstance";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const AddressCard = ({ address, getAllAddresses }) => {
  const { t } = useTranslation();

  const [showDeleteHandler, setShowDeleteHandler] = useState(false);

  const userPinIcon = L.icon({
    iconUrl: pinIcon,
    iconSize: [25, 25],
    iconAnchor: [13, 13],
  });

  const userLocation = { lat: address.lat, lng: address.long };

  const deleteAddressHandler = () => {
    Axios.delete(`/account/addresses/${address.id}`).then((res) => {
      if (res.status === 204) {
        OpenNotificationWithIcon(
          t("deleteSuccessful"),
          t("AddressDeletedSuccessfully")
        );
        setShowDeleteHandler(false);
        // setChildren(undefined);
        getAllAddresses();
      }
    });
  };

  return (
    <>
      <div onClick={()=>setShowDeleteHandler(true)} className="w-full flex flex-row justify-between p-3 bg-white-backGround rounded-xl mt-3 cursor-pointer">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <HomeIcon className="w-[20px] h-auto" />
            <span className="mx-2 font-semibold"></span>
          </div>
          <p className="mt-1">{address.state}</p>
          <p className="text-black-textSecondry">{`${address.raw?.slice(
            0,
            22
          )} `}</p>
        </div>
        <div>
          <MapContainer
            center={userLocation}
            className="w-[72px] h-[72px] rounded-lg"
            zoom={12}
            minZoom={12}
            maxZoom={12}
            scrollWheelZoom={false}
            zoomControl={false}
            touchZoom={false}
            dragging={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={userLocation} icon={userPinIcon} />
          </MapContainer>
          {/* <img src={MapImage} alt="#" width="70px" height="70px" /> */}
        </div>
      </div>
      <DeleteItem
        showBottomSheet={showDeleteHandler}
        setShowBottomSheet={setShowDeleteHandler}
        message={t("AreYouSureToRemoveThisAddress?")}
        onDeleteHandler={deleteAddressHandler}
        onCancelHandler={setShowDeleteHandler}
      />
    </>
  );
};

export default AddressCard;
