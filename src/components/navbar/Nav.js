import React from 'react'
import './nav.css';

const Nav = () => {
    return (
        <nav>
            <div className="container nav__container">
                <small>GYM <span>online.</span> </small>

                <div className="nav__container-list">
                    <ul className='list-items'>
                        <li><a href="">Program</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">Contact</a></li>
                        <li ><a href="" className='sign'>Sign Up</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
