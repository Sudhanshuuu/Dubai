import React from "react";
import SideBar from "../../../components/AdminPanel/SideBar";
import HolidayRealEstate from "../../../components/AdminPanel/HolidayRealEstate/HolidayRealEstate";

function AdminHolidayRealEstate() {

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col mt-12 md:ml-[16%] font-sans">
                <div className="text-left py-5 ">Holiday Home Real Estate</div>
                <HolidayRealEstate/>
            </div>
        </div>
    )
}

export default AdminHolidayRealEstate;