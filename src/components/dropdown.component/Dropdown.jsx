import React from 'react';

import { menuData } from '../../data/MenuData';
import { Button } from '../button.component/Button';

import {
    DropdownContainer,
    Icon,
    CloseIcon,
    DropdownWraper,
    DropdownMenu,
    DropdownLink,
    BtnWrap
} from './dropdown.styles';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWraper>
                <DropdownMenu>
                    {menuData.map((item, index) => {
                        return (
                            <DropdownLink to={item.link} key={index}>
                                {item.title}
                            </DropdownLink>
                        )
                    })}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to='/contact'>
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWraper>
        </DropdownContainer>
    )
}

export default Dropdown;
