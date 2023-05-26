import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="w-1/2 ml-[-20px]">
                        <img src={logo} alt="" />
                    </span>
                    <p>Copyright © 2023. All Rights Reserved.</p>

                </div>
                <div>
                    <span className="footer-title">Contacts</span>
                    <div className='flex items-center'>
                        <div className='text-2xl p-2 mr-2 text-white rounded-full bg-orange-500 hover:bg-sky-700'><FaMapMarkerAlt /></div>
                        <div><p>2813 Redwood Pkwy <br /> California</p></div>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-2xl p-2 mr-2 text-white rounded-full bg-orange-500 hover:bg-sky-700'><FaPhoneAlt /></div>
                        <div><p>1234567890</p></div>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-2xl p-2 mr-2 text-white rounded-full bg-orange-500 hover:bg-sky-700'><FaEnvelope /></div>
                        <div><p>info@example.com</p></div>
                    </div>

                </div>

                <div>
                    <span className="footer-title">Social</span>
                    <div className='flex'>
                    <Link to='/' className='text-2xl p-2 mr-2 text-white rounded-full bg-orange-500 hover:bg-sky-700'><FaFacebookF /></Link>
                    <Link to='/' className='text-2xl p-2 mr-2 text-white rounded-full bg-orange-500 hover:bg-sky-700'><FaTwitter /></Link>
                    <Link to='/' className='text-2xl p-2 mr-2 text-white rounded-full bg-orange-500 hover:bg-sky-700'><FaInstagram /></Link>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;