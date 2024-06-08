import React, { useEffect, useState } from "react";
import SideBar from "../../../components/AdminPanel/SideBar";
import { CreateRealEstate } from "../../../components/AdminPanel/CreateRealEstate/CreateRealEstate";
import SearchBar from "../../../components/AdminPanel/SearchBar";
import NewProject from "../../../components/AdminPanel/NewProjectRealEstate/NewProject";

function AdminNewProject() {

    const [modalOpen, setModalOpen] = useState(false);
    let [query, setQuery] = useState({});

    const openModal = () => {
        setModalOpen(true);
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col ml-3 mt-12 md:ml-[16%] font-sans">
                <SearchBar title="New Projects Estate" query={query} setQuery={setQuery} openModal={openModal} />
                <NewProject createModal={modalOpen} query={query} />
            </div>
            <CreateRealEstate isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    )
}

export default AdminNewProject;
