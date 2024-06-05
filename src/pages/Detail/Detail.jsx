import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import DetailPage from "../../components/Detail/DetailPage";

function Detail() {
    let [data, setData] = useState({name : '' , images : [''] , price: '' , desc : ''});
    let { id } = useParams();

    useEffect(() => {
        async function getData() {
            await axios.get(`${process.env.REACT_APP_API_URL}/realEstate/${id}`)
                .then(response => {
                    setData(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        }
        getData();
    }, [])

    return (<div>
        <Navbar />
        <DetailPage data={data} />
        <Footer />
    </div>)
}

export default Detail;