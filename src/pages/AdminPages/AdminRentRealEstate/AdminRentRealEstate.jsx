import React from "react";
import SideBar from "../../../components/AdminPanel/SideBar";
import RentRealEstate from "../../../components/AdminPanel/RentRealEstate/RentRealEstate";

function AdminRentRealEstate() {

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col mt-12 md:ml-[16%] font-sans">
                <div className="text-left py-5 ">Rent Real Estate</div>
                <RentRealEstate />
            </div>
        </div>
    )
}

export default AdminRentRealEstate;