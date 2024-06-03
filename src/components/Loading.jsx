import React from "react";
import gif from "../assets/gif.gif";

function Loading() {
    return (<div className="relative h-screen w-screen">
        <img
            src={gif}
            alt="gif"
            className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />

    </div>)
}

export default Loading;