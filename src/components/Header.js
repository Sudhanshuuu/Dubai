import React, { useState } from "react";
import gif from "../assets/gif.gif";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  let [toggle, setToggle] = useState(true);
  let [dropdownVisibleAbout, setDropdownVisibleAbout] = useState(false);
  let [dropdownVisibleContact, setDropdownVisibleContact] = useState(false);
  let [dropdownVisibleService, setDropdownVisibleService] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  function handleDropdownMouseEnter(item) {
    if (item === "about") {
      setDropdownVisibleAbout(true);
    }
    if (item === "contact") {
      setDropdownVisibleContact(true)
    }
    if (item === "service") {
      setDropdownVisibleService(true)
    }
  }

  function handleDropdownMouseLeave(item) {
    if (item === "about") {
      setDropdownVisibleAbout(false);
    }
    if (item === "contact") {
      setDropdownVisibleContact(false);
    }
    if (item === "service") {
      setDropdownVisibleService(false);
    }
  }

  return (
    <div className="absolute top-0 w-full z-30 bg-black border-b md:bg-white *:font-sans">
      <div className="w-full text-right py-2 block md:hidden">
        <div className="mx-6 text-3xl text-white flex flex-col" onClick={handleClick}>
          <div className="my-[2.5px] w-6 h-[1.5px] bg-white"></div>
          <div className="my-[2.5px] w-6 h-[1.5px] bg-white"></div>
          <div className="my-[2.5px] w-6 h-[1.5px] bg-white"></div>
        </div>
      </div>
      <div
        className={`flex justify-around items-center text-center flex-col h-[96vh] text-white transition ease-in-out w-screen  absolute ${toggle ? "hidden" : ""} bg-black md:bg-transparent md:flex-row md:h-auto md:text-black  md:flex md:relative`}
      >
        <div className="flex justify-around items-center flex-grow font-semibold flex-col md:flex-row">
          <a href="/" className="duration-200 hover:text-[#919191] text-base font-light md:hidden">Home</a>
          <a href="/buyRealEstate" className="duration-200 hover:text-[#919191] text-base font-light">Buy</a>
          <a href="/rentRealEstate" className="duration-200 hover:text-[#919191] text-base font-light">Rent</a>
          <a href="/commercialRealEstate" className="duration-200 hover:text-[#919191] text-base font-light">Commercial</a>
          <a href="/holidayRealEstate" className="duration-200 hover:text-[#919191] text-base font-light">Holiday Home</a>
          <a href="/newProjects" className="duration-200 hover:text-[#919191] text-base font-light">New Projects</a>
          <a href="#" className="duration-200 hover:text-[#919191] text-base font-light">Areas</a>
          <a href='/' className="hover:text-indigo-600 hidden md:block">
            <img
              src={gif}
              alt=""
              className=" w-52"
            />
          </a>
          <a href="/aboutUs" className="duration-200 hover:text-[#919191] text-base font-light">About Us</a>
          <a href="/communities" className="duration-200 hover:text-[#919191] text-base font-light">Communities</a>
        
          <a href="/career" className="duration-200 hover:text-[#919191] text-base font-light">Career</a>
          <a href="/contact" className="duration-200 hover:text-[#919191] text-base font-light">Contact Us</a>

          <button onClick={() => { navigate('/listProperty') }} className="mx-1 my-2 text-base font-light px-6 py-2 transition duration-200 border border-[#173D73] rounded-lg  text-white bg-[#173D73] hover:bg-white hover:text-[#173D73]">
            <span className=" font-semibold">+</span> List Your Property
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

/*

    <div
            onMouseEnter={() => { handleDropdownMouseEnter("contact") }}
            onMouseLeave={() => { handleDropdownMouseLeave("contact") }}
            className=" md:h-12 flex flex-col items-center justify-center"
          >
            <div
              className="duration-200 hover:text-[#919191] text-base font-light relative"
            >
              Contact
              {dropdownVisibleContact && (
                <div className="absolute top-full left-[-90%] mt-1 w-40 bg-white text-black rounded-md">
                  <a href="/enquiry" className="block px-4 py-2 hover:bg-gray-200">General Enquiry</a>
                  <a href="/Contact" className="block px-4 py-2 hover:bg-gray-200">Contact Us</a>
                  <a href="/listProperty" className="block px-4 py-2 hover:bg-gray-200">List A Property</a>
                </div>
              )}
            </div>
          </div>

            <div
            onMouseEnter={() => { handleDropdownMouseEnter("about") }}
            onMouseLeave={() => { handleDropdownMouseLeave("about") }}
            className=" md:h-12 flex flex-col items-center justify-center"
          >
            <div
              className="duration-200 hover:text-[#919191] text-base font-light relative"
            >
              Know Us
              {dropdownVisibleAbout && (
                <div className="absolute top-full left-[-90%] mt-1 w-40 bg-white text-black rounded-md">
                  <a href="/Communities" className="block px-4 py-2 hover:bg-gray-200">Communities</a>
                  <a href="/Team" className="block px-4 py-2 hover:bg-gray-200">Team</a>
                  <a href="/Review" className="block px-4 py-2 hover:bg-gray-200">Review</a>
                  <a href="/Video" className="block px-4 py-2 hover:bg-gray-200">Video</a>
                </div>
              )}
            </div>
          </div>
*/