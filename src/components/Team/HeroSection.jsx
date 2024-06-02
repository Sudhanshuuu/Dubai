import React from "react";
import SearchIcon from "../../assets/search.png";

function HeroSection() {
    return (<div className="relative w-screen h-[85vh] *:font-sans">
        <div className=" absolute top-0 bottom-0 right-0 left-0 bg-black opacity-25"></div>
        <img src='https://images.unsplash.com/photo-1615747476328-41153cf6da54?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="bgImg" className="absolute h-[85vh] w-screen object-cover z-[-2]" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] *:text-white">
            <div>Meet The Team</div>
            <div className="text-4xl my-[1%] font-semibold md:text-6xl w-[100vw]">Meet the Real Estate team.</div>
            <div className="flex items-center mx-auto py-[1%] rounded  w-[80%] bg-white md:w-[40%]">
                <img src={SearchIcon} alt="searchIcon" className="mx-2 w-6" />
                <input type="text" name="search" id="search" className="pl-[1%] pr-[10%] py-[1%] placeholder:text-[#969696] rounded" placeholder="Search" />
            </div>
        </div>
    </div>)
}

export default HeroSection