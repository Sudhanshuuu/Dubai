import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header";
import axios from "axios";
import HeroSection from "../../components/NewProjects/HeroSection";
import Content from "../../components/NewProjects/Content";
import Footer from "../../components/Footer";

function NewProjects() {

    let [data, setData] = useState([]);
    let [filterData, setFilterData] = useState([]);
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        async function getData() {
            await axios.get(`${process.env.REACT_APP_API_URL}/realEstate?type=NewProject`)
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
                    return prev.filter((property) => {  return parseInt(property.price) > parseInt(searchResult.price) });
                });
            }
            if (searchResult.complete !== "Any") {
                setFilterData((prev) => {
                    return prev.filter((property) => {  return  property.propertyStatus === searchResult.complete  });
                });
            }
    }


    return (<div>
        <Navbar />
        <HeroSection searchResult={searchResult} setSearchResult={setSearchResult} handleFilter={handleFilter} />
        <Content data={filterData} />
        <Footer />
    </div>)
}

export default NewProjects;