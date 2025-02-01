import { Drawer } from "@mui/material";
import { Menu } from "lucide-react";
import React, { useState } from "react";

import BannierImage from "../../Assets/Images/eagle-8325204_960_720.webp";
import { sideBarData } from "../../Util/Data/SideBarData";
import { NavLink } from "react-router-dom";

export default function Hearder() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <div className="sticky top-0 backdrop-blur-md py-5 p-2 gap-4 border-b shadow bg-white px-4 z-50 w-full">
      <div className="flex items-center justify-between px-4">
        <img src={BannierImage} alt="" className="w-7 h-7 rounded-full " />

        <button className="md:hidden block " onClick={() => handleOpenDrawer()}>
          <Menu />
        </button>
      </div>

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className="flex w-80 flex-col gap-2 sticky p-4">
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className=" text-2xl font-extrabold">MATTHIEU25:6</span>
          </div>

          <div className="mt-auto">
            {/* NAVIGATIONS SECTIONS */}
            <div className="flex-1 flex-col py-4 mt-5 text-gray-800 gap-1">
              {sideBarData.map((item) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `flex items-center gap-x-3 py-2 px-4 my-1 bg-blue-200 text-sm font-bold rounded-lg hover:bg-blue-200`
                      : "flex items-center gap-x-3 py-2 px-4 my-1 text-sm font-normal rounded-lg hover:bg-blue-200"
                  }
                  to={item.link}
                  onClick={() => handleCloseDrawer()}
                >
                  <span className="w-5 h-5 text-sm">{item.icon} </span>
                  <p className="mt-1">{item.Description}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
