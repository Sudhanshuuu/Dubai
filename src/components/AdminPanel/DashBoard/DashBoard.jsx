import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
    const [counts, setCounts] = useState({
        enquiry: 0,
        property: 0,
        applicants: 0,
        listEnquiry: 0,
    });

    useEffect(() => {
        const endpoints = [
            { key: 'enquiry', url: `${process.env.REACT_APP_API_URL}/enquiry` },
            { key: 'property', url: `${process.env.REACT_APP_API_URL}/realEstate` },
            { key: 'listEnquiry', url: `${process.env.REACT_APP_API_URL}/listAProperty` },
        ];

        async function fetchData() {
            try {
                const newCounts = { ...counts };

                for (const endpoint of endpoints) {
                    const response = await axios.get(endpoint.url);
                    newCounts[endpoint.key] = response.data.length;
                }

                setCounts(newCounts);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, []);

    return (<div className="relative px-6  *:font-sans w-[100vw] md:w-[100%]">
        <div className="text-left font-semibold flex flex-wrap justify-evenly items-center">
            <div className="text-xl font-light shadow-md border w-[80vw] m-[1%] px-[10px] py-[20px] md:mt-0 mt-[30px]">
                <div className=" text-base flex items-center">Enquiry</div>
                <div className=" text-4xl">{counts.enquiry}</div>
            </div>

            <div className="text-xl font-light shadow-md border w-[80vw] m-[1%] px-[10px] py-[20px]">
                <div className=" text-base">List A Property</div>
                <div className=" text-4xl">{counts.listEnquiry}</div>
            </div>
            <div className="text-xl font-light shadow-md border w-[80vw] m-[1%] px-[10px] py-[20px]">
                <div className=" text-base">Real Estate</div>
                <div className=" text-4xl">{counts.property}</div>
            </div>
        </div>
    </div>)
}

/*
    <div className="text-xl font-light shadow-md border w-[80vw] m-[1%] px-[10px] py-[20px]">
                <div className=" text-base">Job applicants</div>
                <div className=" text-4xl">{counts.applicants}</div>
            </div>
            */

export default Dashboard;