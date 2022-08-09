import React from 'react';
import './slidingSideBar.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineHomeWork } from 'react-icons/md';
import { BsChatLeftText } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { MdSupport } from 'react-icons/md';
import { FaDonate } from 'react-icons/fa';
import { useState } from 'react';

const SlidingSideBar = () => {

    const [List, setList] = useState(false);

    const showList = () => setList(!List);
    const Lists = [
        {
            icon: <MdOutlineHomeWork />,
            title: 'Program'
        },
        {
            icon: <BsChatLeftText />,
            title: 'Testimonials'
        },
        {
            icon: <IoMdContacts />,
            title: 'Contact'
        },
        {
            icon: <MdSupport />,
            title: 'Support'
        },
        {
            icon: <FaDonate />,
            title: 'Donations'
        }
    ]
    return (
        <section>
            <div className="sideBar__container">
                <div className="sideBar">
                    <FaBars className='slide' onClick={showList} />
                </div>
                <div className={List ? 'sliding__container active' : 'sliding__container'}>
                    <AiOutlineClose onClick={showList} className='close' />
                    {Lists.map((list, index) => (
                        <div key={index} className='list__container'>
                            <p href="">{list.icon}</p>
                            <a href="">{list.title}</a>
                        </div>
                    ))}
                    <a className='signin' href="">Sign in</a>
                    <a className='signup' href="">Sign up</a>
                </div>
            </div>
        </section>
    )
}

export default SlidingSideBar;
