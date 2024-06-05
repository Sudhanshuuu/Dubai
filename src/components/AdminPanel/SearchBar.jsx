import React from "react";

function SearchBar({openModal , query , setQuery , title}) {
    return (<div>
        <div className="flex justify-evenly items-center text-left py-5  ">
            <div className="hidden sm:block w-[100%] font-medium text-gray-500">{title}</div>
            <input className="w-[100%] border px-6 py-1 rounded-lg" name="name" placeholder="Search By Name" value={query.name} onChange={(e) => { setQuery({ ...query, name: e.target.value }) }} />
            <select className="mx-[2%] w-[50%] border px-2 py-1 rounded-lg text-[#919191]" name="display" value={query.display} onChange={(e) => { setQuery({ ...query, display: e.target.value }) }} >
                <option value="">Display</option>
                <option value="view">Buying Properties</option>
                <option value="feature">Top 10 Properties</option>
                <option value="handPick">Handpicked Properties</option>
            </select>
            <button className="ml-[2%] w-[50%] bg-green-400 text-white py-1 rounded-lg" onClick={openModal}>Create</button>
        </div>
    </div>)
}

export default SearchBar;