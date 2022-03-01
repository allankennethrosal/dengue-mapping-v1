import React from "react";
import NavbarLogo from "../assets/mapquito-logo.png";

const Navbar = () => {
  return (
    <>
      <div
        className="flex justify-between items-center bg-gray-900 md:px-5 px-3 py-4 w-full"
        style={{ height: 64 }}
      >
        <img src={NavbarLogo} className="w-36" alt="Navbar Logo" />
      </div>
    </>
  );
};

export default Navbar;
