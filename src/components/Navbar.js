import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-slate-400'>
            <nav className="flex justify-between items-center px-8 py-6">
                <a href="#" className="flex items-center">
                    <img src="https://marineinsurer.co.uk/wp-content/uploads/2020/05/logo-dummy.png"
                        className="h-8 mr-3 bg-green-500" alt="Logo" />
                    <span className="text-2xl font-bold whitespace-nowrap dark:text-white">Name</span>
                </a>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
                <div className={`md:flex md:items-center  md:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0 mx-auto">
                        <li className="py-2 md:py-0">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded">Home</a>
                        </li>
                        <li className="py-2 md:py-0">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded">About</a>
                        </li>
                        <li className="py-2 md:py-0">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded">Contact</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0 md:ml-auto">
                        <li className="py-2 md:py-0">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded">Profile</a>
                        </li>
                        <li className="py-2 md:py-0">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded">Settings</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
