import React from 'react'
import './pass.css';
import Pass from './Pass';

const PassHead = () => {
    return (
        <section>
            <div className='container pass__container'>
                <ul className="bars">
                    <li className="bar"></li>
                    <li className="bar"></li>
                    <li className="bar"></li>
                    <li className="bar"></li>
                </ul>

                <h4>ENTRANCE </h4>
                <div className="texts">
                    <small>Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Cumque, ea!</small>
                </div>

                <Pass />
            </div>
        </section>
    )
}

export default PassHead;
