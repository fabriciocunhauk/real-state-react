import React from 'react';

import { menuData } from '../../data/MenuData';

import { Nav, Logo, MenuBars, NavMenu, NavBtn, NavMenuLinks } from './navbar-styled';
import { Button } from '../button.component/Button';

const NavBar = ({ toggle }) => {
    return (
        <Nav>
            <Logo to='/' >ELIXR</Logo>
            <MenuBars onClick={toggle} />
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
        </Nav>
    )
}

export default NavBar;
