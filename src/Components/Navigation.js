// --- IMPORTS ---
import React from 'react';
import '../Stylesheets/navigation.css';

// --- NAVIGATION UL LIST ---
function Navigation(props) {
    function closeMenu() {
        if (typeof props.setStatus === 'function') {
            props.setStatus('closed');
        }
        else {
            return;
        }
    } 
    return(
        <nav>
            <ul>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#resume" onClick={closeMenu}>Resume</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;