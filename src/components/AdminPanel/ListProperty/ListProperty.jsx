import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from './Modal';

const ListProperty = ({filterData}) => {


    let [modal, setModal] = useState(false);
    let [data, setData] = useState([]);
    const [mobileView, setMobileView] = useState(false);

    async function fetchData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/listAProperty`);
            setData(response.data);  // Assuming you want to save the response data to state
        } catch (error) {
            console.error('Error:', error);
        }
    }


    const openModal = () => {
        setModal(true);
    };
    const onClose = () => {
        setModal(false);
        fetchData();
    };


    useEffect(() => {
        setData(filterData)
    }, [filterData])

    const handleResize = () => {
        setMobileView(window.innerWidth <= 768);
    };

    
    async function deleteQuery(id) {
        console.log(id)
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/listAProperty/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error:', error);
        }
    }

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
                        <th scope="col" className="px-3 py-3 text-sm">Address</th>
                        <th scope="col" className="px-3 py-3 text-sm">Phone</th>
                        <th scope="col" className="px-3 py-3 text-sm">Date</th>
                        <th scope="col" className="px-3 py-3 text-sm">Status</th>
                        <th scope="col" className="px-3 py-3 text-sm">Time</th>
                        <th scope="col" className="px-3 py-3 text-sm">Operations</th>
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
                                <td className="px-3 py-4 ">{data.name}</td>
                            </th>
                            <td className="px-3 py-4">{data.email}</td>
                            <td className="px-3 py-4">{data.address.slice(0, 20)} ...</td>
                            <td className="px-3 py-4">{data.phone}</td>
                            <td className="px-3 py-4 w-28">{data.date}</td>
                            <td className="px-3 py-4">
                                {data.status === "pending" ? <span className=' text-white text-[0.75rem] py-2 px-3 bg-green-400 rounded-xl'>Pending</span> : ''}
                                {data.status === "inprogress" ? <span className=' text-white text-[0.75rem] py-2 px-3 bg-yellow-400 rounded-xl'>In progress</span> : ''}
                                {data.status === "postponed" ? <span className=' text-white text-[0.75rem] py-2 px-3 bg-red-400 rounded-xl'>PostPoned</span> : ''}
                            </td>
                            <td className="px-3 py-4">{data.time}</td>

                            <td className="px-4 flex flex-col py-2 md:px-0 md:py-2">
                                <button className='bg-gray-600 px-4 py-2 my-1 mx-1 text-white rounded-xl duration-300 hover:bg-[#919191]' onClick={openModal}>Edit/View More</button>
                                <button className='bg-red-500 px-4 py-2 my-1 mx-1 text-white rounded-xl duration-300 hover:bg-red-400' onClick={()=>{deleteQuery(data._id)}}>Delete</button>
                            </td>
                            <Modal isOpen={modal} onClose={onClose} id={data._id} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default ListProperty;