import React from "react";
import SideBar from "../../../components/AdminPanel/SideBar";
import ListProperty from "../../../components/AdminPanel/ListProperty/ListProperty";

function AdminListProperty() {

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col mt-12 md:ml-[16%] font-sans">
                <div className="text-left py-5 ">List A Property</div>
                <ListProperty />
            </div>
        </div>
    )
}

export default AdminListProperty;