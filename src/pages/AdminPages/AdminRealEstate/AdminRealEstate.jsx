import React, { useEffect, useState } from "react";
import RealEstate from "../../../components/AdminPanel/RealEstate/RealEstate";
import SideBar from "../../../components/AdminPanel/SideBar";
import { CreateRealEstate } from "../../../components/AdminPanel/CreateRealEstate/CreateRealEstate";
import SearchBar from "../../../components/AdminPanel/SearchBar";

function AdminRealEstate() {

    const [modalOpen, setModalOpen] = useState(false);
    let [query, setQuery] = useState({});

    const openModal = () => {
        setModalOpen(true);
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col ml-3 mt-12 md:ml-[16%] font-sans">
                <SearchBar title="Real Estate" query={query} setQuery={setQuery} openModal={openModal} />
                <RealEstate createModal={modalOpen} query={query} />
            </div>
            <CreateRealEstate isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    )
}

export default AdminRealEstate;