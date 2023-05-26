import React from 'react';
import {
    useLoaderData
} from "react-router-dom";
import useTitle from '../../hooks/useTitle';

const SingleToy = () => {

    useTitle('Toy')
    const toy = useLoaderData();
    const {photo, toyName, sellerName, sellerEmail, price, rating, quantity, description} = toy;

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='ml-5 space-y-3'>
                    <h1 className="text-5xl font-bold">{toyName}</h1>
                    <h4 className='text-2xl'>Seller Name : {sellerName}</h4>
                    <p className='text-lg'>Seller Email: {sellerEmail}</p>
                    <p className='text-lg'>Price : {price}$</p>
                    <p className='text-lg'>Rating : {rating}</p>
                    <p className='text-lg'>Quantity : {quantity}</p>
                    <p className='text-lg'>Product Details : {description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;