import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header";
import axios from "axios";
import Content from "../../components/Area/Content";
import Footer from "../../components/Footer";
import HeroSection from "../../components/Area/HeroSection";

function Area() {

    let [data, setData] = useState([]);
    let [dataLocation, setDataLocation] = useState([]);
    let [filterData, setFilterData] = useState([]);
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        async function getData() {
            await axios.get(`${process.env.REACT_APP_API_URL}/realEstate`)
                .then(response => {
                    setData(response.data);
                    const approvedProperties = response.data.filter(property => property.status === "approved");
                    const uniqueLocations = Array.from(new Set(approvedProperties.map(property => property.location)));

                    setDataLocation(uniqueLocations);
                    setFilterData(uniqueLocations);
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        }
        getData();



    }, []);

    function handleFilter(searchResult) {
        setFilterData(data)
        console.log(searchResult)
        if (searchResult.city !== "Dubai") {
            setFilterData((prev) => {
                return prev.filter((property) => property.location.includes(searchResult.city));
            });
        }
        if (searchResult.propertyType !== "Any") {
            setFilterData((prev) => {
                return prev.filter((property) => { return property.propertyType === searchResult.propertyType });
            });
        }
        if (searchResult.price !== "Any") {
            setFilterData((prev) => {
                return prev.filter((property) => { return parseInt(property.price) > parseInt(searchResult.price) });
            });
        }
        if (searchResult.complete !== "Any") {
            setFilterData((prev) => {
                return prev.filter((property) => { return property.propertyStatus === searchResult.complete });
            });
        }
    }




    return (<div>
        <Navbar />
        <HeroSection searchResult={searchResult} setSearchResult={setSearchResult} handleFilter={handleFilter} />
        <Content data={data} uniqueLocations={dataLocation} />
        <Footer />
    </div>)
}

export default Area;