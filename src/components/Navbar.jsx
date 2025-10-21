import React, { useEffect } from "react";

export let Navbar = ({menuOpen , setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen])


    return <nav className="fixed z-40 backdrop-blur-lg w-full shadow-lg  border-white top-0 ">
        <div className="max-w-5xl mx-auto px-4">
            <div className="h-16 flex items-center justify-between ">
                <a href="#home" className="text-2xl" >
                    pedro<span className="text-blue-500">.tech</span>
                </a>

                <div onClick={() => setMenuOpen((prev)=> !prev)}
                className="h-6 text-white text-2xl md:hidden cursor-pointer fixed top-4 right-3">
                        &#9776;
                </div>


                 <div className="hidden md:flex space-x-8 items-center">
                <a href="#home"
                className="text-gray-300 hover:text-white transition-colors duration-700">
                    Home
                </a>

                <a href="#about"
                className="text-gray-300 hover:text-white transition-colors duration-700">
                    About
                </a>

                <a href="#portfolio"
                className="text-gray-300 hover:text-white transition-colors duration-700">
                    Portfolio
                </a>

                <a href="#contact"
                className="text-gray-300 hover:text-white transition-colors duration-700">
                    Contact
                </a>
            </div>
            </div>
            

           
        </div>
    </nav>
}