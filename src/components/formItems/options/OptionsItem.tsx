import React from "react";
import classes from "./OptionsItem.module.scss";
const OptionsItem = ({ selectedChild, setSelectedChild }: any) => {
  const children = [
    {
      id: 0,
      name: "Olivia",
    },
    {
      id: 1,
      name: "Noah",
    },
    {
      id: 2,
      name: "Emma",
    },
    {
      id: 3,
      name: "Liam",
    },
  ];

  const onSelectHandler = (e: any) => {
    if (e.target.value) setSelectedChild(children[e.target.value]);
  };
  return (
    <div className="w-[90%] all-center my-5">
      {/* <p>The package ordered is for: </p> */}
      <select onChange={onSelectHandler} className={classes.select}>
        <option
          selected={selectedChild === null}
          hidden={selectedChild !== null}
        >
          select child
        </option>
        {children.map((child, index) => {
          return <option value={index}>{child.name}</option>;
        })}
      </select>
    </div>
  );
};

export default OptionsItem;
