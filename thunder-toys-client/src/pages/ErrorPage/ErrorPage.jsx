import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {

    useTitle('404')
    return (
        <div>
            <img className='w-3/4 max-h-96 mx-auto' src="https://i.ibb.co/rcxjYC5/404.jpg" alt="" />
            <div className='text-center'>
                <Link to='/'><button className='btn btn-warning'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;