// --- IMPORTS ---
import React from 'react';
import '../Stylesheets/navigation.css';

// --- NAVIGATION UL LIST ---
function Navigation() {
    return(
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;