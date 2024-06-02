import React from "react";
import SideBar from "../../../components/AdminPanel/SideBar";
import Contact from "../../../components/AdminPanel/Contact/Contact";

function AdminContact() {

    return (
        <div className="flex *:font-sans">
            <SideBar/>
            <div className="flex flex-col mt-12 md:ml-[16%]">
                <div className="text-left py-5">Contact</div>
              <Contact/>
            </div>
        </div>
    )
}

export default AdminContact;