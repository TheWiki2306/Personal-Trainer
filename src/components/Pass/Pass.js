import React from 'react';
import pass_img from '../../assets/images/topphoto.png';
const Pass = () => {
    return (
        <section>
            <div className="pass">
                <div className="one__day__pass">
                    <small>GYM <span>online.</span> </small>
                    <p className='day'>1 DAY PASS</p>
                    <img src={pass_img} alt="" />

                    <div className="price">
                        <small>Price starts from: <span>FREE</span></small>
                        <a href="">Select </a>
                    </div>
                </div>

                <div className="monthly__pass">
                    <small>GYM <span>online.</span> </small>
                    <p className='day'> MONTHLY PASS</p>
                    <img src={pass_img} alt="" />

                    <div className="price">
                        <small>Price starts from: <span>$35.00</span> </small>
                        <a href="">Select </a>

                    </div>
                </div>

                <div className="one__day__pass">
                    <small>GYM <span>online.</span> </small>
                    <p className='week'>WEEKLY PASS</p>
                    <img src={pass_img} alt="" />

                    <div className="price">
                        <small>Price starts from: <span>$10.00</span> </small>
                        <a href="">Select </a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pass;
