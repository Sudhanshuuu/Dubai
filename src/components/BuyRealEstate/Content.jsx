import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import locationPng from "../../assets/location.png";
import bedPng from "../../assets/bed.png";
import scalePng from "../../assets/scale.png";
import bathtubPng from "../../assets/bathtub.png";
import { useNavigate } from "react-router-dom";

const Content = ({ data }) => {
    let [index, setIndex] = useState(0);
    let [buyRealEstate, setBuyRealEstate] = useState([]);

    useEffect(() => {
        setBuyRealEstate(() => { return data.filter((property) => { return property.status === "approved" }) })
    }, [data])

    let navigate = useNavigate();

    function handleClick(id) {
        navigate(`/property/${id}`)
    }

    return (
        <div className="relative *:font-sans">
            <div className="my-5 font-semibold text-left ml-[7%] text-3xl">
                Buying Real Estate
            </div>
            <div className={`${index === 0 ? 'flex opacity-100' : ' absolute flex top-0 w-[100%] opacity-0'} flex-col justify-center flex-wrap items-center duration-300 md:flex-row`}>
                {
                    buyRealEstate.slice(0, 9).map((property, key) => {
                        return (<div key={key} className="px-8 pb-8 w-[90vw] md:w-[45vw] lg:w-[30vw]" onClick={() => { handleClick(property._id) }}>
                            <div className="border border-[#E9E9E9]-400 bg-white py-4  rounded shadow-md ">
                                <div className="relative overflow-hidden">
                                    <img src={`${process.env.REACT_APP_IMG_URL}/${property.images[0]}`} alt="dubaiPhoto" className="h-[40vh] object-cover w-[100%] rounded-sm duration-300 hover:scale-[1.2]" />
                                </div>
                                <div className="flex flex-col px-[3%]">
                                    <div className="text-left text-xl font-semibold pt-4 text-black sm:text-[1.7rem]">{property.price} AED</div>
                                    <div className="flex my-1 py-2">
                                        <div className="flex flex-col">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.bedrooms}</div>
                                                <img src={bedPng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Beds</div>
                                        </div>
                                        <div className="flex flex-col mx-4">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.bathrooms}</div>
                                                <img src={bathtubPng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Bathrooms</div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.square}</div>
                                                <img src={scalePng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Square(ft)</div>
                                        </div>
                                    </div>
                                    <div className=" text-left font-semibold lg:text-lg">{property.name}</div>
                                    <div className="text-left py-2  text-sm text-gray-400 flex items-center"><img src={locationPng} alt="loaction" className="w-4 m-1" /><div>{property.location}</div></div>
                                </div>

                            </div>
                        </div>)
                    })}


            </div>
            <div className={`${index === 1 ? 'flex opacity-100' : ' absolute flex top-0 w-[100%] opacity-0'} flex-col justify-center flex-wrap items-center duration-300 md:flex-row`}>
                {
                    buyRealEstate.slice(9, 18).map((property, key) => {
                        return (<div key={key} className="px-8 pb-8 w-[90vw] md:w-[45vw] lg:w-[30vw]" onClick={() => { handleClick(property._id) }}>
                            <div className="border border-[#E9E9E9]-400 bg-white py-4  rounded shadow-md ">
                                <div className="relative overflow-hidden">
                                    <img src={`${process.env.REACT_APP_IMG_URL}/${property.images[0]}`} alt="dubaiPhoto" className="h-[40vh] object-cover w-[100%] rounded-sm duration-300 hover:scale-[1.2]" />
                                </div>
                                <div className="flex flex-col px-[3%]">
                                    <div className="text-left text-xl font-semibold pt-4 text-black sm:text-[1.7rem]">{property.price} AED</div>
                                    <div className="flex my-1 py-2">
                                        <div className="flex flex-col">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.bedrooms}</div>
                                                <img src={bedPng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Beds</div>
                                        </div>
                                        <div className="flex flex-col mx-4">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.bathrooms}</div>
                                                <img src={bathtubPng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Bathrooms</div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.square}</div>
                                                <img src={scalePng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Square(ft)</div>
                                        </div>
                                    </div>
                                    <div className=" text-left font-semibold lg:text-lg">{property.name}</div>
                                    <div className="text-left py-2  text-sm text-gray-400 flex items-center"><img src={locationPng} alt="loaction" className="w-4 m-1" /><div>{property.location}</div></div>
                                </div>

                            </div>
                        </div>)
                    })}


            </div>
            <div className={`${index === 2 ? 'flex opacity-100' : ' absolute flex top-0 w-[100%] opacity-0'} flex-col justify-center flex-wrap items-center duration-300 md:flex-row`}>
                {
                    buyRealEstate.slice(18, 27).map((property, key) => {
                        return (<div c key={key} lassName="px-8 pb-8 w-[90vw] md:w-[45vw] lg:w-[30vw]" onClick={() => { handleClick(property._id) }}>
                            <div className="border border-[#E9E9E9]-400 bg-white py-4  rounded shadow-md ">
                                <div className="relative overflow-hidden">
                                    <img src={`${process.env.REACT_APP_IMG_URL}/${property.images[0]}`} alt="dubaiPhoto" className="h-[40vh] object-cover w-[100%] rounded-sm duration-300 hover:scale-[1.2]" />
                                </div>
                                <div className="flex flex-col px-[3%]">
                                    <div className="text-left text-xl font-semibold pt-4 text-black sm:text-[1.7rem]">{property.price} AED</div>
                                    <div className="flex my-1 py-2">
                                        <div className="flex flex-col">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.bedrooms}</div>
                                                <img src={bedPng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Beds</div>
                                        </div>
                                        <div className="flex flex-col mx-4">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.bathrooms}</div>
                                                <img src={bathtubPng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Bathrooms</div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.square}</div>
                                                <img src={scalePng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Square(ft)</div>
                                        </div>
                                    </div>
                                    <div className=" text-left font-semibold lg:text-lg">{property.name}</div>
                                    <div className="text-left py-2  text-sm text-gray-400 flex items-center"><img src={locationPng} alt="loaction" className="w-4 m-1" /><div>{property.location}</div></div>
                                </div>

                            </div>
                        </div>)
                    })}


            </div>
            <div className={`${index === 3 ? 'flex opacity-100' : ' absolute flex top-0 w-[100%] opacity-0'} flex-col justify-center flex-wrap items-center duration-300 md:flex-row`}>
                {
                    buyRealEstate.slice(27, 36).map((property, key) => {
                        return (<div c key={key} lassName="px-8 pb-8 w-[90vw] md:w-[45vw] lg:w-[30vw]" onClick={() => { handleClick(property._id) }}>
                            <div className="border border-[#E9E9E9]-400 bg-white py-4  rounded shadow-md ">
                                <div className="relative overflow-hidden">
                                    <img src={`${process.env.REACT_APP_IMG_URL}/${property.images[0]}`} alt="dubaiPhoto" className="h-[40vh] object-cover w-[100%] rounded-sm duration-300 hover:scale-[1.2]" />
                                </div>
                                <div className="flex flex-col px-[3%]">
                                    <div className="text-left text-xl font-semibold pt-4 text-black sm:text-[1.7rem]">{property.price} AED</div>
                                    <div className="flex my-1 py-2">
                                        <div className="flex flex-col">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.bedrooms}</div>
                                                <img src={bedPng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Beds</div>
                                        </div>
                                        <div className="flex flex-col mx-4">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.bathrooms}</div>
                                                <img src={bathtubPng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Bathrooms</div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.square}</div>
                                                <img src={scalePng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Square(ft)</div>
                                        </div>
                                    </div>
                                    <div className=" text-left font-semibold lg:text-lg">{property.name}</div>
                                    <div className="text-left py-2  text-sm text-gray-400 flex items-center"><img src={locationPng} alt="loaction" className="w-4 m-1" /><div>{property.location}</div></div>
                                </div>

                            </div>
                        </div>)
                    })}


            </div>
            <div className={`${index === 4 ? 'flex opacity-100' : ' absolute flex top-0 w-[100%] opacity-0'} flex-col justify-center flex-wrap items-center duration-300 md:flex-row`}>
                {
                    buyRealEstate.slice(36, 45).map((property, key) => {
                        return (<div c key={key} lassName="px-8 pb-8 w-[90vw] md:w-[45vw] lg:w-[30vw]" onClick={() => { handleClick(property._id) }}>
                            <div className="border border-[#E9E9E9]-400 bg-white py-4  rounded shadow-md ">
                                <div className="relative overflow-hidden">
                                    <img src={`${process.env.REACT_APP_IMG_URL}/${property.images[0]}`} alt="dubaiPhoto" className="h-[40vh] object-cover w-[100%] rounded-sm duration-300 hover:scale-[1.2]" />
                                </div>
                                <div className="flex flex-col px-[3%]">
                                    <div className="text-left text-xl font-semibold pt-4 text-black sm:text-[1.7rem]">{property.price} AED</div>
                                    <div className="flex my-1 py-2">
                                        <div className="flex flex-col">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.bedrooms}</div>
                                                <img src={bedPng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Beds</div>
                                        </div>
                                        <div className="flex flex-col mx-4">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.bathrooms}</div>
                                                <img src={bathtubPng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Bathrooms</div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                <div>{property.square}</div>
                                                <img src={scalePng} alt="bed" className="w-8 h-8 mx-2" />
                                            </div>
                                            <div className="text-sm text-gray-400">Square(ft)</div>
                                        </div>
                                    </div>
                                    <div className=" text-left font-semibold lg:text-lg">{property.name}</div>
                                    <div className="text-left py-2  text-sm text-gray-400 flex items-center"><img src={locationPng} alt="loaction" className="w-4 m-1" /><div>{property.location}</div></div>
                                </div>

                            </div>
                        </div>)
                    })}


            </div>


            <div className=" relative mb-12npm mx-auto flex justify-center sm:my-[2%]">
                <div onClick={() => { setIndex(0) }} className="mx-2 px-6  py-5 border border-black duration-300  cursor-pointer hover:bg-black hover:text-white">1</div>
                <div onClick={() => { setIndex(1) }} className="mx-2 px-6  py-5 border border-black duration-300  cursor-pointer hover:bg-black hover:text-white">2</div>
                <div onClick={() => { setIndex(2) }} className="mx-2 px-6  py-5 border border-black duration-300  cursor-pointer hover:bg-black hover:text-white">3</div>
                <div onClick={() => { setIndex(3) }} className="mx-2 px-6  py-5 border border-black duration-300  cursor-pointer hover:bg-black hover:text-white">4</div>
                <div onClick={() => { setIndex(4) }} className="mx-2 px-6  py-5 border border-black duration-300  cursor-pointer hover:bg-black hover:text-white">5</div>
            </div>
        </div>

    );
};

export default Content;
