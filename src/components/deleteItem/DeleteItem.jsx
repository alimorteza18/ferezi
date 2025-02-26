import BottomSheetComponent from "components/bottomSheet/BottomSheetComponent";
import React from "react";
import { useTranslation } from "react-i18next";

const DeleteItem = ({
  showBottomSheet,
  setShowBottomSheet,
  message,
  onDeleteHandler,
  onCancelHandler,
}) => {
  const { t } = useTranslation();

  return (
    <BottomSheetComponent
      showBottomSheet={showBottomSheet}
      setShowBottomSheet={setShowBottomSheet}
    >
      <div className="flex justify-center">
        <div className="h-auto max-h-[60vh] mb-6 overflow-scroll w-10/12 max-w-[500px] flex flex-col">
          <p className="mt-4 mb-5">{message}</p>
          <div className="flex flex-row justify-between items-center">
            <button
              onClick={() => onDeleteHandler()}
              className="fr-primary-button block"
            >
              {t("remove")}
            </button>
            <button
              onClick={() => onCancelHandler(null)}
              className="fr-secondry-button block"
            >
              {t("cancel")}
            </button>
          </div>
        </div>
      </div>
    </BottomSheetComponent>
  );
};

export default DeleteItem;
