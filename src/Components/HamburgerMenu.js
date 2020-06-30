// --- IMPORTS ---
import React from 'react';
import styled from 'styled-components';
import '../Stylesheets/hamburgerMenu.css';
import SideMenu from './SideMenu';
import $ from 'jquery';

// --- HAMBURGER MENU ---
class HamburgerMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            opened: false
        }
        this.opened = false;
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            opened: !this.state.opened
        })
        
        this.opened = !this.opened;
        if (this.opened) {
            $("#hamburger-menu-wrapper div").addClass("opened");
            $("#hamburger-menu-wrapper div").removeClass("closed");
        }
        else {
            $("#hamburger-menu-wrapper div").addClass("closed");
            $("#hamburger-menu-wrapper div").removeClass("opened");
        }
        
    }
    render() {
        const HamburgerButton = styled.button`
        display: flex;
        flex-direction: column;
        background: transparent;
        height: 2rem;
        border: none;
        justify-content: space-around;
        cursor: pointer;
        `;
        var status = "";
        if (this.state.opened) {
            status = "opened";
        }
        else {
            status = "closed";
        }
        return(
            <div>
                <HamburgerButton id="hamburger-menu-wrapper" onClick={this.handleClick}>
                    <div className={status}></div>
                    <div className={status} id="bottom"></div>
                    <div className={status}></div>
                </HamburgerButton>
                <SideMenu opened={this.state.opened}/>
            </div>
        );
    }
}

export default HamburgerMenu;