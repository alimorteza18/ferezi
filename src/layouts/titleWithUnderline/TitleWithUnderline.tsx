import React from "react";

const TitleWithUnderline = (props: any) => {
  return (
    <div className={`w-full ${props.className}`}>
      <h2 className="relative w-fit font-semibold text-center">
        {props.title}
        <div className="fr-underline"></div>
      </h2>
    </div>
  );
};

export default TitleWithUnderline;
