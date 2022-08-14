import React from 'react'
import './nav.css';

const Nav = () => {
    return (
        <nav>
            <div id="nav">
                <div className="container nav__container">
                    <small>GYM <span>online.</span> </small>

                    <div className="nav__container-list">
                        <ul className='list-items'>
                            <li><a href="#program">Program</a></li>
                            <li><a href="#testimonial">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li ><a href="" className='sign'>Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
