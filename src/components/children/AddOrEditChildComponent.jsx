import BottomSheetComponent from "components/bottomSheet/BottomSheetComponent";
import ButtonItem from "components/formItems/button/ButtonItem";
import InputItem from "components/formItems/input/InputItem";
import OpenNotificationWithIcon from "components/notificationWithIcon/OpenNotificationWithIcon";
import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import Axios from "middleware/axiosInstance";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const AddChildComponent = ({
  showBottomSheet,
  setShowBottomSheet,
  BottomSheetTypeIsEdit,
  child,
}) => {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("Name is required")),
    age: Yup.number()
      .min(4, t("age_min"))
      .max(18, t("age_max"))
      .required(t("Age is required")),
    height: Yup.number().required(t("Height is required")),
    weight: Yup.number().required(t("Weight is required")),
    gender: Yup.string().required(t("Gender is required")),
  });

  const formik = useFormik({
    initialValues: {
      name: child?.name || "",
      age: child?.age || "",
      height: child?.height || "",
      weight: child?.weight || "",
      gender: child?.gender || "FE",
      school_id: child?.school_id || "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (BottomSheetTypeIsEdit) {
        handleEdit(values, resetForm);
      } else {
        handleAdd(values, resetForm);
      }
    },
  });

  const getParentId = () => {
    try {
      const parentId = localStorage.getItem("id");
      if (!parentId) throw new Error("Parent ID not found in localStorage.");
      return parentId;
    } catch (err) {
      alert("Parent ID not found in localStorage.");
      return null;
    }
  };

  const handleAdd = (values, resetForm) => {
    const parentId = getParentId();
    if (!parentId) return;

    Axios.post("/account/children/", { ...values, parent: parentId })
      .then((res) => {
        if (res.status === 201) {
          OpenNotificationWithIcon(t("addSuccessful"), t("newChildAddedSuccessfully"));
          setShowBottomSheet(false);
          resetForm();
        }
      })
      .catch((err) => {
        OpenNotificationWithIcon(t("error"), t("FailedToAddChild"));
        console.error("Error adding child:", err);
      });
  };

  const handleEdit = (values, resetForm) => {
    const parentId = getParentId();
    if (!parentId) return;

    Axios.put(`/account/children/${child.id}/`, { ...values, parent: parentId })
      .then((res) => {
        if (res.status === 200) {
          OpenNotificationWithIcon(t("editSuccessful"), t("ChildEditedSuccessfully"));
          setShowBottomSheet(false);
          resetForm();
        }
      })
      .catch((err) => {
        OpenNotificationWithIcon(t("error"), t("FailedToEditChild"));
        console.error("Error editing child:", err);
      });
  };

  const renderInputItem = (name, label, placeholder, type = "text") => (
    <>
      <InputItem
        inputType={type}
        inputName={name}
        label={label}
        placeHolder={placeholder}
        changeHandler={formik.handleChange}
        value={formik.values[name]}
        error={formik.errors[name] && formik.touched[name]}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="validation-error-message">{formik.errors[name]}</div>
      )}
    </>
  );

  return (
    <BottomSheetComponent
      showBottomSheet={showBottomSheet}
      setShowBottomSheet={setShowBottomSheet}
    >
      <div className="h-auto my-3 flex flex-col justify-start items-center">
        <TitleWithUnderline
          title={t(`${BottomSheetTypeIsEdit ? "edit child" : "add new child"}`)}
          className="all-center mt-3 mb-2"
        />

        <form className="flex items-start flex-wrap" onSubmit={formik.handleSubmit}>
          {renderInputItem("name", t("child name"), t("John Aria"))}
          {renderInputItem("age", t("child age"), "15", "number")}
          {renderInputItem("height", t("child height"), "138", "number")}
          {renderInputItem("weight", t("child weight"), "60", "number")}
          {renderInputItem("school_id", t("school id"), "1792097", "number")}


          <select
            className="w-full mt-[10px] bg-[#EDF7E3] h-[36px] border rounded-md"
            name="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
          >
            <option value="FE">{t("girl")}</option>
            <option value="MA">{t("boy")}</option>
          </select>
          {formik.errors.gender && formik.touched.gender && (
            <div className="validation-error-message">{formik.errors.gender}</div>
          )}
        </form>

        <ButtonItem
          className="bg-orange-default mb-4"
          name={BottomSheetTypeIsEdit ? t("save changes") : t("add new child")}
          onClick={formik.handleSubmit}
        />
      </div>
    </BottomSheetComponent>
  );
};

export default AddChildComponent;
