import React from "react";
import { FaRegChartBar, FaTh, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { TiMessage } from "react-icons/ti";
import { Badge } from "@mui/material";
import Imge from "../img/img1.jpg";

const Slidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "dashboard",
      icon: <FaTh />,
    },
    {
      path: "/Components",
      name: "Components",
      icon: <FaUserAlt />,
    },
    {
      path: "/Charts",
      name: "Charts",
      icon: <FaRegChartBar />,
    },
    {
      path: "/Uifeatures",
      name: "Uifeatures",
      icon: <FaRegChartBar />,
    },
    {
      path: "/Element",
      name: "Element",
      icon: <FaRegChartBar />,
    },
    {
      path: "/Table",
      name: "Table",
      icon: <FaRegChartBar />,
    },
    {
      path: "/Map",
      name: "Map",
      icon: <FaRegChartBar />,
    },
    {
      path: "/Pages",
      name: "Pages",
      icon: <FaRegChartBar />,
    },
    {
      path: "/Menulevel1",
      name: "Menulevel1",
      icon: <FaRegChartBar />,
    },
  ];
  return (
    <div>
      <div className=" flex justify-around  bg-red-700">
        <div className=" flex gap-5 justify-start items-center py-4 ml-7 ">
          <div className="flex ">
            <h1 className="text-sky-200 text-2xl font-200">Blur</h1>
            <h2 className="text-2xl  text-white font-100 hover:text-sky-200 cursor-pointer">
              Admin
            </h2>
          </div>
          <div className="flex gap-8 items-center">
            <GiHamburgerMenu className="text-2xl  text-white font-200" />
            <AiOutlineSearch className="text-lg text-white font-600" />
          </div>
          <input
            className="border-hidden outline-none bg-sky-900 "
            type="text"
            placeholder="Search for..."
          />
        </div>
        <div className="flex gap-4 justify-end items-center mr-7 ">
          <div className="flex">
            <div className="p-2">
              <Badge badgeContent={4} color="primary">
                <BsFillBellFill className="text-2xl" />
              </Badge>
            </div>
            <div className="p-2">
              <Badge className="p-1" badgeContent={4} color="primary">
                <TiMessage className="text-2xl" />
              </Badge>
            </div>
          </div>
          <div className=" w-[5%] ">
            <img className="rounded-full" src={Imge} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <div className="bg-sky-300 text-white pt-7 h-[100vh] w-[15%]">
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div className="flex p-2 gap-5 items-center">
                  <div className="text-lg">{item.icon}</div>
                  <div className="link_text">{item.name}</div>
                </div>
              </NavLink>
            ))}
          </div>
          <main className="w-[100%] p-20">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
