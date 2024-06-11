
export default function DetailPage({ data }) {


  return (
    <div className="bg-white md:mt-[5vh] *:font-sans">
      <div className="pt-6">

        {/* Image gallery */}
        <div className="mx-auto mt-6 lg:block">
          <img
            src={`${process.env.REACT_APP_IMG_URL}/${data.images[0]}`}
            alt={data.images[0]}
            className="h-[75vh] w-[100%] mx-auto object-cover object-center"
          />
        </div>


        {/* Product info */}
        <div className="*:text-left mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-full lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 ">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <div className='flex'>
              <div className='overflow-hidden rounded-xl mx-1'>
                <img
                  src={`${data.images[0] ? `${process.env.REACT_APP_IMG_URL}/${data.images[0]}` : `${process.env.REACT_APP_IMG_URL}/${data.images[0]}`}`}
                  alt={data.images[0]}
                  className=" h-24 w-24 border-2 border-gray-400 mx-auto object-cover object-center rounded-xl duration-200 hover:scale-[1.1]"
                />
              </div>

              <div className='overflow-hidden rounded-xl mx-1'>
                <img
                  src={`${data.images[1] ? `${process.env.REACT_APP_IMG_URL}/${data.images[1]}` : `${process.env.REACT_APP_IMG_URL}/${data.images[0]}`}`}
                  alt={data.images[1]}
                  className=" h-24 w-24 border-2 border-gray-400 mx-auto object-cover object-center rounded-xl duration-200 hover:scale-[1.1]"
                />
              </div>

              <div className='overflow-hidden rounded-xl mx-1'>
                <img
                  src={`${data.images[2] ? `${process.env.REACT_APP_IMG_URL}/${data.images[2]}` : `${process.env.REACT_APP_IMG_URL}/${data.images[0]}`}`}
                  alt={data.images[2]}
                  className=" h-24 w-24 border-2 border-gray-400 mx-auto object-cover object-center rounded-xl duration-200 hover:scale-[1.1]"
                />
              </div>

              <div className='overflow-hidden rounded-xl mx-1'>
                <img
                  src={`${data.images[3] ? `${process.env.REACT_APP_IMG_URL}/${data.images[3]}` : `${process.env.REACT_APP_IMG_URL}/${data.images[0]}`}`}
                  alt={data.images[3]}
                  className=" h-24 w-24 border-2 border-gray-400 mx-auto object-cover object-center rounded-xl duration-200 hover:scale-[1.1]"
                />
              </div>
            </div>
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl mt-2 tracking-tight text-gray-900 font-semibold">{data.price} AED</p>
            <form className="mt-2">
              {/* Colors */}

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-[#173D73] bg-[#173D73] duration-200  px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-[#173D73] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                List Property
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{data.desc}</p>
              </div>
            </div>

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
                    console.log(f)
                    return <p className="text-sm mx-1 text-gray-600">{f} |</p>
                  }))
                }
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
    </div>
  )
}
