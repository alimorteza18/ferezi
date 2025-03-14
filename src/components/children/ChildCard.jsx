import React from "react";
import { ReactComponent as BoyProfileIcon } from "assets/icons/user-profile-boy.svg";
import { useTranslation } from "react-i18next";
import { calcFinalFTEE } from "functions/functions";
// interface propsType {
//   showEditChildFormHandler: any;
// }

const ChildCard = ({
  showEditChildFormHandler,
  showDeleteChildHandler,
  child,
  index,
}) => {
  const { age, gender, name, height, weight } = child;

  const { t } = useTranslation();
  return (
    <div
      key={index}
      className="flex flex-col px-3 py-2 bg-white-text mt-5 rounded-lg "
    >
      <div className="flex flex-row items-start">
        <div className="flex flex-col h-auto space-y-1">
          <div className="flex items-center space-x-1">
          <BoyProfileIcon className="w-[20px] h-auto" />
          <p className="text-sm font-bold">{child.first_name}</p>
          </div>
          <p className="text-xs ">School ID: <span className="font-bold">{child.school_id}</span></p>
          <div className="border-t-green-50 w-full h-auto flex flex-row mt-1 font-normal text-xs">
            <p>
              {calcFinalFTEE(gender, age, weight, height) || "- - -"} cal
            </p>
          </div>
        </div>
        <div className="ltr:ml-auto rtl:mr-auto flex flex-col gap-3 h-auto">
          <button
            className="fr-orange-button text-xs bg-orange-300"
            onClick={() => showEditChildFormHandler(index)}
          >
            {t("edit")}
          </button>
          <button
            className="fr-orange-button text-xs bg-orange-300"
            onClick={() => showDeleteChildHandler(child.id)}
          >
            {t("remove")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChildCard;
