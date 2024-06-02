import React from "react";
import SideBar from "../../../components/AdminPanel/SideBar";
import CommercialRealEstate from "../../../components/AdminPanel/CommercialRealEstate/CommercialRealEstate";

function AdminCommercialRealEstate() {

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col mt-12 md:ml-[16%] font-sans">
                <div className="text-left py-5 ">Commercial Real Estate</div>
                <CommercialRealEstate />
            </div>
        </div>
    )
}

export default AdminCommercialRealEstate;