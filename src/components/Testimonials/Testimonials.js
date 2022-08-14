import React from 'react';
import './Testimonials.css';
import tes_img from '../../assets/images/rave_pic7.jpg';
const Testimonials = () => {
    return (
        <section id='testimonial'>
            <div className="testimonials">
                <div className="container testimonials__container">
                    <ul className="bars">
                        <li className="bar"></li>
                        <li className="bar"></li>
                        <li className="bar"></li>
                        <li className="bar"></li>
                    </ul>

                    <h3>WHAT THEY SAY</h3>
                    <div className="texts">
                        <small>Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Cumque, ea!</small>
                    </div>
                    <div className="testimonies__container">
                        <div className="testimony__one">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, deleniti? Vero qui odio placeat? Quibusdam, assumenda debitis! Asperiores debitis, est, itaque reprehenderit sapiente fuga inventore dolorum adipisci aliquid eos deserunt.</p>
                            <div className="image__and__text">
                                <img src={tes_img} alt="" />
                                <div className="text">
                                    <small className="name">Micheal Farads</small>
                                    <small>Lorem ipsum dolor</small>
                                    <small>Lorem, ipsum.</small>
                                </div>
                            </div>
                        </div>

                        <div className="testimony__two">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, deleniti? Vero qui odio placeat? Quibusdam, assumenda debitis! Asperiores debitis, est, itaque reprehenderit sapiente fuga inventore dolorum adipisci aliquid eos deserunt.</p>
                            <div className="image__and__text">
                                <img src={tes_img} alt="" />
                                <div className="text">
                                    <small className="name">Stella Mark</small>
                                    <small>Lorem ipsum dolor</small>
                                    <small>Lorem, ipsum.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
