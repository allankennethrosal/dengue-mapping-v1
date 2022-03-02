import React from "react";
import NavbarLogo from "../assets/mapquito-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        className="flex justify-between items-center bg-gray-900 md:px-5 px-3 py-4 w-full"
        style={{ height: 64 }}
      >
        <img src={NavbarLogo} className="w-36" alt="Navbar Logo" />
        <nav className="flex justify-end items-center text-gray-100">
          <Link
            to="/"
            className="px-5 py-2 hover:bg-gray-800 bg-transparent rounded"
          >
            Map
          </Link>
          <Link
            to="/graphs"
            className="px-5 py-2 hover:bg-gray-800 bg-transparent rounded"
          >
            Graphs
          </Link>
          <Link
            to="/datatable"
            className="px-5 py-2 hover:bg-gray-800 bg-transparent rounded"
          >
            Data Table
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
