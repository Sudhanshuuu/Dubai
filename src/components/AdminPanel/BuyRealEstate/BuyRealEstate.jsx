import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EditRealEstate } from '../EditRealEstate/EditRealEstate';

const BuyRealEstate = ({ createModal }) => {
    const [data, setData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3005/realEstate?type=Buy");
                setData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [modalOpen, createModal]);

    const openModal = (id) => {
        setSelectedId(id);
        setModalOpen(true);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3005/realEstate?type=Buy");
            setData(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    async function deleteProperty(id) {
        try {
            await axios.delete(`http://localhost:3005/realEstate/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="relative overflow-x-auto shadow-md md:rounded-lg">
            <table className="w-[80vw] ml-[8vw] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 sm:ml-0">
                <thead className={`text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 `}>
                    <tr>
                        <th scope="col" className="px-6 py-3 text-sm">Name</th>
                        <th scope="col" className="px-6 py-3 text-sm hidden lg:table-cell">Type</th>
                        <th scope="col" className="px-6 py-3 text-sm hidden lg:table-cell">Description</th>
                        <th scope="col" className="px-6 py-3 text-sm hidden lg:table-cell">Price</th>
                        <th scope="col" className="px-6 py-3 hidden text-sm sm:table-cell">Status</th>
                        <th scope="col" className="px-6 py-3 text-sm hidden md:table-cell">Display</th>
                        <th scope="col" className="px-6 py-3 text-sm hidden md:table-cell">Message</th>
                        <th scope="col" className="py-3 text-sm">Operations</th>
                    </tr>
                </thead>
                <tbody >
                    {data.map((data, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'} border-b dark:border-gray-700`}
                        >
                            <th scope="row" className="font-medium whitespace-nowrap dark:text-white">
                                <td className="px-6 py-2 md:py-4">{data.name}</td>
                            </th>
                            <td className="px-6 py-2 hidden md:py-4 lg:table-cell">{data.type}</td>
                            <td className="px-6 py-2 hidden md:py-4 lg:table-cell">{data.desc.slice(0, 20)} ....</td>
                            <td className="px-6 py-2 hidden md:py-4 lg:table-cell">{data.price}</td>
                            <td className="px-6 py-2 hidden md:py-4 sm:table-cell">
                                {data.status === "approved" && <span className='text-white py-2 px-4 bg-green-400 rounded-xl'>approved</span>}
                                {data.status === "notApproved" && <span className='text-white py-2 px-4 bg-yellow-400 rounded-xl'>not approved</span>}
                                {data.status === "expired" && <span className='text-white py-2 px-4 bg-red-400 rounded-xl'>Expired</span>}
                            </td>
                            <td className="px-6 py-2 hidden md:py-4 md:table-cell">
                                {data.display === "view" && <span>Buying Properties</span>}
                                {data.display === "feature" && <span>Top 10 Properties</span>}
                                {data.display === "handPick" && <span >Handpicked Properties</span>}
                            </td>
                            <td className="px-6 py-2 hidden md:py-4 md:table-cell">{data.message.slice(0, 10)} ....</td>
                            <td className="px-4 flex flex-col py-2 md:px-0 md:py-2">
                                <button className='bg-gray-600 px-4 py-2 my-1 mx-1 text-white rounded-xl duration-300 hover:bg-[#919191]' onClick={() => openModal(data._id)}>Edit/View More</button>
                                <button className='bg-red-500 px-4 py-2 my-1 mx-1 text-white rounded-xl duration-300 hover:bg-red-400' onClick={() => deleteProperty(data._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {modalOpen && <EditRealEstate isOpen={modalOpen} id={selectedId} onClose={() => setModalOpen(false)} />}
        </div>
    );
};

export default BuyRealEstate;
