import React from "react";
import Logo from "../../assets/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Button from "../Button";

const NavBar = () => {
  return (
    <div className="bg-[#EFEBE3]">
      <div className="container max-w-330 mx-auto nav-bar flex justify-between items-center py-6 pb-[90px]">
        <img className="m-w-[150px]" src={Logo} alt="logo" />
        <ul className="text-[20px] flex gap-8">
          <li>
            <a href="#!">Product</a>
          </li>
          <li>
            <a href="#!">Services</a>
          </li>
          <li>
            <a href="#!">Contact Us</a>
          </li>
        </ul>
        <ul className="flex gap-6 content-between items-center">
          <li className="cursor-pointer text-2xl">
            <IoIosSearch />
          </li>
          <li className="cursor-pointer text-2xl">
            <IoCartOutline />
          </li>
          <li className="flex gap-3">
            <Button
              custom="Login"
              className={`bg-white text-zinc-950`}
            ></Button>
            <Button custom="Register"></Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
