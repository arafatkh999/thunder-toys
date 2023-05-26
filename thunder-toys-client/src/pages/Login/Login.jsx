import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import useTitle from '../../hooks/useTitle';

const Login = () => {

    useTitle('Login')

    const { signIn, googleSignin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [firebaseError, setFirebaseError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;



        signIn(email, password)
            .then(result => {
                const user = result.user;


                navigate(from, { replace: true });
            })
            .catch(error => {
                setFirebaseError(error.message);

            })
    }


    const handleGoogleSignin = () => {
        googleSignin()
            .then((result) => {
                const loggedInUser = result.user;

                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log("error", error.message);
            });
    };



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src='https://i.ibb.co/qW9yBBM/login.jpg' alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center text-warning">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div>
                                <p>{firebaseError}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-warning" type="submit" value="Login" />
                            </div>
                            <div className="divider">OR</div>
                            <div className="my-3 text-center">
                                <button onClick={handleGoogleSignin} className="btn btn-circle btn-warning">
                                    <FaGoogle/>
                                </button>

                            </div>
                        </form>
                        <p className='text-center'>Do not have an account ?<Link className='font-semibold text-warning' to='/signup'> Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;