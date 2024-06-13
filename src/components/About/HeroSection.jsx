import React from "react";

function HeroSection() {
    return (<div className="relative h-[85vh] w-screen">
        <img src='https://plus.unsplash.com/premium_photo-1697730117545-0168fe77656f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="bgImg" className="absolute h-screen w-screen object-cover z-[-2]" />
        <div className="h-screen w-screen bg-black absolute opacity-15 z-[-2]"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] *:text-white w-[100vw]">
            <div className="text-4xl md:text-8xl font-medium font-sans">About UCS Prime .</div>

        </div>
    </div>)
}

export default HeroSection