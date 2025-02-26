// import React from "react";
// import classes from "./InputItem.module.scss";
// type propsType = {
//   inputName: string;
//   inputType: "text" | "password" | "number";
//   label: string;
//   placeHolder: string;
//   // require = boolean;
// };
// const InputItem: React.FC<propsType> = (props) => {
//   const { inputName, inputType, placeHolder, label } = props;
//   return (
//     <div className={classes.inputBox}>
//       <input
//         type={inputType}
//         id={inputName}
//         name={inputName}
//         placeholder={placeHolder}
//         // onChange={handleLoginInfoChange}
//         required={true}
//       />
//       <label htmlFor="email">{label}</label>
//     </div>
//   );
// };

// export default InputItem;

import React from "react";
import classes from "./InputItem.module.scss";
// type propsType = {
//   inputName: string;
//   inputType: "text" | "password" | "number";
//   label: string;
//   placeHolder: string;
//   // require = boolean;
// };
const InputItem = (props) => {
  const { inputName, inputType, placeHolder, label, changeHandler, value } =
    props;

  return (
    <div className={classes.inputBox}>
      <input
        type={inputType}
        id={inputName}
        name={inputName}
        placeholder={placeHolder}
        onChange={changeHandler} // Call the handler passed from parent
        required={true}
        value={value} // Display the controlled value from parent
      />
      <label htmlFor={inputName}>{label}</label>
    </div>
  );
};

export default InputItem;
