import React, { useState } from "react";
import profileLogo from "../../assets/profileLogo.png";
import "./Testimonal.css";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {

    let [imgIndex, setImgindex] = useState(0);

    let [reviews, setReviews] = useState([{ comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic fuga amet? Totam consectetur quis error nobis omnis magni impedit, quas tempore harum veritatis maxime labore ipsum hic sit molestias?", user: "Samir" }
        , { comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic fuga amet? Totam consectetur quis error nobis omnis magni impedit, quas tempore harum veritatis maxime labore ipsum hic sit molestias? ", user: "Shyam" }
        , { comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic fuga amet? Totam consectetur quis error nobis omnis magni impedit, quas tempore harum veritatis maxime labore ipsum hic sit molestias?", user: "Rohit" }
        , { comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic fuga amet? Totam consectetur quis error nobis omnis magni impedit, quas tempore harum veritatis maxime labore ipsum hic sit molestias? ", user: "Raman" }
        , { comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic fuga amet? Totam consectetur quis error nobis omnis magni impedit, quas tempore harum veritatis maxime labore ipsum hic sit molestias? ", user: "Riya" }
        , { comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic fuga amet? Totam consectetur quis error nobis omnis magni impedit, quas tempore harum veritatis maxime labore ipsum hic sit molestias?", user: "Shreya" }]);


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