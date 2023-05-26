import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';



const SignUp = () => {

    useTitle('Sign up')

    const {createUser, updateUserData} = useContext(AuthContext);

    


    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        

        createUser(email, password)
        .then(result => {
            const user = result.user;
            updateUserData(name, photo);
            form.reset();
        })
        .catch(error => console.log(error))

        
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src='https://i.ibb.co/brsKBrq/regi.jpg' alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center text-warning">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered"  required/>

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-warning" type="submit" value="Sign Up" />
                            </div>
                            
                        </form>
                        <p className='text-center'>Already have an account ?<Link className='font-semibold text-warning' to='/login'> Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;