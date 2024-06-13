import React from "react";
import { useNavigate } from "react-router-dom";
function Useful() {

    let navigate = useNavigate();

    return (<div className="py-[3%] bg-white">
        <div className="flex flex-col">
            <h6 className="font-sans">Explore More</h6>
            <h2 className="text-2xl font-sans mb-8 md:text-6xl font-semibold">
                {" "}
                You may find useful
            </h2>
            <div className="flex justify-evenly flex-wrap *:font-sans">
                <div className="w-[80%] my-[2%] md:w-[30%] md:my-0" onClick={()=>{navigate("/career")}}>
                    <div className="flex flex-col border shadow-md transform duration-200 hover:scale-[1.1]">
                        <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Carrer" />
                        <div className="px-4 py-[5%]">
                            <div className="flex justify-between">
                                <div className="text-lg font-semibold my-1">Carrer</div>
                                <div className="text-lg">&rarr;</div>
                            </div>
                            <div className="text-left text-sm">
                                Be a Part of Dubai Communities with the help of our fast growing brokage
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[80%] my-[2%] md:w-[30%] md:my-0" onClick={()=>{navigate("/career")}}>
                    <div className="flex flex-col border shadow-md transform duration-200 hover:scale-[1.1]">
                        <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" alt="Carrer" />
                        <div className="px-4 py-[5%]">
                            <div className="flex justify-between">
                                <div className="text-lg font-semibold my-1">Carrer</div>
                                <div className="text-lg">&rarr;</div>
                            </div>
                            <div className="text-left text-sm">
                                Be a Part of Dubai Communities with the help of our fast growing brokage
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] my-[2%] md:w-[30%] md:my-0" onClick={()=>{navigate("/career")}}>
                    <div className="flex flex-col border shadow-md transform duration-200 hover:scale-[1.1]">
                        <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Carrer" />
                        <div className="px-4 py-[5%]">
                            <div className="flex justify-between">
                                <div className="text-lg font-semibold my-1">Carrer</div>
                                <div className="text-lg">&rarr;</div>
                            </div>
                            <div className="text-left text-sm">
                                Be a Part of Dubai Communities with the help of our fast growing brokage
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Useful;