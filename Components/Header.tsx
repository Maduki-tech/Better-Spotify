import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from "../public/images/Logo.png";

const Header: NextPage = () => {
  return (
    <div className="bg-gray-700 flex justify-between px-20 py-2 items-center">
      <div className="w-40">
        <Image src={logo} />
      </div>
			{/* TODO: maybe add something to the middle */}

      <div className="flex gap-4 items-center">
        {/* TODO: add drop down to this */}
        <FaUserCircle className="w-6 h-6" />
        <span>User Name</span>
      </div>
    </div>
  );
};

export default Header;
