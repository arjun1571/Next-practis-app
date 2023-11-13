
import React from 'react';
import NavLink from './NavLink';
import useAuth from '../hooks/useAuth';

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
    const {user} = useAuth
    const {uid,displayName} = user || {}
    return (
        <nav className='flex justify-between items-center container mx-auto bg-black text-white'>
            <div>
                <h1 className='font-bold text-xl'>My Next App</h1>
            </div>
            <div className='flex items-center py-5'>
                {
                    navLinks.map(({path,title})=><ul className=''><li key={path} className='mx-2'><NavLink activeClassName={"text-blue-500"} exact={path === "/"} href={path}>{title}</NavLink></li></ul>
                    )
                }
                <h1>{displayName}</h1>
            </div>
        </nav>
    );
};

export default Navbar;