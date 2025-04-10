import React from 'react';

const Navbar = ({free}) => {
    return (
        <div>
            <div className='mx-auto w-10/12 my-7'>
                <div className="navbar items-center">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden transition-all hover:scale-90">
                            <img src="./logo.png" alt="" className=''/>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                        </div>
                        <div className='hidden md:block cursor-pointer transition-all hover:scale-90'>
                            <img src="./logo.png" alt="" className=''/>
                        </div>
                    </div>
                    <div className="navbar-end gap-7">
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li className='font-semibold'><a>Home</a></li>
                                <li className='font-semibold'><a>Fixture</a></li>
                                <li className='font-semibold'><a>Teams</a></li>
                                <li className='font-semibold'><a>Schedules</a></li>
                            </ul>
                        </div>
                        <button className='btn px-5 bg-white rounded-md animate-bounce'>{free} Coin 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;