

import React, { useEffect, useState } from "react";
import RentRealEstate from "../../../components/AdminPanel/RentRealEstate/RentRealEstate";
import SideBar from "../../../components/AdminPanel/SideBar";
import { CreateRealEstate } from "../../../components/AdminPanel/CreateRealEstate/CreateRealEstate";
import SearchBar from "../../../components/AdminPanel/SearchBar";

function AdminRentRealEstate() {

    const [modalOpen, setModalOpen] = useState(false);
    let [query, setQuery] = useState({});

    const openModal = () => {
        setModalOpen(true);
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col ml-3 mt-12 md:ml-[16%] font-sans">
                <SearchBar title="Rent Real Estate" query={query} setQuery={setQuery} openModal={openModal} />
                <RentRealEstate createModal={modalOpen} query={query} />
            </div>
            <CreateRealEstate isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    )
}

export default AdminRentRealEstate;