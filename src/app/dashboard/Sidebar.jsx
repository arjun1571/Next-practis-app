import Link from 'next/link';
import React from 'react';
import NavLink from '../components/NavLink';

const navLink =[
    {
        path:"/dashboard",
        title:"Dashboard",
    },
    {
        path:"/dashboard/add-product",
        title:"Add Product",
    },
    {
        path:"/dashboard/manage-product",
        title:"Manage Product",
    },
    {
        path:"/",
        title:"Home",
    }
    
]

const Sidebar = () => {
    return (
        <aside className=' mr-10'>
            <h1 className='text-xl font-bold'>Dashboard</h1>
            <ul>
                {
                    navLink.map(({path,title})=> (<li key={path} className='my-2'>
                        <NavLink activeClassName={"text-blue-500"} exact href={path}>{title}</NavLink>
                    </li>))
                }
            </ul>
        </aside>
    );
};

export default Sidebar;