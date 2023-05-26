import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error));
      }

    const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/alltoys'>All Toys</Link></li>
    </>



    
    const loginItems = <>
    <li><Link to='/mytoys'>My Toys</Link></li>
    <li><Link to='/addtoy'>Add a Toy</Link></li>
    </>

    
    return (
        
            <div className="navbar bg-base-100 h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                            { user ?
                            loginItems : <></>
                            }
                        </ul>
                    </div>
                    <Link to='/' className="w-1/2">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                        { user ?
                            loginItems : <></>
                            }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?<><div className={`avatar hover:${user?.displayName}`}>
                        <div className="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2 mr-5">
                          <img src={user?.photoURL} />
                        </div>

                      </div>
                      <button onClick={handleLogOut} className="btn btn-outline btn-warning">Logout</button>
                      </> : 
                      <button className="btn btn-outline btn-warning"><Link to='/login'>Login</Link></button>
                      
                    }

                
                </div>
            </div>
        
    );
};

export default Navbar;