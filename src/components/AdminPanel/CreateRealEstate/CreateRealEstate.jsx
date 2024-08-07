import React, { useState } from 'react';
import axios from 'axios';

export const CreateRealEstate = ({ isOpen, onClose }) => {

    let [feature, setFeature] = useState("");

    const [formData, setFormData] = useState({
        name: '',
        desc: '',
        message: '',
        price: '',
        type: '',
        display: '',
        location: '',
        state: '',
        longitude: '',
        latitude: '',
        bedrooms: '',
        bathrooms: '',
        floors: '',
        square: '',
        listedBy: '',
        email: '',
        number: '',
        features: [],
        images: [],
        propertyStatus: '',
        propertyType: ''
    });



    const handleChange = (e) => {
        if (e.target.name === 'images') {
            const files = Array.from(e.target.files);
            setFormData({ ...formData, [e.target.name]: files });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        console.log(formData)

        Object.keys(formData).forEach(key => {
            if (key === 'images') {
                for (let i = 0; i < formData.images.length; i++) {
                    data.append('images', formData.images[i]);
                }
            }
            else if (key === "features") {
                formData.features.forEach((feature) => {
                    data.append('features', feature);
                });
            }
            else {
                data.append(key, formData[key]);
            }
        });

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/realEstate`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Response Sent', response);
        } catch (error) {
            console.error('Error:', error);
        }

        onClose();
    };

    function handleFeatureSubmit(e) {
        e.preventDefault();
        console.log("a")
        setFormData((prev) => {
            const updatedFeatures = [...prev.features, feature];
            return { ...prev, features: updatedFeatures };
        });
        console.log(formData.features, 'a')
    }

    function handleChangeFeature(e) {
        setFeature(e.target.value);

    }

    function removeFeature(index) {
        setFormData((prev) => {
            const newFeatures = [...prev.features]; // Create a copy of the array
            newFeatures.splice(index, 1); // Use splice to remove the item
            return { ...prev, features: newFeatures }// Return the new array
        });
    }


    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 *:font-sans">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-8 rounded-lg shadow-lg z-50">
                        <div className="flex mb-3 justify-between">
                            <div className=' font-semibold'>Create</div>
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
                                        <label className='my-1 text-sm text-left' htmlFor='price'>Price <span className='text-red-500'>*</span></label>
                                        <input type="text" name='price' value={formData.price} onChange={handleChange} className='border px-2 w-[100%] py-1 rounded-xl text-sm' />
                                    </div>
                                    <div className='flex flex-1 flex-col my-[1px] mx-2'>
                                        <label className='my-1 text-sm text-left' htmlFor='images'>Images <span className='text-red-500'>*</span></label>
                                        <input type='file' name='images' id='images' multiple onChange={handleChange} className=" w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer   focus:outline-none" />
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='flex flex-1 flex-col my-[1px] mx-2'>
                                        <label className='my-1 text-sm text-left' htmlFor='desc'>Description <span className='text-red-500'>*</span></label>
                                        <textarea name='desc' value={formData.desc} onChange={handleChange} className='border px-2 w-[100%] py-1 h-[15vh] rounded-xl text-sm' />
                                    </div>
                                    <div className='flex flex-1 flex-col my-[1px] mx-2'>
                                        <label className='my-1 text-sm text-left' htmlFor='message'>Message</label>
                                        <textarea name='message' value={formData.message} onChange={handleChange} className='border px-2 w-[100%] py-1 h-[15vh] rounded-xl text-sm' />
                                    </div>
                                </div>
                                <div className='sm:flex'>
                                    <div className='flex flex-1'>
                                        <div className='flex flex-1 mx-4 my-[1px] flex-col'>
                                            <label className="my-1 text-sm text-left" htmlFor="type">Type <span className='text-red-500'>*</span></label>
                                            <select name="type" value={formData.type} onChange={handleChange} className='text-sm w-[100%] border px-2 py-1 rounded-xl'>
                                                <option value="">None</option>
                                                <option value="Rent">Rent</option>
                                                <option value="Buy">Buy</option>
                                                <option value="Commercial">Commercial</option>
                                                <option value="HolidayHome">Holiday Home</option>
                                                <option value="NewProject">New Project</option>
                                            </select>
                                        </div>
                                        <div className='flex flex-1 mx-4 my-[1px] flex-col'>
                                            <label className="my-1 text-sm text-left" htmlFor="display">Display</label>
                                            <select name="display" value={formData.display} onChange={handleChange} className='text-sm w-[100%] border px-2 py-1 rounded-xl'>
                                                <option value="">None</option>
                                                {formData.type === "Buy" && <>
                                                    <option value="handPick">HandPicked</option>
                                                    <option value="feature">Top 10 Properties</option>
                                                    <option value="view">Buy Property</option>
                                                </>}
                                                {formData.type === "Rent" && <>
                                                    <option value="handPick">HandPicked</option>
                                                </>}
                                                {formData.type === "Commercial" && <>
                                                    <option value="handPick">HandPicked</option>
                                                </>}
                                                {formData.type === "HolidayHome" && <>
                                                    <option value="handPick">HandPicked</option>
                                                </>}
                                                {formData.type === "NewProject" && <>
                                                </>}

                                            </select>
                                        </div>
                                        <div className='flex flex-1 mx-4 my-[1px] flex-col'>
                                            <label className="my-1 text-sm text-left" htmlFor="status">Status <span className='text-red-500'>*</span></label>
                                            <select name="status" value={formData.status} onChange={handleChange} className='text-sm w-[100%] border px-2 py-1 rounded-xl'>
                                                <option value="">None</option>
                                                <option value="approved">Approved</option>
                                                <option value="notApproved">Not Approved</option>
                                                <option value="expired">Expired</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex flex-1'>
                                        <div className='flex flex-1 mx-4 my-[1px] flex-col'>
                                            <label className="my-1 text-sm text-left" htmlFor="propertyStatus">Property Status <span className='text-red-500'>*</span></label>
                                            <select name="propertyStatus" value={formData.propertyStatus} onChange={handleChange} className='text-sm w-[100%] border px-2 py-1 rounded-xl'>
                                                <option value="">None</option>
                                                <option value="ready">Ready</option>
                                                <option value="offPlan">Off Plan</option>
                                            </select>
                                        </div>
                                        <div className='flex flex-1 mx-4 my-[1px] flex-col'>
                                            <label className="my-1 text-sm text-left" htmlFor="propertyType">Property Type <span className='text-red-500'>*</span></label>
                                            <select name="propertyType" value={formData.propertyType} onChange={handleChange} className='text-sm w-[100%] border px-2 py-1 rounded-xl'>
                                                <option value="">None</option>
                                                <option value="commercial">Commercial</option>
                                                <option value="residential">Residential</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-1 my-4'>
                                    <div className='flex-1 flex flex-col mx-4 '>
                                        <label className='my-1 text-sm text-left' htmlFor='location'>Location <span className='text-red-500'>*</span></label>
                                        <input className='border w-[100%] text-sm rounded-xl px-2 py-1' type="text" name='location' value={formData.location} onChange={handleChange} />
                                    </div>
                                    <div className='flex-1 flex flex-col mx-4 '>
                                        <label className='my-1 text-sm text-left' htmlFor='state'>State</label>
                                        <input className='border w-[100%] text-sm rounded-xl px-2 py-1' type="text" name='state' value={formData.state} onChange={handleChange} />
                                    </div>
                                    <div className='flex-1 flex-col mx-4 hidden sm:flex'>
                                        <label className='my-1 text-sm text-left' htmlFor='longitude'>Longitude</label>
                                        <input className='border w-[100%] text-sm rounded-xl px-2 py-1' type="text" name='longitude' value={formData.longitude} onChange={handleChange} />
                                    </div>
                                    <div className='flex-1 flex-col mx-4 hidden sm:flex'>
                                        <label className='my-1 text-sm text-left' htmlFor='latitude'>Latitude</label>
                                        <input className='border w-[100%] text-sm rounded-xl px-2 py-1' type="text" name='latitude' value={formData.latitude} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='flex flex-1 my-[1px]'>
                                    <div className='flex-1 flex flex-col  mx-1 sm:mx-4'>
                                        <label className='my-1 text-sm text-left' htmlFor='bedrooms'>Bedroom</label>
                                        <input className='w-[100%] text-sm border rounded-xl px-2 py-1' type="number" name='bedrooms' value={formData.bedrooms} onChange={handleChange} />
                                    </div>
                                    <div className='flex-1 flex flex-col  mx-1 sm:mx-4'>
                                        <label className='my-1 text-sm text-left' htmlFor='bathrooms'>Bathroom</label>
                                        <input className='w-[100%] text-sm border rounded-xl px-2 py-1' type="number" name='bathrooms' value={formData.bathrooms} onChange={handleChange} />
                                    </div>
                                    <div className='flex-1 flex flex-col  mx-1 sm:mx-4'>
                                        <label className='my-1 text-sm text-left' htmlFor='floors'>Floors</label>
                                        <input className='w-[100%] text-sm border rounded-xl px-2 py-1' type="number" name='floors' value={formData.floors} onChange={handleChange} />
                                    </div>
                                    <div className='flex-1 flex flex-col  mx-1 sm:mx-4'>
                                        <label className='my-1 text-sm text-left' htmlFor='square'>Square</label>
                                        <input className='w-[100%] text-sm border rounded-xl px-2 py-1' type="number" name='square' value={formData.square} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='hidden sm:flex flex-1 items-center my-4'>
                                    <label className='my-1 mx-4 text-left text-sm sm:block' htmlFor='feature'>Add Feature</label>
                                    <div className='flex'>
                                        <input className='border w-[100%]  px-2 py-1 text-sm' type="text" value={feature} onChange={handleChangeFeature} />
                                        <button onClick={handleFeatureSubmit} className=' px-2 bg-black text-white'>+</button>
                                    </div>
                                    <div className='flex overflow-x-scroll mx-4  w-[70%]' id="style-1">
                                        {formData.features.map((f, key) => {
                                            return (<div key={key} className='ml-4 flex items-center pl-2 whitespace-nowrap  text-sm text-left border'>
                                                <div>{f}</div>
                                                <div onClick={() => { removeFeature(key) }} className='ml-1 bg-black text-white px-3 py-1 cursor-pointer'>-</div>
                                            </div>)
                                        })}
                                    </div>
                                </div>
                                <div className='flex flex-col my-4 sm:flex-row'>
                                    <div className='flex flex-1 flex-col mx-4'>
                                        <label className='my-1 text-left text-sm' htmlFor='listedBy'>Listed By <span className=' text-red-500'>*</span></label>
                                        <input className='border my-[1px] w-[100%] rounded-xl px-2 py-1 text-sm' type="text" name='listedBy' value={formData.listedBy} onChange={handleChange} placeholder='Listed By' />
                                    </div>
                                    <div className='flex flex-1 flex-col mx-4'>
                                        <label className='hidden my-1 text-left text-sm sm:block' htmlFor='email'>Email <span className=' text-red-500'>*</span></label>
                                        <input className='border my-[1px] w-[100%] rounded-xl px-2 py-1 text-sm' type="text" name='email' value={formData.email} onChange={handleChange} placeholder='Email' />
                                    </div>
                                    <div className='flex flex-1 flex-col mx-4'>
                                        <label className='hidden my-1 text-left text-sm sm:block' htmlFor='number'>Number <span className=' text-red-500'>*</span></label>
                                        <input className='border my-[1px] w-[100%] rounded-xl px-2 py-1 text-sm' type="number" name='number' value={formData.number} onChange={handleChange} placeholder='Number' />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className='bg-black text-white px-4 py-2 rounded-lg text-sm duration-300 hover:bg-[#919191]'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};