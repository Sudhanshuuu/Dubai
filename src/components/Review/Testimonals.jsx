import React, { useState } from "react";
import profileLogo from "../../assets/profileLogo.png";
import "./Testimonal.css";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {

    let [imgIndex, setImgindex] = useState(0);

    let [reviews, setReviews] = useState([{ comment: "The service in Dubai was absolutely exceptional. From the top-notch customer service to the impressive speed, every aspect was truly outstanding. Highly recommended!", user: "Samir" }
        , { comment: "The service in Dubai was absolutely exceptional. From the top-notch customer service to the impressive speed, every aspect was truly outstanding. Highly recommended! ", user: "Shyam" }
        , { comment: " The service in Dubai was absolutely exceptional. From the top-notch customer service to the impressive speed, every aspect was truly outstanding. Highly recommended!", user: "Rohit" }
        , { comment: "The service in Dubai was absolutely exceptional. From the top-notch customer service to the impressive speed, every aspect was truly outstanding. Highly recommended! ", user: "Raman" }
        , { comment: "The service in Dubai was absolutely exceptional. From the top-notch customer service to the impressive speed, every aspect was truly outstanding. Highly recommended! ", user: "Riya" }
        , { comment: " The service in Dubai was absolutely exceptional. From the top-notch customer service to the impressive speed, every aspect was truly outstanding. Highly recommended!", user: "Shreya" }]);


    const NextArrow = ({ onClick }) => {
        return (<div onClick={onClick} className="arrow next text-4xl">
            &gt;
        </div>)
    }
    const PrevArrow = ({ onClick }) => {
        return (<div onClick={onClick} className="arrow prev text-4xl">
            &lt;
        </div>)
    }

    const settings = {
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        speed: 500,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => { setImgindex(next) },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    };

    function handleSubmit(e) {
        e.preventDefault();
        let user = e.target.user.value;
        let comment = e.target.comment.value;
        console.log(reviews, user, comment);
        setReviews((preValue) => { return [...preValue, { comment, user }] })
    }


    return (<div className="review ">
        <div className="*:font-sans">

            <div className="review-head  font-bold font-sans">
                <div><span>{imgIndex + 1} </span>out of {reviews.length} Review</div>
                <div>WHAT OTHERS SAYS ABOUT <span>Real Estate</span></div>
            </div>
            <div className="review-body">
                <Slider {...settings}>

                    {
                        reviews.map((review, index) => {
                            return (<div key={index}>
                                <div className={imgIndex === index ? "slide activeSlide" : "slide"}>
                                    <div className="review-body-pp"><img src={profileLogo} alt="profile-pic" /></div>
                                    <div className="review-body-comment">{review.comment}</div>
                                    <div className="review-body-user">{review.user}</div>
                                </div>
                            </div>)
                        })
                    }
                </Slider>
            </div>
        </div>
    </div>)
}

export default Testimonial;