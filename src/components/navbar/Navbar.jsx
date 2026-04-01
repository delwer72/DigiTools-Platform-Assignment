
import React from 'react';
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({ productCart }) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
                {/* Navbar start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                   <h2 className=" text-primary text-4xl font-extrabold" >DigiTools</h2>
                </div>

                {/* Navbar center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>

                {/* Navbar end */}
                <div className="navbar-end gap-4">
                    {/* Cart icon with badge */}
                    <div className="relative cursor-pointer">
                        <IoCartOutline className='text-3xl text-gray-400' />

                        {productCart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                {productCart.length}
                            </span>
                        )}
                    </div>

                    <a href="/login">Login</a>
                    <a className="btn btn-primary text-white rounded-full">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;