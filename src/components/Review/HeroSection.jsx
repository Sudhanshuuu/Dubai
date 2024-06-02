import React from "react";

function HeroSection() {
    return (<div className="relative w-screen h-[85vh] *:font-sans">
        <img src='    https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="bgImg" className="absolute h-[85vh] w-screen object-cover z-[-2]" />
        <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-25"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] *:text-white w-[100%]">
            <div className="text-4xl md:text-6xl font-semibold ">Customer Reviews</div>
            <div className=" text-xl">We look forward to assisting you. Please share your query with us</div>
        </div>
    </div>)
}

export default HeroSection