import React , {useState , useEffect} from "react";
import axios from "axios";
import SideBar from "../../../components/AdminPanel/SideBar";
import Career from "../../../components/AdminPanel/Career/Career";

function AdminCareer() {

    let [data, setData] = useState([]);
    let [filterData , setFilterData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/career`);
                setData(response.data);  // Assuming you want to save the response data to state
                setFilterData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchData();
    }, [])

    function handleChange(e){
        const searchValue = e.target.value.toLowerCase();
        setFilterData(
            data.filter((d) => d.email.toLowerCase().includes(searchValue))
        );
    }

    return (
        <div className="flex">
            <SideBar />
            <div className="flex flex-col md:mt-12 md:ml-[16%] font-sans">
               <div className="flex my-6">
                <div className="text-left font-medium text-gray-500 py-2 ">Career</div>
                <input name="email" type="text" placeholder="Search By Email" onChange={handleChange}className="mx-4 border px-2 rounded-xl w-[100%]"/>
               </div>
                <Career filterData={filterData}/>
            </div>
        </div>
    )
}

export default AdminCareer;