import React from "react";
import Banner from "../../Assests/Images/profileedit-banner.png";
import User from "../../Assests/Images/profile-user.png";
import Edit from "../../Assests/Icons/edit.svg"

const ProfilEdit = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="relative flex justify-center">
            <img src={Banner} className="w-full h-[200px] object-fit" />
            <div className="absolute w-[244px] h-[244px] rounded-full top-20">
                <img src={User} className="w-[244px] h-[244px] rounded-full object-fit " />
                <div className="absolute w-[70px] h-[70px] bg-[#E2FFF1] text-[#E2FFF1] shadow-sm rounded-full top-36 left-48 flex justify-center items-center cursor-pointer">
                    <img src={Edit} className="w-[35px] h-[35px]" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProfilEdit;
