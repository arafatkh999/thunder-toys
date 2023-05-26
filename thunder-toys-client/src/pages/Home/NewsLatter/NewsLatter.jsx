import React from 'react';

const NewsLatter = () => {
    return (
        <div className='bg-sky-400 p-16 my-10 space-y-5'>
            <h1 className='text-4xl text-white text-center font-semibold'>Sign up for our newsletter</h1>
            <p className='text-white text-center font-semibold text-lg'>Sign up today for our newsletter and receive <span className='text-red-600'>15% OFF</span> your first purchase, and also get our sneak peeks, tips, and exclusive offers.</p>

            <div className='flex justify-center'>
            <input type="text" className="ps-5 file-input file-input-bordered file-input-warning w-1/2" placeholder='Enter your email' />
            </div>
            <div className='flex justify-center'>
            <button className="btn-wide btn  hover:btn-warning text-white">SUBSCRIBE</button>
            </div>

            
        </div>
    );
};

export default NewsLatter;