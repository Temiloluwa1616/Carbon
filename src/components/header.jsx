import React from "react";
import chelsea from "../assets/chelsea.jpg";
import { CiSearch } from 'react-icons/ci'

const Header = () => {
  return (
    <div className="font-Poppins">
      <div className="bg-white flex gap-5 items-center justify-end h-[5rem] p-3 sm:flex ">
        <div className="flex items-center rounded-[3rem] sm:p-2  sm:w-[9rem] border">
          <CiSearch className="text-gray-700 sm:hidden " />
          <input
            type="search"
            className="border-none rounded-[3rem] h-[1rem]  outline-none"
            placeholder="search"
          />
        </div>
        <div className="flex items-center gap-5">
          <div className="">
            <p className="text-xs">Zulfah</p>
            <p className="text-xs">wallet ID: 00000</p>
          </div>
          <div className="">
           <img
              src={chelsea}
              alt=""
              className="rounded-[50%] w-[4rem] h-[4rem] sm:w-[9rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
