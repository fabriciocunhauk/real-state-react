import React from 'react';

import { menuData } from '../../data/MenuData';

import { Nav, Logo, MenuBars, NavMenu, NavBtn, NavMenuLinks } from './navbar-styled';
import { Button } from '../button.component/Button';

const NavBar = () => {
    return (
        <Nav>
            <Logo to='/' >ELIXR</Logo>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index} >
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>
                    Contact Us
                </Button>
            </NavBtn>
            <MenuBars />
        </Nav>
    )
}

export default NavBar;
