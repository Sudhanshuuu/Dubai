import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header";
import axios from "axios";
import HeroSection from "../../components/CommercialRealEstate/HeroSection";
import Content from "../../components/CommercialRealEstate/Content";
import Footer from "../../components/Footer";

function CommercialRealEstate() {

    let [data, setData] = useState([]);
    let [filterData, setFilterData] = useState([]);
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        async function getData() {
            await axios.get(`${process.env.REACT_APP_API_URL}/realEstate?type=Commercial`)
                .then(response => {
                    setData(response.data.filter((property) => { return property.status === "approved" }));
                    setFilterData(response.data.filter((property) => { return property.status === "approved" }));
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        }
        getData();



    }, []);

    function handleFilter(searchResult) {
        setFilterData(data)
        if (searchResult.city !== "Dubai") {
            if (searchResult.city) {
                setFilterData((prev) => {
                    return prev.filter((property) => property.location.includes(searchResult.city));
                });
            }
            if (searchResult.bedrooms !== "Any") {
                setFilterData((prev) => {
                    return prev.filter((property) => { return parseInt(property.bedrooms) === parseInt(searchResult.bedrooms) });
                });
            }
            if (searchResult.price !== "Any") {
                setFilterData((prev) => {
                    return prev.filter((property) => { return parseInt(property.price) > parseInt(searchResult.price) });
                });
            }
        }
    }




    return (<div>
        <Navbar />
        <HeroSection searchResult={searchResult} setSearchResult={setSearchResult} handleFilter={handleFilter} />
        <Content data={filterData} />
        <Footer />
    </div>)
}

export default CommercialRealEstate;