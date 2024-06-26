import React from "react"

export default function CeoMessage() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-[2%] lg:overflow-visible lg:px-0 *:font-sans">

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7">Best Service in Whole Dubai</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700 text-left">
                In the market for a new place? We can help!
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 my-auto p-12 justify-center lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 *:text-left">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Whether you're looking to buy your dream
                investment or find the perfect rental,our team is here to assist you. We have a particular focus on
                off-plan properties, those that are still being developed. That means you can secure your future
                home at today's prices and be among the first to move in when it's complete.
              </p>
              <p className="mt-8">
                Our team members
                boast over decades of combined experience, so you can be confident you're getting expert
                guidance. We're also a forward-thinking group that believes in constantly learning and adapting
                to provide the best possible service to our clients. We want the best for you, that's why you
                should choose UCS Prime Real Estate
              </p>
              <p className="mt-8">
                First-time buyer, seasoned investor, or seeking your forever Dubai home? Our dedicated
                community sales consultants are here to guide you seamlessly through the entire process. We
                even offer a comprehensive step-by-step buyer's guide for a smooth and informative experience
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
