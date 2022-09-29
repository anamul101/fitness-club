import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-gray-900 text-white">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-4xl font-semibold">Fn Yoga <span className='text-rose-600 mr-2'>Club</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 text-lg font-semibold">
                        <li><a href='Home/'>Home</a></li>
                        <li><a href='About/'>About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;