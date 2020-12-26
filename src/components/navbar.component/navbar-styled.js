import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';


export const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

export const MenuBars = styled(AiOutlineBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-30%, 10%)
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
        display: none;
    }
`;


