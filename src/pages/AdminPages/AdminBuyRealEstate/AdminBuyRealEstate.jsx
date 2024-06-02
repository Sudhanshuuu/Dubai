import React, { useEffect, useState } from "react";
import SideBar from "../../../components/AdminPanel/SideBar";
import BuyRealEstate from "../../../components/AdminPanel/BuyRealEstate/BuyRealEstate";
import { CreateRealEstate } from "../../../components/AdminPanel/CreateRealEstate/CreateRealEstate";

function AdminBuyRealEstate() {

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col mt-12 md:ml-[16%] font-sans">
                <div className="flex justify-between text-left py-5 ">
                    <div>Buy Real Estate</div>
                    <button onClick={openModal}>Create</button>
                </div>
                <BuyRealEstate createModal={modalOpen} />
            </div>
            <CreateRealEstate isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    )
}

export default AdminBuyRealEstate;