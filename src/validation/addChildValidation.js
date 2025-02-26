import * as Yup from "yup";
export const addChildValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number()
    .required("Age is required")
    .min(3, "Age must be at least 3")
    .max(18, "Age must be less than or equal to 18"),
  height: Yup.number().required("Height is required"),
  weight: Yup.number().required("Weight is required"),
  gender: Yup.string().required("Gender is required"),
});
