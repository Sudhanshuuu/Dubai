import locationPng from "../../assets/location.png";
import bedPng from "../../assets/bed.png";
import scalePng from "../../assets/scale.png";
import bathtubPng from "../../assets/bathtub.png";
import { useState } from "react";
import Modal from "./Modal";


export default function DetailPage({ data }) {

  let [index, setIndex] = useState(0);
  let [modal, setModal] = useState(0);

  return (
    <div className="bg-white mx-[10vw] md:mt-[12vh] *:font-sans">
      <div className="pt-6">

        {/* Image gallery */}
        <div className="mx-auto mt-6 flex">
          <div>
            <img
              src={`${process.env.REACT_APP_IMG_URL}/${data.images[0]}`}
              alt={data.images[index]}
              className="h-[75vh] w-[90vw] object-cover object-center rounded-lg md:w-[50vw]"
            />
          </div>
          <div className="hidden relative md:block">
            <img
              src={`${process.env.REACT_APP_IMG_URL}/${data.images[1] ? data.images[1] : data.images[0]}`}
              alt={data.images[0]}
              className="h-[37vh] mx-2 mb-2 w-[30vw] object-cover object-center rounded-lg"
            />
            <div className="relative">
              <img
                src={`${process.env.REACT_APP_IMG_URL}/${data.images[2] ? data.images[2] : data.images[0]}`}
                alt={data.images[0]}
                className="h-[37vh] mx-2 mt-2 w-[30vw] object-cover object-center rounded-lg"
              />
              <div className=" absolute top-[-9px] bg-[#173D73] h-[37vh] mx-2 mt-2 w-[30vw] rounded-lg opacity-35 text-[5rem] z-10 flex items-center justify-center text-white"></div>
              <div className=" absolute top-[-9px] h-[37vh] mx-2 mt-2 w-[30vw] rounded-lg text-[5rem] z-10 flex items-center justify-center text-white font-light">+</div>
            </div>
          </div>
        </div>


        {/* Product info */}
        <div className="*:text-left mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-full lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 ">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-[1.7rem]">{data.name}</h1>
            <div className="text-left py-2  text-sm text-gray-400 flex items-center"><img src={locationPng} alt="loaction" className="w-4 m-1" /><div>{data.location}</div></div>
            <div className="text-left text-[2rem] font-semibold text-black">{data.price} AED</div>
            <div className="flex my-1 py-4 border border-l-0 border-r-0 ">
              <div className="flex flex-col">
                <div className=" text-xl text-left font-semibold flex justify-center items-center">
                  <div className="text-[#173d73]">{data.bedrooms}</div>
                  <img src={bedPng} alt="bed" className="w-14 h-12 mx-4" />
                </div>
                <div className="text-sm text-gray-400">Beds</div>
              </div>
              <div className="flex flex-col mx-4">
                <div className=" text-xl text-left font-semibold flex justify-center items-center">
                  <div className="text-[#173d73]">{data.bathrooms}</div>
                  <img src={bathtubPng} alt="bed" className="w-14 h-12 mx-4" />
                </div>
                <div className="text-sm text-gray-400">Bathrooms</div>
              </div>
              <div className="flex flex-col">
                <div className=" text-xl text-left font-semibold flex justify-center items-center">
                  <div className="text-[#173d73]">{data.square}</div>
                  <img src={scalePng} alt="bed" className="w-14 h-12 mx-4" />
                </div>
                <div className="text-sm text-gray-400">Square(ft)</div>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <div className='flex'>
              <div className='overflow-hidden rounded-xl mx-1'>
                <img
                  src={`${data.images[0] ? `${process.env.REACT_APP_IMG_URL}/${data.images[0]}` : `${process.env.REACT_APP_IMG_URL}/${data.images[0]}`}`}
                  alt={data.images[0]}
                  className=" h-24 w-24 border-2 border-gray-400 mx-auto object-cover object-center rounded-xl duration-200 hover:scale-[1.1]"
                  onClick={() => { setIndex(0) }}
                />
              </div>

              <div className='overflow-hidden rounded-xl mx-1'>
                <img
                  src={`${data.images[1] ? `${process.env.REACT_APP_IMG_URL}/${data.images[1]}` : `${process.env.REACT_APP_IMG_URL}/${data.images[0]}`}`}
                  alt={data.images[1]}
                  className=" h-24 w-24 border-2 border-gray-400 mx-auto object-cover object-center rounded-xl duration-200 hover:scale-[1.1]"
                  onClick={() => { setIndex(1) }}
                />
              </div>

              <div className='overflow-hidden rounded-xl mx-1'>
                <img
                  src={`${data.images[2] ? `${process.env.REACT_APP_IMG_URL}/${data.images[2]}` : `${process.env.REACT_APP_IMG_URL}/${data.images[0]}`}`}
                  alt={data.images[2]}
                  className=" h-24 w-24 border-2 border-gray-400 mx-auto object-cover object-center rounded-xl duration-200 hover:scale-[1.1]"
                  onClick={() => { setIndex(2) }}
                />
              </div>

              <div className='overflow-hidden rounded-xl mx-1'>
                <img
                  src={`${data.images[3] ? `${process.env.REACT_APP_IMG_URL}/${data.images[3]}` : `${process.env.REACT_APP_IMG_URL}/${data.images[0]}`}`}
                  alt={data.images[3]}
                  className=" h-24 w-24 border-2 border-gray-400 mx-auto object-cover object-center rounded-xl duration-200 hover:scale-[1.1]"
                  onClick={() => { setIndex(3) }}
                />
              </div>
            </div>
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl mt-2 tracking-tight text-gray-900 font-semibold">{data.price} AED</p>
              {/* Colors */}

              <button
                onClick={()=>{setModal(true)}}
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-[#173D73] bg-[#173D73] duration-200  px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-[#173D73] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                List Property
              </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>Brought to you by UCS Prime  this exquisite and unique {data.bedrooms} bedroom building is located in the prestigious {data.location}</div>

            {/* Description and details */}

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">

                  <li className="text-gray-400">
                    <span className="text-gray-600">Location - {data.location}</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">State - {data.state}</span>
                  </li>

                  <li className="text-gray-400">
                    <span className="text-gray-600">Bathrooms - {data.bathrooms}</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Bedrooms - {data.bedrooms}</span>
                  </li>

                  <li className="text-gray-400">
                    <span className="text-gray-600">Size - {data.square} </span>
                  </li>


                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4  flex flex-wrap">
                {
                  data.features
                  &&
                  (data.features.map((f) => {
                    return <p className="text-sm mx-1 text-gray-600">{f} |</p>
                  }))
                }
              </div>
            </div>
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{data.desc}</p>
              </div>
            </div>
            <div className='mt-10 text-sm'>
              Additional Points
              <div className='flex mt-4'>
                <div className='mr-6 text-gray-600 text-sm'>
                  Listed By - {data.listedBy}
                </div>
                <div className='mr-6 text-gray-600 text-sm'>
                  Email - {data.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal ? <Modal setModal={setModal} id={data._id} name={data.name}/> : ""}
    </div>
  )
}
