import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { sideBarData } from "../../Util/Data/SideBarData";
import BannierImage from "../../Assets/Images/52c3fb8188fb4e31a8d1723c0082e206_320_320.jpg";
import { LogOut } from "lucide-react";

export default function SidebarMenu() {
  const navigate = useNavigate();

  const openModalToLogOut = () => {
    document.getElementById("LogOutModal").showModal();
  };

  const HandleLogOut = () => {
    document.getElementById("LogOutModal").close();
    navigate("/");
  };
  return (
    <div className="hidden sideBar h-full bg-blue-50 border-r md:block relative shadow ">
      <div className="flex items-center justify-center gap-4 mt-5">
        <span className=" text-2xl font-extrabold">MATTHIEU25:6</span>
        <img src={BannierImage} alt="" className="w-7 h-7 rounded-full " />
      </div>
      {/* NAVIGATIONS SECTIONS */}
      <div className="flex-1 flex-col px-4 py-4 mt-5 text-gray-800 gap-1">
        {sideBarData.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-3 py-2 px-4 my-1 bg-blue-200 text-sm font-bold rounded-lg hover:bg-blue-200"
                : "flex items-center gap-x-3 py-2 px-4 my-1 text-sm font-normal rounded-lg hover:bg-blue-200"
            }
            to={item.link}
          >
            <span className="w-5 h-5 text-sm">{item.icon} </span>
            <p className="mt-1">{item.Description}</p>
          </NavLink>
        ))}
      </div>

      {/* LOG OUT SECTIONS */}

      <div
        className="absolute bottom-4 right-0 left-0 flex items-center justify-center cursor-pointer bg-red-600 text-white mt-24 mx-2 py-3 rounded-md gap-2"
        onClick={() => openModalToLogOut()}
      >
        <LogOut strokeWidth={1.5} />
        <button>Se deconnecter</button>
      </div>

      <dialog id="LogOutModal" className="modal">
        <div className="modal-box w-72">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* INPUT SECTIONS */}
          <div>
            <h1 className="text-gray-800 font-bold">Déconnexion</h1>

            <p className="text-gray-600 text-base font-normal my-5">
              Êtes-vous sûr de vouloir vous déconnecter ?.
            </p>
          </div>

          <div className="w-full flex items-center gap-x-4">
            <button
              className="w-full h-10 bg-red-600 text-white font-bold text-xs flex items-center justify-center rounded-md"
              onClick={() => HandleLogOut()}
            >
              Me deconnecter
            </button>
            <button
              className="w-full h-10 bg-gray-200 font-bold text-xs flex items-center justify-center rounded-md text-black"
              onClick={() => document.getElementById("LogOutModal").close()}
            >
              Annuler
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
