import AddChildComponent from "components/children/AddOrEditChildComponent";
import ChildCard from "components/children/ChildCard";
import DeleteItem from "components/deleteItem/DeleteItem";
import OpenNotificationWithIcon from "components/notificationWithIcon/OpenNotificationWithIcon";
import ChildCardSkeleton from "layouts/placeHolder/ChildCardSkeleton";
import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import Axios from "middleware/axiosInstance";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Children = () => {
  const [showAddChildForm, setShowAddChildForm] = useState(false);
  const [showEditChildForm, setShowEditChildForm] = useState(false);
  const [showDeleteHandler, setShowDeleteHandler] = useState(false);

  const { t } = useTranslation();

  const showAddChildFormHandler = () => {
    setShowAddChildForm(true);
  };

  const showEditChildFormHandler = (index) => {
    setShowEditChildForm({ selectedChildIndex: index });
  };
  const showDeleteChildHandler = (childId) => {
    setShowDeleteHandler({ childIdToRemove: childId });
  };

  const [children, setChildren] = useState(undefined);

  const getAllchildList = () => {
    Axios.get("/account/children/")
      .then((res) => {
        setChildren(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("error in get child list");
      });
  };
  const deleteChildHandler = () => {
    Axios.delete(
      `/account/children/${showDeleteHandler.childIdToRemove}/`
    ).then((res) => {
      if (res.status === 204) {
        OpenNotificationWithIcon(
          t("deleteSuccessful"),
          t("ChildDeletedSuccessfully")
        );
        setShowDeleteHandler(false);
        setChildren(undefined);
        getAllchildList();
      }
    });
  };

  useEffect(() => {
    getAllchildList();
  }, [showAddChildForm, showEditChildForm]);

  return (
    <div>
      <TitleWithUnderline title={t("children list")} className="all-center" />
      <div className="w-100 mt-4 all-center">
        <button
          onClick={() => showAddChildFormHandler()}
          className="fr-primary-button w-100 "
        >
          {t("add new child")}
        </button>
      </div>
      <div className="w-full flex flex-col justify-center mt-4">
        {children === undefined &&
          [0, 1, 2, 3].map((item) => {
            return <ChildCardSkeleton key={item} />;
          })}

        {children?.map((child, index) => {
          return (
            <ChildCard
              key={index}
              child={child}
              index={index}
              showEditChildFormHandler={showEditChildFormHandler}
              showDeleteChildHandler={showDeleteChildHandler}
            />
          );
        })}
      </div>
      {
        <AddChildComponent
          showBottomSheet={showAddChildForm}
          setShowBottomSheet={setShowAddChildForm}
          BottomSheetTypeIsEdit={false}
        />
      }

      {showEditChildForm && (
        <AddChildComponent
          showBottomSheet={showEditChildForm}
          setShowBottomSheet={setShowEditChildForm}
          BottomSheetTypeIsEdit={true}
          child={children[showEditChildForm.selectedChildIndex]}
        />
      )}
      {
        <DeleteItem
          showBottomSheet={showDeleteHandler}
          setShowBottomSheet={setShowDeleteHandler}
          message={t("AreYouSureToRemoveThisChild?")}
          onDeleteHandler={deleteChildHandler}
          onCancelHandler={setShowDeleteHandler}
        />
      }
    </div>
  );
};
export default Children;
