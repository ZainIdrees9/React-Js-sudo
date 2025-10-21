import React from 'react';
import './index.css';
import { useState } from 'react';
import { LoadingAnimation } from './components/LoadingAnimation';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/sections/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';

const App = () => {
 
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            {!isLoaded && <LoadingAnimation onComplete={()=> setIsLoaded(true)} />}
            <div className={`min-h-screen bg-black ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 text-gray-100`}>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <About />
                <Portfolio />
                <Contact />
             </div>
            
            
        </>

    )
}


export default App;