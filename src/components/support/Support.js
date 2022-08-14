import React from 'react';
import './Support.css';
import sup_img from '../../assets/images/jog2.jpg';
import sup_img1 from '../../assets/images/rave_pic7.jpg';
import sup_img2 from '../../assets/images/jog.jpg';

const Support = () => {
    return (
        <section>
            <div className="container support__container">
                <div className="support__container-texts">
                    <ul className="bars">
                        <li className="bar"></li>
                        <li className="bar"></li>
                        <li className="bar"></li>
                        <li className="bar"></li>
                    </ul>
                    <h3>SUPPORTIVE COMMUNITY</h3>
                    <div className="texts">
                        <small>Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Cumque, ea!</small>
                    </div>

                    <a href="">JOIN NOW </a>

                </div>
                <div className="support__container-images">
                    <img className='img1' src={sup_img} alt="" />
                    <img className='img2' src={sup_img1} alt="" />
                    <img className='img3' src={sup_img2} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Support;
