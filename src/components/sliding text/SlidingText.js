import React from 'react'
import './slidingText.css'
import { BsDot } from 'react-icons/bs'


const SlidingText = () => {
    return (
        <section>
            <div className="scroll__container">
                <h4>BEGINNER FRIENDLY <BsDot className='dot' /> LIVE CONSULTANCY <BsDot className='dot' /> 20+ TRAINERS <BsDot className='dot' /> NEW VIDEOS DAILY </h4>

            </div>
        </section>
    )
}

export default SlidingText;
