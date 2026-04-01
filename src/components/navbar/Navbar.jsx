// import React, { useState } from 'react';
// import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

// const Navbar = ({ cartCount }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="navbar bg-base-100 shadow-md px-6">
      
//       {/* Left - Logo */}
//       <div className="flex-1">
//         <a className="text-xl font-bold text-purple-600">DigiTools</a>
//       </div>

//      {/* Desktop Menu */}
    
//       <div className="hidden md:flex justify-center flex-1 px-8 ">
//         <div className="flex justify-center  gap-6">
//           <a className="cursor-pointer hover:text-purple-600">Products</a>
//           <a className="cursor-pointer hover:text-purple-600">Features</a>
//           <a className="cursor-pointer hover:text-purple-600">Pricing</a>
//           <a className="cursor-pointer hover:text-purple-600">Testimonials</a>
//           <a className="cursor-pointer hover:text-purple-600">FAQ</a>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-4">
        
//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Cart */}
//         <div className="relative">
//           <FaShoppingCart className="text-xl cursor-pointer" />
//           <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 rounded-full">
//             {cartCount}
//           </span>
//         </div>

//         <div className="hidden md:block">Login</div>

//         <button className="btn btn-sm bg-purple-600 text-white rounded-full hidden md:block">
//           Get Started
//         </button>
        
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
//           <a className="hover:text-purple-600">Products</a>
//           <a className="hover:text-purple-600">Features</a>
//           <a className="hover:text-purple-600">Pricing</a>
//           <a className="hover:text-purple-600">Testimonials</a>
//           <a className="hover:text-purple-600">FAQ</a>
//           <div>Login</div>
//           <button className="btn btn-sm bg-purple-600 text-white rounded-full">
//             Get Started
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
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