import React, { useState, useEffect } from "react";
import SideBar from "../../../components/AdminPanel/SideBar";
import Dashboard from "../../../components/AdminPanel/DashBoard/DashBoard";

function AdminDashboard() {



    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col mt-12 md:ml-[16%] font-sans">
                <div className="flex my-6">
                    <div className="text-left font-medium text-gray-500 py-2 ">DashBoard</div>
                </div>
                <Dashboard />
            </div>
        </div>
    )
}

export default AdminDashboard;