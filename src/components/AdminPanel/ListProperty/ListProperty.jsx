import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListProperty = () => {


    let [data, setData] = useState([]);
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3005/listaproperty");
                console.log(response.data);
                setData(response.data);  // Assuming you want to save the response data to state
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, [])

    const handleResize = () => {
        setMobileView(window.innerWidth <= 768);
    };

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg *:font-sans">
            <table className="w-[83vw] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className={`text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ${mobileView ? 'ml-[5vw] flex w-[90vw]' : ''}`}>
                    <tr>
                        <th scope="col" className="px-3 py-3 text-sm">Name</th>
                        <th scope="col" className="px-3 py-3 text-sm">Email</th>
                        <th scope="col" className="px-3 py-3 text-sm">Phone</th>
                        <th scope="col" className="px-3 py-3 text-sm">Date</th>
                        <th scope="col" className="px-3 py-3 text-sm">Status</th>
                        <th scope="col" className="px-3 py-3 text-sm">Time</th>
                        <th scope="col" className="px-3 py-3 text-sm">Address</th>
                        <th scope="col" className="px-3 py-3 text-sm">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0
                                ? 'bg-white dark:bg-gray-900'
                                : 'bg-gray-50 dark:bg-gray-800'
                                } border-b dark:border-gray-700  ${mobileView ? ' ml-[5vw] flex flex-col' : ''} `}
                        >
                            <th
                                scope="row"
                                className=" py-4 font-medium whitespace-nowrap dark:text-white"
                            >
                                <td className="px-3 py-4  w-[150px]">{data.name}</td>
                            </th>
                            <td className="px-3 py-4">{data.email}</td>
                            <td className="px-3 py-4">{data.phone}</td>
                            <td className="px-3 py-4 w-28">{data.date}</td>
                            <td className="px-3 py-4">
                                {data.status === "pending" ? <span className=' text-white text-[0.75rem] py-2 px-3 bg-green-400 rounded-xl'>Pending</span> : ''}
                                {data.status === "inprogress" ? <span className=' text-white text-[0.75rem] py-2 px-3 bg-yellow-400 rounded-xl'>In progress</span> : ''}
                                {data.status === "postpopned" ? <span className=' text-white text-[0.75rem] py-2 px-3 bg-red-400 rounded-xl'>PostPoned</span> : ''}
                            </td>
                            <td className="px-3 py-4">{data.time}</td>
                            <td className="px-3 py-4">{data.address}</td>
                            <td className="px-3 py-4">{data.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default ListProperty;