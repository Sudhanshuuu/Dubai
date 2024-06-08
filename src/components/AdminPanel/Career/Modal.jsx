import React, { useState, useEffect } from 'react';
import axios from 'axios';

let Modal = ({ isOpen, onClose, id }) => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        status: '',
        phone : '',
        age : '',
        position : ''
    });

    useEffect(() => {
        async function getData() {
            await axios.get(`${process.env.REACT_APP_API_URL}/career/${id}`)
                .then(response => {
                    setFormData(response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        }
        getData();

    }, [isOpen]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/career/${id}`, formData);
            console.log('Response Sent', response);
        } catch (error) {
            console.error('Error:', error);
        }

        onClose();
    }


    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 *:font-sans">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-8 rounded-lg shadow-lg z-50">
                        <div className="flex mb-3 justify-between">
                            <div className=' font-semibold'>Edit</div>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className='w-[90vw] sm:w-[80vw]' enctype="multipart/form-data">
                                <div className='flex'>
                                    <div className='flex flex-1 flex-col my-[1px] mx-2'>
                                        <label className='my-1 text-sm text-left' htmlFor='name'>Name <span className='text-red-500'>*</span></label>
                                        <input type="text" name='name' value={formData.name} onChange={handleChange} className='border px-2 w-[100%] py-1 rounded-xl text-sm' />
                                    </div>
                                    <div className='flex flex-1 flex-col my-[1px] mx-2'>
                                        <label className='my-1 text-sm text-left' htmlFor='email'>Email <span className='text-red-500'>*</span></label>
                                        <input type="text" name='email' value={formData.email} onChange={handleChange} className='border px-2 w-[100%] py-1 rounded-xl text-sm' />
                                    </div>
                                    <div className='flex flex-1 flex-col my-[1px] mx-2'>
                                        <label className='my-1 text-sm text-left' htmlFor='phone'>Phone <span className='text-red-500'>*</span></label>
                                        <input type="text" name='phone' value={formData.phone} onChange={handleChange} className='border px-2 w-[100%] py-1 rounded-xl text-sm' />
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='flex flex-1 flex-col my-[1px] mx-2'>
                                        <label className='my-1 text-sm text-left' htmlFor='age'>Age <span className='text-red-500'>*</span></label>
                                        <input type="text" name='age' value={formData.age} onChange={handleChange} className='border px-2 w-[100%] py-1 rounded-xl text-sm' />
                                    </div>
                                    <div className='flex flex-1 flex-col my-[1px] mx-2'>
                                        <label className='my-1 text-sm text-left' htmlFor='position'>Position <span className='text-red-500'>*</span></label>
                                        <input type="text" name='position' value={formData.position} onChange={handleChange} className='border px-2 w-[100%] py-1 rounded-xl text-sm' />
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='flex flex-1 flex-col my-[1px] mx-2'>
                                        <label className='my-1 text-sm text-left' htmlFor='message'>Message</label>
                                        <textarea name='message' value={formData.message} onChange={handleChange} className='border px-2 w-[100%] py-1 h-[15vh] rounded-xl text-sm' />
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-1 mx-2 my-[1px] flex-col'>
                                        <label className="my-1 text-sm text-left" htmlFor="status">Status <span className='text-red-500'>*</span></label>
                                        <select name="status" value={formData.status} onChange={handleChange} className='text-sm w-[100%] border px-2 py-1 rounded-xl'>
                                            <option value="">None</option>
                                            <option value="pending">Pending</option>
                                            <option value="inprogress">In Progress</option>
                                            <option value="postponed">Postponed</option>
                                        </select>
                                    </div>
                                </div>
                    
                                <div className=' text-center'>
                                    <button type="submit" className='bg-black text-white my-2 px-4 py-2 rounded-lg text-sm duration-300 hover:bg-[#919191]'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;