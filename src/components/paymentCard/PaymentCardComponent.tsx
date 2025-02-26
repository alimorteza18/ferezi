import React from "react";

const PaymentCardComponent = (props: any) => {
  return (
    <div
      className={`w-fit h-[40px] my-2 flex flex-row cursor-pointer px-3 py-2 rounded-lg ${
        props.selectedCard === props.id ? "border-2 border-green-700" : ""
      }`}
      onClick={() => props.setSelectedCard(props.id)}
    >
      <img src={props.img} alt="#" className="w-[25px] h-[25px]" />
      <p className="mx-4">{props.cardNumber}</p>
    </div>
  );
};

export default PaymentCardComponent;
