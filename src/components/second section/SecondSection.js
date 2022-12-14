import React from 'react'
import './secondSection.css'
import S_image from '../../assets/images/gym_1.jpg'
import S_image1 from '../../assets/images/cardio.jpg'
import S_image2 from '../../assets/images/abs.jpg'
import S_image3 from '../../assets/images/weights2.jpg'
import S_image4 from '../../assets/images/jog2.jpg'
import S_image5 from '../../assets/images/leg2.jpg'
import S_image6 from '../../assets/images/butt1.jpg'
import { BsChevronCompactRight } from 'react-icons/bs'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const data = [
    {
        image: S_image,
        type: 'YOGA',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: S_image1,
        type: 'CARDIO AND HIT',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: S_image2,
        type: 'ABS',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: S_image3,
        type: 'STRENGTH',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: S_image4,
        type: 'LONG JOG',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: S_image5,
        type: 'LEG EXERCISE',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: S_image6,
        type: 'BUTT EXERCISE',
        description: 'Lorem ipsum dolor sit amet.',
    }
]
const SecondSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 414,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <section>
            <Slider className="container second__container" {...settings} >
                {
                    data.map(({ image, type, description }, index) => {
                        return (
                            <div key={index} className="second__container-cards">
                                <img src={image} alt="" />
                                <h3> <a href="">{type}<BsChevronCompactRight className='arrow' /></a></h3>
                                <small>{description}</small>
                            </div>

                        )
                    })
                }
            </Slider>
        </section>
    )
}

export default SecondSection;
