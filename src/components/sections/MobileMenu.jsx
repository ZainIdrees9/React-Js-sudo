import React from "react";

export let MobileMenu = ({menuOpen, setMenuOpen}) => {
    return <div
    className={`fixed w-full top-0 left-0 bg-[rgba(10,10,10, 0.8)] backdrop-blur-md flex justify-center flex-col items-center transition-all duration-300 ease-in-out z-50  
    ${menuOpen 
        ? "h-screen opacity-100 pointer-events-auto" 
        : "h-0 opacity-0 pointer-events-none"}`}>

            <button onClick={()=> setMenuOpen(false)} className="absolute top-4 right-4 text-white focus:outline-none text-2xl cursor-pointer">
                &times;
            </button>

    
                <a href="#home"
                onClick={()=> setMenuOpen(false)}
                className={`text-2xl text-white font-semibold my-4 transform transition-transform duration-300 
                ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    Home
                </a>

                <a href="#about"
                 onClick={()=> setMenuOpen(false)}
                className={`text-2xl text-white font-semibold my-4 transform transition-transform duration-300 
                ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    About
                </a>

                <a href="#portfolio"
                 onClick={()=> setMenuOpen(false)}
                className={`text-2xl text-white font-semibold my-4 transform transition-transform duration-300 
                ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    Portfolio
                </a>

                <a href="#contact"
                 onClick={()=> setMenuOpen(false)}
                className={`text-2xl text-white font-semibold my-4 transform transition-transform duration-300 
                ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    Contact
                </a>
    

    
        </div>
}