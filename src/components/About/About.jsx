import React from "react";

function AboutCom() {
    return (<section className="bg-black py-20 *:font-sans">
        <div className="container mx-auto px-4">
            <div className=" mx-auto text-center">
                <p className="text-lg text-gray-300 mb-6">
                    Have a question or want to learn more about our services? Feel free
                    to reach out to us.
                </p>
                    <div className="mx-auto text-2xl md:text-4xl font-bold text-center text-white mb-8 md:w-[60%]">
                    Real Estate are the Brightest and Fastest growing Real Estate Brokerage Firm in Dubai.
                    </div>
          <div className="*:text-white flex justify-evenly flex-col md:flex-row">
            <div className="flex flex-col items-center my-[2%] md:my-0">
                <div className="text-4xl sm:text-6xl">160+</div>
                <div>Property Expert  Here</div>
            </div>
            <div className="flex flex-col items-center my-[2%] md:my-0">
                <div className="text-4xl sm:text-6xl">4.9/5</div>
                <div>Google Rating</div>
            </div>
            <div className="flex flex-col items-center my-[2%] md:my-0">
                <div className="text-4xl sm:text-6xl">3500+</div>
                <div>Property Transcations</div>
            </div>
          </div>
            </div>
        </div>
    </section>)
}

export default AboutCom;