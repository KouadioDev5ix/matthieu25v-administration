import React from "react";
import SidebarMenu from "../Components/SideBar/Sidebar";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <div className="flex w-screen h-screen bg-slate-50 overflow-hidden">
      <SidebarMenu />
      <main className="outlet no-scrollbar bg-slate-50 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
