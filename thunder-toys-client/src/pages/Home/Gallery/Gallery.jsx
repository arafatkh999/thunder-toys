import React from 'react';
import toy1 from '../../../assets/gallery/toy1.jpg'
import toy2 from '../../../assets/gallery/toy2.jpg'
import toy3 from '../../../assets/gallery/toy3.jpg'
import toy4 from '../../../assets/gallery/toy4.jpg'
import toy5 from '../../../assets/gallery/toy5.jpg'
import toy6 from '../../../assets/gallery/toy6.jpg'
import toy7 from '../../../assets/gallery/toy7.jpg'
import toy8 from '../../../assets/gallery/toy8.jpg'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {

    AOS.init();


    return (
        <div data-aos="zoom-in" className='my-10'>
            <h2 className='text-5xl font-bold text-center my-5'>We Love Trends<span className='text-warning'>.</span></h2>
            <div className='lg:flex justify-between my-10'>
                <div className="card w-60 bg-base-100 hover:shadow-2xl">
                    <figure><img src={toy1} className='h-40' /></figure>
                    <div className="card-body">
                        <p className='flex text-center text-warning'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <h2 className="card-title">
                            RED Flash
                            <div className="badge badge-warning">Sale</div>
                        </h2>
                    </div>
                </div>
                <div className="card w-60 bg-base-100 hover:shadow-2xl">
                    <figure><img src={toy2} className='h-40' /></figure>
                    <div className="card-body">
                        <p className='flex text-center text-warning'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></p>
                        <h2 className="card-title">
                            RUN Flash
                            <div className="badge badge-warning">Sale</div>
                        </h2>
                    </div>
                </div>
                <div className="card w-60 bg-base-100 hover:shadow-2xl">
                    <figure><img src={toy3} className='h-40' /></figure>
                    <div className="card-body">
                        <p className='flex text-center text-warning'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <h2 className="card-title">
                            BATMAN
                            <div className="badge badge-warning">Sale</div>
                        </h2>
                    </div>
                </div>
                <div className="card w-60 bg-base-100 hover:shadow-2xl">
                    <figure><img src={toy4} className='h-40' /></figure>
                    <div className="card-body">
                        <p className='flex text-center text-warning'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></p>
                        <h2 className="card-title">
                            YELLOW Flash
                            <div className="badge badge-warning">Sale</div>
                        </h2>
                    </div>
                </div>
            </div>
            <div className='lg:flex justify-between my-5'>
            <div className="card w-60 bg-base-100 hover:shadow-2xl">
                    <figure><img src={toy5} className='h-40' /></figure>
                    <div className="card-body">
                        <p className='flex text-center text-warning'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <h2 className="card-title">
                            THOR
                            <div className="badge badge-warning">Sale</div>
                        </h2>
                    </div>
                </div>
            <div className="card w-60 bg-base-100 hover:shadow-2xl">
                    <figure><img src={toy6} className='h-40' /></figure>
                    <div className="card-body">
                        <p className='flex text-center text-warning'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></p>
                        <h2 className="card-title">
                            HULK
                            <div className="badge badge-warning">Sale</div>
                        </h2>
                    </div>
                </div>
            <div className="card w-60 bg-base-100 hover:shadow-2xl">
                    <figure><img src={toy7} className='h-40' /></figure>
                    <div className="card-body">
                        <p className='flex text-center text-warning'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <h2 className="card-title">
                            INFINITY Stones
                            <div className="badge badge-warning">Sale</div>
                        </h2>
                    </div>
                </div>
            <div className="card w-60 bg-base-100 hover:shadow-2xl">
                    <figure><img src={toy8} className='h-40' /></figure>
                    <div className="card-body">
                        <p className='flex text-center text-warning'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></p>
                        <h2 className="card-title">
                            CAPTAIN
                            <div className="badge badge-warning">Sale</div>
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;