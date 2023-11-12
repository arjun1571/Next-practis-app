import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const navLinks =[
    {
        path:"/",
        title:"Home",
    },
    {
        path:"/about",
        title:"About",
    },
    {
        path:"/profile",
        title:"Profile",
    },
    {
        path:"/blogs",
        title:"Blogs",
    },
    {
        path:"/dashboard",
        title:"Dashboard",
    }
    
]

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center container mx-auto'>
            <div>
                <h1 className='font-bold text-xl'>My Next App</h1>
            </div>
            <div className='flex items-center '>
                {
                    navLinks.map(({path,title})=><ul className=''><li key={path} className='mx-2'><NavLink activeClassName={"text-blue-500"} exact={path === "/"} href={path}>{title}</NavLink></li></ul>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;