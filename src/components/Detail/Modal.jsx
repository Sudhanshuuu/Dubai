import React from "react";
import axios from "axios";

const Modal = ({ setModal, id ,name }) => {

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            "email": e.target.email.value,
            "name": e.target.name.value,
            "message": e.target.message.value,
            "phone": e.target.phone.value,
            "propertyId": id,
            "propertyName" : name

        };
        console.log(formData)
        await axios.post(`${process.env.REACT_APP_API_URL}/enquiry`, formData)
            .then(response => {
                console.log("Response Sent");

            })
            .catch(error => {
                console.error('Error:', error);
            });

        setModal(false)
    }



    const closeModal = () => {
        setModal(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg relative w-[60vw]">
                <button onClick={closeModal} className="absolute top-2 right-2">
                    &times;
                </button>
                <form onSubmit={handleSubmit}>
                    <ContactInputBox
                        type="text"
                        name="name"
                        placeholder="Your Name"


                    />
                    <ContactInputBox
                        type="text"
                        name="email"
                        placeholder="Your Email"

                    />
                    <ContactInputBox
                        type="text"
                        name="phone"
                        placeholder="Your Phone"

                    />
                    <ContactTextArea
                        row="6"
                        placeholder="Your Message"
                        name="message"


                    />
                    <div>
                        <button
                            type="submit"
                            className="w-full rounded border border-black bg-black p-3 text-white transition  hover:bg-white hover:text-black"

                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Modal;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
    return (
        <>
            <div className="mb-6">
                <textarea
                    rows={row}
                    placeholder={placeholder}
                    name={name}
                    className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    defaultValue={defaultValue}
                />
            </div>
        </>
    );
};

const ContactInputBox = ({ type, placeholder, name }) => {
    return (
        <>
            <div className="mb-6">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className="w-full rounded border-b border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
            </div>
        </>
    );
};
