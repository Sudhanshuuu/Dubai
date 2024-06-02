import React, { useState , useEffect} from 'react';

const Card = ({ data }) => {

  const [mobileView, setMobileView] = useState(false);

  const handleResize = () => {
    setMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg *:font-sans">
      <table className="w-[83vw] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className={`text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ${mobileView ? 'ml-[5vw] flex w-[90vw]' : ''}`}>
          <tr>
            <th scope="col" className="px-6 py-3 text-sm">Name</th>
            <th scope="col" className="px-6 py-3 text-sm">Email</th>
            <th scope="col" className="px-6 py-3 text-sm">Phone</th>
            <th scope="col" className="px-6 py-3 text-sm">Status</th>
            <th scope="col" className="px-6 py-3 text-sm">Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0
                ? 'bg-white dark:bg-gray-900'
                : 'bg-gray-50 dark:bg-gray-800'
                } border-b dark:border-gray-700  ${mobileView ? 'ml-[5vw] flex flex-col' : ''} `}
            >
              <th
                scope="row"
                className=" py-4 font-medium whitespace-nowrap dark:text-white"
              >
              <td className="px-6 py-4">{data.name}</td>
              </th>
              <td className="px-6 py-4">{data.email}</td>
              <td className="px-6 py-4">{data.phone}</td>
              <td className="px-6 py-4">
                {data.status === "pending" ? <span className=' text-white py-2 px-4 bg-green-400 rounded-xl'>Pending</span> : ''}
                {data.status === "inprogress" ? <span className=' text-white py-2 px-4 bg-yellow-400 rounded-xl'>In progress</span> : ''}
                {data.status === "postpopned" ? <span className=' text-white py-2 px-4 bg-red-400 rounded-xl'>PostPoned</span> : ''}
              </td>
              <td className="px-6 py-4">{data.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default Card;