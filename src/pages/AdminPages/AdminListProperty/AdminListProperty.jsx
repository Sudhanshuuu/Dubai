import React , {useState , useEffect} from "react";
import axios from "axios";
import SideBar from "../../../components/AdminPanel/SideBar";
import ListProperty from "../../../components/AdminPanel/ListProperty/ListProperty";

function AdminListProperty() {

    let [data, setData] = useState([]);
    let [filterData, setFilterData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/LISTaProperty`);
                setData(response.data);  // Assuming you want to save the response data to state
                setFilterData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchData();
    }, [])

    function handleChange(e) {
        const searchValue = e.target.value.toLowerCase();
        setFilterData(
            data.filter((d) => d.email.toLowerCase().includes(searchValue))
        );
    }

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col mt-12 md:ml-[16%] font-sans">
                <div className="flex my-6">
                    <div className="text-left font-medium  w-40 text-gray-500 py-2 ">List A Property</div>
                    <input name="email" type="text" placeholder="Search By Email" onChange={handleChange} className="mx-2 border px-2 rounded-xl w-[70%]" />
                </div>
                <ListProperty filterData={filterData} />
            </div>
        </div>
    )
}

export default AdminListProperty;

