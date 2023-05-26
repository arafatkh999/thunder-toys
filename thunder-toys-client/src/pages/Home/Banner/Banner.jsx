import React from 'react';
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import banner4 from '../../../assets/banner4.jpg'

const Banner = () => {
    
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-slate-500">
                    <div className='text-white pl-12 space-y-7 w-1/2'>
                        <h2 className='text-6xl font-semibold'>SPECIAL EDITION</h2>
                        <p>There are many toys in the market but you can find here the special kind of toys. You can buy here in cheap price. </p>
                        <div>
                        <button className="btn btn-warning mr-5">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-slate-500">
                    <div className='text-white pl-12 space-y-7 w-1/2'>
                        <h2 className='text-6xl font-semibold'>SPECIAL EDITION</h2>
                        <p>There are many toys in the market but you can find here the special kind of toys. You can buy here in cheap price. </p>
                        <div>
                        <button className="btn btn-warning mr-5">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-slate-500">
                    <div className='text-white pl-12 space-y-7 w-1/2'>
                        <h2 className='text-6xl font-semibold'>SPECIAL EDITION</h2>
                        <p>There are many toys in the market but you can find here the special kind of toys. You can buy here in cheap price. </p>
                        <div>
                        <button className="btn btn-warning mr-5">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-slate-500">
                    <div className='text-white pl-12 space-y-7 w-1/2'>
                        <h2 className='text-6xl font-semibold'>SPECIAL EDITION</h2>
                        <p>There are many toys in the market but you can find here the special kind of toys. You can buy here in cheap price. </p>
                        <div>
                        <button className="btn btn-warning mr-5">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;