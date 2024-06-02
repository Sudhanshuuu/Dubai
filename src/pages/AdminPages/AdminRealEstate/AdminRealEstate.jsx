import React from "react";
import SideBar from "../../../components/AdminPanel/SideBar";
import RealEstate from "../../../components/AdminPanel/RealEstate/RealEstate";

function AdminRealEstate() {

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col mt-12 md:ml-[16%] font-sans">
                <div className="text-left py-5 ">Real Estate</div>
                <RealEstate />
            </div>
        </div>
    )
}

export default AdminRealEstate;