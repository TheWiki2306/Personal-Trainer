import React from 'react';
import './footer.css';
import { GrInstagram } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container footer__container">
                    <ul className="permalinks">
                        <li><a href="#">Home</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="program">Programs</a></li>
                        <li><a href="testimonial">Testimonials</a></li>
                        <li><a href="contact">Contact</a></li>

                    </ul>

                    <div className="footer__socials">
                        <a href="https://intagram.com"><GrInstagram /></a>
                        <a href="https://twitter.com"><BsTwitter /></a>
                    </div>

                    <div className="footer__copyright">
                        <small> &copy; <span>GYM</span>online, 2022 .</small>
                    </div>
                </div>


            </div>
        </footer>
    )
}

export default Footer;
