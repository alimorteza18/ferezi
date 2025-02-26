import pinIcon from "assets/icons/user-profile-circle.svg";
import OpenNotificationWithIcon from "components/notificationWithIcon/OpenNotificationWithIcon";
import { FormikHelpers, useFormik } from "formik";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import Axios from "middleware/axiosInstance";
import classes from "./AddAddress.module.scss";

interface LocationMarkerProps {
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPoint: {
    lat: number;
    lng: number;
  } | null;
  setSelectedPoint: React.Dispatch<React.SetStateAction<any>>;
}

const LocationMarker: FunctionComponent<LocationMarkerProps> = ({
  setShowMap,
  selectedPoint,
  setSelectedPoint,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirectToCard = queryParams.get("redirectToCard");

  const map = useMapEvents({
    click(e: any) {
      if (selectedPoint === null) {
        setSelectedPoint(e.latlng);
        console.log(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      }
    },
  });

  const userPinIcon = L.icon({
    iconUrl: pinIcon,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

  const removeSelectedPoint = () => {
    setTimeout(() => {
      setSelectedPoint(null);
    }, 50);
  };

  const addLocationHandler = () => {
    // redirectToCard ? navigate("/cart") : navigate("/addresses");
    OpenNotificationWithIcon("add address", "address added successfully");
    setShowMap(false);
  };

  return (
    <>
      {selectedPoint === null ? null : (
        <Marker position={selectedPoint} icon={userPinIcon}>
          <Popup>
            <button
              className="outline-none px-1 py-[2px] text-[#ec4d4d] font-semibold text-sm w-fit"
              onClick={() => removeSelectedPoint()}
            >
              {t("remove")}
            </button>
          </Popup>
        </Marker>
      )}
      {selectedPoint && (
        <div className="w-full absolute bottom-2 all-center z-[99999999]">
          <button
            className="fr-primary-button bg-orange-900 font-semibold"
            onClick={() => addLocationHandler()}
          >
            {t("setLocation")}
          </button>
        </div>
      )}
    </>
  );
};

interface SetLocationOnMapProps {
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPoint: any;
  setSelectedPoint: React.Dispatch<React.SetStateAction<any>>;
}

const SetLocationOnMap: FunctionComponent<SetLocationOnMapProps> = ({
  setShowMap,
  selectedPoint,
  setSelectedPoint,
}) => {
  const [defaultCenter, setDefaultCenter] = useState<any>({
    lat: 35.6997244,
    lng: 51.3370177,
  });
  return (
    <div className="w-full h-full">
      <MapContainer center={selectedPoint || defaultCenter} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          setShowMap={setShowMap}
          selectedPoint={selectedPoint}
          setSelectedPoint={setSelectedPoint}
        />
      </MapContainer>
    </div>
  );
};

interface AddAddressDetailsProps {
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPoint: {
    lat: number;
    lng: number;
  } | null;
}

interface FormValues {
  country: string;
  state: string;
  postal_code: number | null;
  raw: string;
  lat: null | number;
  long: null | number;
}

const AddAddressDetails: FunctionComponent<AddAddressDetailsProps> = ({
  setShowMap,
  selectedPoint,
}) => {

  const navigate = useNavigate();


  const validationSchema = Yup.object({
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    postal_code: Yup.number()
      .required("Postal code is required")
      .integer("Postal code must be an integer")
      .min(1000000000, "Postal code must be 10 digits")
      .max(9999999999, "Postal code must be 10 digits")
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      ),
    raw: Yup.string().required("Raw is required"),
  });

  const initialValues: FormValues = {
    country: "",
    state: "",
    postal_code: null,
    raw: "",
    lat: null,
    long: null,
  };

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    if (selectedPoint) {
      try {
        values.lat = Number(selectedPoint.lat.toPrecision(10));
        values.long = Number(selectedPoint.lng.toPrecision(10));
        Axios.post("/account/addresses/", values)
          .then((res) => {
            console.log(res);
            navigate("/addresses")
          })
          .catch((err) => console.error(err));
        console.log("Form values:", values);
        setSubmitting(false);
      } catch {
        // notification(t(""))

        alert("no sended");
      }
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const { t } = useTranslation();

  return (
    <div className="w-full h-full ">
      <TitleWithUnderline
        title={t(`addAddress`)}
        className="all-center mt-3 mb-2"
      />
      <div className={classes.addFormAddress}>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.formItem}>
            <input
              id="country"
              name="country"
              type="text"
              placeholder={t("country")}
              className={
                formik.touched.country && formik.errors.country
                  ? "border border-[#FF585A]"
                  : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />
            {formik.touched.country && formik.errors.country ? (
              <p className="validation-error-message">
                {formik.errors.country}
              </p>
            ) : null}
          </div>
          <div className={classes.formItem}>
            {/* <label htmlFor="state">State</label> */}
            <input
              id="state"
              name="state"
              type="text"
              placeholder={t("state")}
              className={
                formik.touched.state && formik.errors.state
                  ? "border border-[#FF585A]"
                  : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            />
            {formik.touched.state && formik.errors.state ? (
              <p className="validation-error-message">{formik.errors.state}</p>
            ) : null}
          </div>
          <div className={classes.formItem}>
            {/* <label htmlFor="postal_code">Postal Code</label> */}
            <input
              id="postal_code"
              name="postal_code"
              type="number"
              placeholder={t("postal_code")}
              className={
                formik.touched.postal_code && formik.errors.postal_code
                  ? "border border-[#FF585A]"
                  : ""
              }
              onChange={(e) => {
                formik.setFieldValue(
                  "postal_code",
                  e.target.value === "" ? null : Number(e.target.value)
                );
              }}
              onBlur={formik.handleBlur}
              value={formik.values.postal_code ?? ""}
            />
            {formik.touched.postal_code && formik.errors.postal_code && (
              <p className="validation-error-message">
                {formik.errors.postal_code}
              </p>
            )}
          </div>
          <div className={classes.formItem}>
            {/* <label htmlFor="raw">Raw</label> */}
            <textarea
              id="raw"
              name="raw"
              rows={3}
              placeholder={t("row")}
              className={
                formik.touched.raw && formik.errors.raw
                  ? "border border-[#FF585A]"
                  : ""
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.raw}
            />
            {formik.touched.raw && formik.errors.raw ? (
              <p className="validation-error-message">{formik.errors.raw}</p>
            ) : null}
          </div>
          <button
            className="fr-primary-button bg-[#87CB44]"
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "loading" : t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

const AddAddress: FunctionComponent = () => {
  const [showMap, setShowMap] = useState<boolean>(true);
  const [selectedPoint, setSelectedPoint] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  return showMap ? (
    <SetLocationOnMap
      setShowMap={setShowMap}
      selectedPoint={selectedPoint}
      setSelectedPoint={setSelectedPoint}
    />
  ) : (
    <AddAddressDetails setShowMap={setShowMap} selectedPoint={selectedPoint} />
  );
};

export default AddAddress;
