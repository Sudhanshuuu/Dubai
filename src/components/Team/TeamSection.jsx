import React, { useState } from "react";

const Team = () => {

    let [index, setIndex] = useState(0);

    return (
        <section className="py-[2%] dark:bg-dark *:font-sans">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Our Team
                            </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                Our Awesome Team
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className={`${index === 0 ? ' opacity-100' : 'absolute top-0 left-[5%] opacity-0'} mx-auto w-[90%] flex flex-wrap justify-center duration-300`}>
                        <TeamCard
                            name="Coriss Ambady"
                            profession="Sale Director"
                            imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
                        />
                        <TeamCard
                            name="Coriss Ambady"
                            profession="Sale Director"
                            imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
                        />
                        <TeamCard
                            name="Coriss Ambady"
                            profession="Sale Director"
                            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
                        />
                        <TeamCard
                            name="Coriss Ambady"
                            profession="Sale Director"
                            imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
                        />
                    </div>
                    <div className={`${index === 1 ? ' opacity-100' : 'absolute top-0 left-[5%] opacity-0'} mx-auto w-[90%] flex flex-wrap justify-center duration-300`}>
                        <TeamCard
                            name="Coriss Ambady"
                            profession="Sale Director"
                            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
                        />
                        <TeamCard
                            name="Coriss Ambady"
                            profession="Sale Director"
                            imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
                        />
                        <TeamCard
                            name="Coriss Ambady"
                            profession="Sale Director"
                            imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
                        />
                        <TeamCard
                            name="Coriss Ambady"
                            profession="Sale Director"
                            imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
                        />
                    </div>
                </div>
            </div>
            <div className=" relative mx-auto mb-[5%] flex justify-center sm:mb-0">
                <div onClick={() => { setIndex(0) }} className="mx-2 px-6  py-5 border border-black duration-300  cursor-pointer hover:bg-black hover:text-white">1</div>
                <div onClick={() => { setIndex(1) }} className="mx-2 px-6  py-5 border border-black duration-300  cursor-pointer hover:bg-black hover:text-white">2</div>
                <div onClick={() => { setIndex(2) }} className="mx-2 px-6  py-5 border border-black duration-300  cursor-pointer hover:bg-black hover:text-white">3</div>
                <div onClick={() => { setIndex(3) }} className="mx-2 px-6  py-5 border border-black duration-300  cursor-pointer hover:bg-black hover:text-white">4</div>
                <div onClick={() => { setIndex(4) }} className="mx-2 px-6  py-5 border border-black duration-300  cursor-pointer hover:bg-black hover:text-white">5</div>
            </div>
        </section>
    );
};

export default Team;

const TeamCard = ({ imageSrc, name, profession }) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                    <div className="relative overflow-hidden rounded-lg">
                        <img src={imageSrc} alt="" className="w-full" />
                        <div className="absolute bottom-5 left-0 w-full text-center">
                            <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
                                <h3 className="text-base font-semibold text-dark dark:text-white">
                                    {name}
                                </h3>
                                <p className="text-xs text-body-color dark:text-dark-6">
                                    {profession}
                                </p>
                                <div>
                                    <span className="absolute bottom-0 left-0">
                                        <svg
                                            width={61}
                                            height={30}
                                            viewBox="0 0 61 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx={16}
                                                cy={45}
                                                r={45}
                                                fill="#13C296"
                                                fillOpacity="0.11"
                                            />
                                        </svg>
                                    </span>
                                    <span className="absolute right-0 top-0">
                                        <svg
                                            width={20}
                                            height={25}
                                            viewBox="0 0 20 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="0.706257"
                                                cy="24.3533"
                                                r="0.646687"
                                                transform="rotate(-90 0.706257 24.3533)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="6.39669"
                                                cy="24.3533"
                                                r="0.646687"
                                                transform="rotate(-90 6.39669 24.3533)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="12.0881"
                                                cy="24.3533"
                                                r="0.646687"
                                                transform="rotate(-90 12.0881 24.3533)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="17.7785"
                                                cy="24.3533"
                                                r="0.646687"
                                                transform="rotate(-90 17.7785 24.3533)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="0.706257"
                                                cy="18.6624"
                                                r="0.646687"
                                                transform="rotate(-90 0.706257 18.6624)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="6.39669"
                                                cy="18.6624"
                                                r="0.646687"
                                                transform="rotate(-90 6.39669 18.6624)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="12.0881"
                                                cy="18.6624"
                                                r="0.646687"
                                                transform="rotate(-90 12.0881 18.6624)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="17.7785"
                                                cy="18.6624"
                                                r="0.646687"
                                                transform="rotate(-90 17.7785 18.6624)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="0.706257"
                                                cy="12.9717"
                                                r="0.646687"
                                                transform="rotate(-90 0.706257 12.9717)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="6.39669"
                                                cy="12.9717"
                                                r="0.646687"
                                                transform="rotate(-90 6.39669 12.9717)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="12.0881"
                                                cy="12.9717"
                                                r="0.646687"
                                                transform="rotate(-90 12.0881 12.9717)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="17.7785"
                                                cy="12.9717"
                                                r="0.646687"
                                                transform="rotate(-90 17.7785 12.9717)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="0.706257"
                                                cy="7.28077"
                                                r="0.646687"
                                                transform="rotate(-90 0.706257 7.28077)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="6.39669"
                                                cy="7.28077"
                                                r="0.646687"
                                                transform="rotate(-90 6.39669 7.28077)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="12.0881"
                                                cy="7.28077"
                                                r="0.646687"
                                                transform="rotate(-90 12.0881 7.28077)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="17.7785"
                                                cy="7.28077"
                                                r="0.646687"
                                                transform="rotate(-90 17.7785 7.28077)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="0.706257"
                                                cy="1.58989"
                                                r="0.646687"
                                                transform="rotate(-90 0.706257 1.58989)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="6.39669"
                                                cy="1.58989"
                                                r="0.646687"
                                                transform="rotate(-90 6.39669 1.58989)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="12.0881"
                                                cy="1.58989"
                                                r="0.646687"
                                                transform="rotate(-90 12.0881 1.58989)"
                                                fill="#000000"
                                            />
                                            <circle
                                                cx="17.7785"
                                                cy="1.58989"
                                                r="0.646687"
                                                transform="rotate(-90 17.7785 1.58989)"
                                                fill="#000000"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
