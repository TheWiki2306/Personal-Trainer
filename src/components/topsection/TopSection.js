import React from 'react'
import './topSection.css'
import Image_1 from '../../assets/images/topphoto.png'
import { FaGreaterThan } from 'react-icons/fa'

const TopSection = () => {
    return (
        <section>
            <div className="container top__container">

                <p>WELCOME TO THE</p>
                <h2>MOST WANTED</h2>
                <h2>ONLINE PERSONAL</h2>
                <h2>TRAINING</h2>

                <div className="top__container-join">
                    <a href="">JOIN NOW  <FaGreaterThan className='sign' /></a>
                </div>
                <div className="top__container-image">
                    <img src={Image_1} alt="" />
                </div>
            </div>
        </section>
    )
}

export default TopSection;
