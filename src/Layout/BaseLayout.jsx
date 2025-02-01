import React from "react";
import SidebarMenu from "../Components/SideBar/Sidebar";
import { Outlet } from "react-router-dom";
import Hearder from "../Components/He/Hearder";

export default function BaseLayout() {
  return (
    <div className="md:flex md:w-screen h-full md:h-screen overflow-hidden">
      <SidebarMenu />

      <div className="flex flex-col">
        <Hearder />
        <main className="outlet no-scrollbar overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
