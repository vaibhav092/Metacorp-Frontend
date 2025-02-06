import React, { useState } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-100 to-emerald-200 shadow-md py-6 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-green-900">MetaCorp</h1>
                <nav className="space-x-6">
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('home');
                        }}
                        className={`text-lg font-medium transition-colors duration-200
                            ${activeSection === 'home' 
                                ? 'text-green-800 border-b-2 border-green-800' 
                                : 'text-green-700 hover:text-green-900'}`}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('about');
                        }}
                        className={`text-lg font-medium transition-colors duration-200
                            ${activeSection === 'about' 
                                ? 'text-green-800 border-b-2 border-green-800' 
                                : 'text-green-700 hover:text-green-900'}`}
                    >
                        About
                    </a>
                    <a
                        href="#simulation"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('simulation');
                        }}
                        className={`text-lg font-medium transition-colors duration-200
                            ${activeSection === 'simulation' 
                                ? 'text-green-800 border-b-2 border-green-800' 
                                : 'text-green-700 hover:text-green-900'}`}
                    >
                        Simulation
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;