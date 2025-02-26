import React from "react";
const DeveloperProfile: React.FC<any> = ({
  name,
  position,
  bio,
  telegram,
  mail,
  img,
}) => {
  return (
    <div className=" flex flex-col items-center mt-4 py-2 px-3 w-100  text-black-700 bg-black-50 rounded-xl fr-sm:flex-row ">
      <img src={img} alt="" className="w-[80px] mt-6 mb-3 h-fit rounded-2xl  fr-sm:mt-3" />
      <div className="flex flex-col self-start break-words mx-2">
        <p className="font-semibold text-base text-black-text">{name}</p>
        <p className="text-sm">{position}</p>
        <p className="text-black-500 text-xs mt-3 text-justify">{bio}</p>
        <a href={telegram} className="text-sm mt-2">
          {telegram}
        </a>
        <a href={`mailto:${mail}`} className="text-sm mt-1 ">
          {mail}
        </a>
      </div>
    </div>
  );
};

export default DeveloperProfile;
