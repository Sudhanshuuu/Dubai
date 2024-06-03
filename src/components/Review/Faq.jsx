import React, { useState } from "react";

const Faq = () => {
    return (
        <section className="relative z-20 overflow-hidden bg-white dark:bg-dark py-[2%] *:font-sans">
            <div className=" mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex flex-wrap w-[90%] sm:w-[80%]">
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="What documents do I require to buy in Dubai?"
                            text="Required Documents: Passport, Emirates ID, Sale Contract (Form F/MOU), No
Objection Certificate (NOC), Proof of Payment, Original Title Deed, Verification
Documents. Additional Considerations: Power of Attorney for remote transactions,
Additional Documents for Mortgage Financing.
."
                        />
                        <AccordionItem
                            header="How much do I need to pay as a security deposit?"
                            text="5% of the annual rent for unfurnished and 10% for furnished properties."
                        />
                        <AccordionItem
                            header="Can I sublet my property once I have moved in?"
                            text="The law permits tenants to lease the property to sub-tenants for profit or other legitimate
purposes, provided this does not harm the original landlord or property owner. However,
one key condition must be met: the written consent of the original landlord is mandatory
for the tenant to proceed with subleasing.
"
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="How can my Landlord increase the rent"
                            text="- If your rent is between 11 percent and 20 per cent below the average market rate, a
maximum increase of five per cent is permitted. If your rent is between 21 percent and 30
per cent below the average market rate, a maximum increase of 10 per cent is permitted.
"
                        />
                        <AccordionItem
                            header="How is responsible of maintenance ?"
                            text="- The landlord.."
                        />
                        <AccordionItem
                            header="Can I break the lease early?"
                            text="The penalty is usually between one and two months' rent. In your situation, your landlord
is asking what is normal in these circumstances."
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[-1]">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#3056D3" stop-opacity="0.36" />
                            <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                            <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default Faq;

const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false);

    const handleToggle = (event) => {
        setActive(!active);
    };
    return (
        <div className="mb-8 w-full rounded-lg bg-white shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] py-3 lg:px-6 xl:px-8">
            <button
                className={`faq-btn flex w-full text-left`}
                onClick={() => handleToggle()}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
                    <svg
                        className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""
                            }`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>

                <div className="w-full">
                    <h4 className="mt-1 text-sm md:text-lg font-semibold text-dark dark:text-white">
                        {header}
                    </h4>
                </div>
            </button>

            <div
                className={`pl-[62px] duration-200 ease-in-out text-left ${active ? "block" : "hidden"
                    }`}
            >
                <p className="py-3 leading-relaxed text-body-color dark:text-dark-6 text-sm">
                    {text}
                </p>
            </div>
        </div>
    );
};
