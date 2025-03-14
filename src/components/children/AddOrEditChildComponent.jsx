import { useState } from "react";
import OpenNotificationWithIcon from "components/notificationWithIcon/OpenNotificationWithIcon";
import Axios from "middleware/axiosInstance";
import { useTranslation } from "react-i18next";
import { countryData, dateMonth } from "./dateData";

const AddChildComponent = ({ showBottomSheet, setShowBottomSheet, BottomSheetTypeIsEdit, child }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    school_id: "",
    birth_date_day: "",
    birth_date_month: "",
    birth_date_year: "",
    height: "",
    weight: "",
    nationality: "",
    parent_type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Adım 1 için gerekli alanların dolu olup olmadığını kontrol eder
  const validateStep1 = () => {
    return (
      formData.first_name.trim() !== "" &&
      formData.last_name.trim() !== "" &&
      formData.gender.trim() !== "" &&
      formData.school_id.trim() !== ""
    );
  };

  // Adım 2 için gerekli alanların dolu olup olmadığını kontrol eder
  const validateStep2 = () => {
    return (
      formData.birth_date_day.trim() !== "" &&
      formData.birth_date_month.trim() !== "" &&
      formData.birth_date_year.trim() !== "" &&
      formData.height.trim() !== "" &&
      formData.weight.trim() !== "" &&
      formData.nationality.trim() !== ""
    );
  };

  // Adım 3 için gerekli alanların dolu olup olmadığını kontrol eder
  const validateStep3 = () => {
    return formData.parent_type.trim() !== "";
  };

  const handleNext = () => {
    // Mevcut adıma göre doğrulama yap
    if (step === 1 && !validateStep1()) {
      OpenNotificationWithIcon(t("error"), t("Please fill all fields in Step 1"));
      return;
    }
    if (step === 2 && !validateStep2()) {
      OpenNotificationWithIcon(t("error"), t("Please fill all fields in Step 2"));
      return;
    }
    if (step === 3 && !validateStep3()) {
      OpenNotificationWithIcon(t("error"), t("Please fill all fields in Step 3"));
      return;
    }

    // Bir sonraki adıma geç
    setStep((prev) => prev + 1);
  };

  const backStep = () => {
    setStep((prev) => prev - 1);
  };
  const handleSubmit = () => {
    if (!validateStep3()) {
      OpenNotificationWithIcon(t("error"), t("Please fill all fields in Step 3"));
      return;
    }

    // Format birth_date as YYYY-MM-DD
    const birth_date = `${formData.birth_date_year}-${formData.birth_date_month}-${formData.birth_date_day}`;

    // Create a new object with the formatted birth_date and all other fields
    const payload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      gender: formData.gender,
      school_id: formData.school_id,
      birth_date, // Only send birth_date in YYYY-MM-DD format
      height: formData.height,
      weight: formData.weight,
      nationality: formData.nationality,
      parent_type: formData.parent_type,
    };

    Axios.post("/account/children/", payload)
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          OpenNotificationWithIcon(t("addSuccessful"), t("newChildAddedSuccessfully"));
          setShowBottomSheet(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        OpenNotificationWithIcon(t("error"), t("FailedToAddChild"));
      });
  };

  return (
    showBottomSheet && (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-30">
        <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg relative">
          <div className="w-full flex items-center justify-between">
          <button
            className=" text-xl text-gray-600 hover:text-black"
            onClick={backStep}
          >
            <img src="/Union.svg" alt="" />
          </button>
          <button
            className=" text-xl text-gray-600 hover:text-black"
            onClick={() => setShowBottomSheet(false)}
          >
            ✕
          </button>
          </div>

          <div className="flex items-start flex-col w-full">
            {/* STEP 1 */}
            {step === 1 && (
              <>
                <div className="flex justify-center items-center w-full mt-6">
                  <img className="w-full" src="/step1.svg" alt="" />
                </div>
                <h1 className="text-2xl mt-6">ID of child</h1>
                <p>Add your Child’s ID</p>
                <div className="w-full mt-6">
                  <p>First Name</p>
                  <input
                    placeholder="add your child’s name"
                    className="bg-[#F1F1F1] rounded-xl mt-2 w-full py-3 px-3 outline-none"
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full mt-6">
                  <p>Last Name</p>
                  <input
                    placeholder="add your child’s name"
                    className="bg-[#F1F1F1] rounded-xl mt-2 w-full py-3 px-3 outline-none"
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full mt-6">
                  <p>Gender</p>
                  <div className="flex w-full justify-between">
                    <div
                      onClick={() => setFormData({ ...formData, gender: "FE" })}
                      className={`w-[49%] flex items-center space-x-2 bg-[#F1F1F1] rounded-xl py-2 px-2 ${
                        formData.gender === "FE" ? "border-2 border-[#FFB300]" : ""
                      }`}
                    >
                      <img className="w-9 h-9" src="/girl.svg" alt="girl" />
                      <p>Girl</p>
                    </div>
                    <div
                      onClick={() => setFormData({ ...formData, gender: "MA" })}
                      className={`w-[49%] flex items-center space-x-2 bg-[#F1F1F1] rounded-xl py-2 px-2 ${
                        formData.gender === "MA" ? "border-2 border-[#FFB300]" : ""
                      }`}
                    >
                      <img className="w-9 h-9" src="/boy.svg" alt="boy" />
                      <p>Boy</p>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-6">
                  <p>School Id</p>
                  <input
                    placeholder="MOD455"
                    className="bg-[#F1F1F1] rounded-xl mt-2 w-full py-3 px-3 outline-none"
                    type="text"
                    name="school_id"
                    id="school_id"
                    value={formData.school_id}
                    onChange={handleChange}
                  />
                </div>
                <button
                  onClick={handleNext}
                  className="w-full text-white mt-6 font-bold shadow-md py-3 bg-[#FFB300] rounded-lg"
                >
                  Next
                </button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <div className="flex justify-center items-center w-full mt-6">
                  <img className="w-full" src="/step2.svg" alt="" />
                </div>
                <h1 className="text-2xl mt-6">Additional Information</h1>
                <p>Add your Child’s information</p>
                <div className="w-full mt-6">
                  <p>Birth Date</p>
                  <div className="w-full flex justify-between mt-2">
                    <select
                      className="w-[32%] cursor-pointer bg-[#F1F1F1] rounded-xl py-3 px-3 outline-none"
                      name="birth_date_month"
                      id="birth_date_month"
                      value={formData.birth_date_month}
                      onChange={handleChange}
                    >
                      {dateMonth.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                    <input
                      className="w-[32%] cursor-pointer bg-[#F1F1F1] rounded-xl py-3 px-3 outline-none"
                      placeholder="15"
                      type="text"
                      name="birth_date_day"
                      id="birth_date_day"
                      value={formData.birth_date_day}
                      onChange={handleChange}
                    />
                    <input
                      className="w-[32%] cursor-pointer bg-[#F1F1F1] rounded-xl py-3 px-3 outline-none"
                      placeholder="2025"
                      type="text"
                      name="birth_date_year"
                      id="birth_date_year"
                      value={formData.birth_date_year}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full flex justify-between mt-6">
                    <div className="w-[49%]">
                      <p>Height</p>
                      <input
                        className="bg-[#F1F1F1] rounded-xl py-3 px-3 outline-none w-full"
                        placeholder="156"
                        type="number"
                        name="height"
                        id="height"
                        value={formData.height}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-[49%]">
                      <p>Weight</p>
                      <input
                        className="bg-[#F1F1F1] rounded-xl py-3 px-3 outline-none w-full"
                        placeholder="45"
                        type="number"
                        name="weight"
                        id="weight"
                        value={formData.weight}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-between mt-6">
                    <select
                      className="w-full cursor-pointer bg-[#F1F1F1] rounded-xl py-3 px-3 outline-none"
                      name="nationality"
                      id="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                    >
                      {countryData.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={handleNext}
                    className="w-full text-white mt-6 font-bold shadow-md py-3 bg-[#FFB300] rounded-lg"
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <div className="flex justify-center items-center w-full mt-6">
                  <img className="w-full" src="/step3.svg" alt="" />
                </div>
                <h1 className="text-2xl mt-6">Relation</h1>
                <p>What is your relation With child?</p>
                <div className="w-full mt-6">
                  <div className="flex items-center me-4 mt-4">
                    <input
                      id="parent-radio"
                      type="radio"
                      value="PR"
                      name="parent_type"
                      className="w-6 h-6 bg-gray-100 border-gray-300"
                      checked={formData.parent_type === "PR"}
                      onChange={handleChange}
                    />
                    <label htmlFor="parent-radio" className="ms-2 text-md font-medium text-gray-900">
                      Parent
                    </label>
                  </div>
                  <div className="flex items-center me-4 mt-4">
                    <input
                      id="grandparent-radio"
                      type="radio"
                      value="GP"
                      name="parent_type"
                      className="w-6 h-6 bg-gray-100 border-gray-300"
                      checked={formData.parent_type === "GP"}
                      onChange={handleChange}
                    />
                    <label htmlFor="grandparent-radio" className="ms-2 text-md font-medium text-gray-900">
                      Grandparent
                    </label>
                  </div>
                  <div className="flex items-center me-4 mt-4">
                    <input
                      id="guardian-radio"
                      type="radio"
                      value="GD"
                      name="parent_type"
                      className="w-6 h-6 bg-gray-100 border-gray-300"
                      checked={formData.parent_type === "GD"}
                      onChange={handleChange}
                    />
                    <label htmlFor="guardian-radio" className="ms-2 text-md font-medium text-gray-900">
                      Guardian
                    </label>
                  </div>
                  <div className="flex items-center me-4 mt-4">
                    <input
                      id="other-radio"
                      type="radio"
                      value="OT"
                      name="parent_type"
                      className="w-6 h-6 bg-gray-100 border-gray-300"
                      checked={formData.parent_type === "OT"}
                      onChange={handleChange}
                    />
                    <label htmlFor="other-radio" className="ms-2 text-md font-medium text-gray-900">
                      Other
                    </label>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full text-white mt-6 font-bold shadow-md py-3 bg-[#FFB300] rounded-lg"
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default AddChildComponent;