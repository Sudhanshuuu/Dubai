import React , {useState} from "react";
import Card from "./Card/Card";

function Enquiry({ data = [] }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (<div className="flex flex-col mt-12 md:ml-[16%]">
        <div className="text-left py-5 font-sans">Enquiry</div>
        <Card data={data} onClick={openModal}/>
    </div>)
}

export default Enquiry;