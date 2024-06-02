import React, { useEffect } from "react";
import axios from "axios";
import SideBar from "../../../components/AdminPanel/SideBar";
import Enquiry from "../../../components/AdminPanel/Enquiry/Enquiry";
import { useState } from "react";

function AdminEnquiry() {

    let [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3005/enquiry");
                console.log(response.data);
                setData(response.data);  // Assuming you want to save the response data to state
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, [])

    return (
        <div className="flex">
            <SideBar />
            <Enquiry data={data} />

        </div>
    )
}

export default AdminEnquiry;