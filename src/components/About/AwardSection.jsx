import React from "react";
import AwardPng from "../../assets/Award.png";
import Award1Png from "../../assets/Award1.png";

function AwardSection() {
    return (<div className="py-[1%] bg-gray-100 flex justify-center flex-col">
        <div className="font-sans">Recent Images</div>
        <div className="text-3xl font-semibold lg:text-6xl font-sans">Awards & Recognition</div>
        <div className="flex justify-center flex-wrap py-[1%] *:font-sans">
            <div className="lg:w-[20%] sm:w-[45%] w-[80%] mx-2 ">
                <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="award"
                    className="w-[200px] h-[200px] object-cover mx-auto rounded-full transform duration-300 hover:scale-[1.1]" />
                <div className="text-2xl my-2">Radical Award</div>
                <div className=" text-sm">Septemder 2021</div>
            </div>
            <div className="lg:w-[20%] sm:w-[45%] w-[80%] mx-2 ">
                <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="award"
                    className="w-[200px] h-[200px] object-cover mx-auto rounded-full transform duration-300 hover:scale-[1.1]" />
                <div className="text-2xl my-2">Radical Award</div>
                <div className=" text-sm">Septemder 2021</div>
            </div>
            <div className="lg:w-[20%] sm:w-[45%] w-[80%] mx-2 ">
                <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="award"
                    className="w-[200px] h-[200px] object-cover mx-auto rounded-full transform duration-300 hover:scale-[1.1]" />
                <div className="text-2xl my-2">Radical Award</div>
                <div className=" text-sm">Septemder 2021</div>
            </div>
            <div className="lg:w-[20%] sm:w-[45%] w-[80%] mx-2 ">
                <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="award"
                    className="w-[200px] h-[200px] object-cover mx-auto rounded-full transform duration-300 hover:scale-[1.1]" />
                <div className="text-2xl my-2">Radical Award</div>
                <div className=" text-sm">Septemder 2021</div>
            </div>
        </div>
    </div>)
}

export default AwardSection;