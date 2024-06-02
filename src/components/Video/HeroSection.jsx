import React from "react";

function HeroSection() {
    return (<div className="relative h-[85vh] w-screen bg-black  *:font-sans">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] *:text-white">
            <div>Dubai’s Estate Video</div>
            <div className="text-4xl my-[2%] font-semibold md:text-6xl">Stay up to date with<br /> the latest Property Videos..</div>
            <div className="flex items-center justify-center w-[100vw] flex-wrap">
                <button className="py-4 px-6  border border-white text-white mx-2 my-2 text-sm duration-200 hover:border hover:border-white">ALL VIDEOS</button>
                <button className="py-4 px-6  border border-black text-white mx-2 my-2 text-sm duration-200 hover:border hover:border-white">SALE</button>
                <button className="py-4 px-6  border border-black text-white mx-2 my-2 text-sm duration-200 hover:border hover:border-white">RENT</button>
                <button className="py-4 px-6  border border-black text-white mx-2 my-2 text-sm duration-200 hover:border hover:border-white">TEAMS</button>
                <button className="py-4 px-6  border border-black text-white mx-2 my-2 text-sm duration-200 hover:border hover:border-white">PODCASTS</button>
            </div>
        </div>
    </div>)
}

export default HeroSection