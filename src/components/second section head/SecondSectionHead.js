import React from 'react'
import './secondSectionHead.css'

const SecondSectionHead = () => {
    return (
        <section id='program'>
            <div className='container second__section'>
                <ul className="bars">
                    <li className="bar"></li>
                    <li className="bar"></li>
                    <li className="bar"></li>
                    <li className="bar"></li>
                </ul>

                <h3 className='programs'>OUR <br /> PROGRAMS</h3>
                <h4>OUR PROGRAMS</h4>
                <div className="texts">
                    <small>Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Cumque, ea!</small>
                </div>
            </div>
        </section>
    )
}

export default SecondSectionHead;
