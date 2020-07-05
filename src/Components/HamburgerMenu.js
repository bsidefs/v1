// --- IMPORTS ---
import React, {useState} from 'react';
import styled from 'styled-components';
import '../Stylesheets/hamburgerMenu.css';
import SideMenu from './SideMenu';

// --- HAMBURGER MENU ---

// the hamburger button to use
const HamburgerButton = styled.button`
        display: flex;
        flex-direction: column;
        background: transparent;
        height: 2rem;
        border: none;
        justify-content: space-around;
        cursor: pointer;
        `;

// the actual component itself
function HamburgerMenu() {
    // lifted up / shared state hook for the HamburgerMenu, SideMenu, and Navigation (check to further improve).
    const [status, setStatus] = useState('closed');
    return(
        <div>
            <HamburgerButton id="hamburger-menu-wrapper" onClick={ () => { setStatus( (status === 'closed') ? 'opened' : 'closed' )} }>
                <div className={status}></div>
                <div className={status}></div>
                <div className={status}></div>
            </HamburgerButton>
            <SideMenu status={status} setStatus={setStatus}/>
        </div>
    );
}

export default HamburgerMenu;