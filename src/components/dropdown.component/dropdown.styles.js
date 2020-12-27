import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: 1;
`;

export const Icon = styled.i``;
export const CloseIcon = styled(FaTimes)``;
export const DropdownWraper = styled.div``;
export const DropdownMenu = styled.div``;
export const BtnWrap = styled.div``;
export const DropdownLink = styled(Link)``;