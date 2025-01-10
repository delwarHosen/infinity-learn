"use client"

import Image from 'next/image';
import React from 'react';
import logo from '@/public/Image/logo.png'
import { Search, ShoppingCart } from 'lucide-react';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li>
                            <a>Classes</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Videos</a></li>
                        <li><a>Blogs</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <Image src={logo} alt='logo' width={120} className='md:w-56'></Image>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About us</a></li>
                    <li>
                        <details>
                            <summary>Clasess</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Video</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end list-none ">
                <li className='mr-4'><ShoppingCart></ShoppingCart></li>
                <li className='mr-4'><Search></Search> </li>
                <span className='mr-4'>Login</span>
            </div>
        </div>
    );
};

export default Header;