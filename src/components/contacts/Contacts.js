import React from 'react'
import './contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import { ImTwitter } from 'react-icons/im';
import { BsWhatsapp } from 'react-icons/bs';

const Contacts = () => {
    return (
        <section>
            <div className="contact">
                <div className="container contact__container">
                    <ul className="bars">
                        <li className="bar"></li>
                        <li className="bar"></li>
                        <li className="bar"></li>
                        <li className="bar"></li>
                    </ul>

                    <h4>OUR SOCIALS </h4>
                    <div className="texts">
                        <small>Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Cumque, ea!</small>
                    </div>

                    <div className="contact__options">
                        <article className='contact__option'>
                            <MdOutlineEmail className='contact__option-icon' />
                            <h4>Email</h4>
                            <h5>olusegundavids1@gmaii.com</h5>
                            <a href="mailto:olusegundavids1@gmail.com" target='_blank'>Send an email</a>
                        </article>

                        <article className='contact__option'>
                            <ImTwitter className='contact__option-icon' />
                            <h4>Twitter</h4>
                            <h5>theAfroWiki</h5>
                            <a href="twitter.com" target='_blank'>Send a DM</a>
                        </article>

                        <article className='contact__option'>
                            <BsWhatsapp className='contact__option-icon' />
                            <h4>WhatsApp</h4>
                            <h5>Phone number</h5>
                            <a href="https://api.whatsapp.com/send?phone=09080797651" target='_blank'>Send a message</a>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contacts;
