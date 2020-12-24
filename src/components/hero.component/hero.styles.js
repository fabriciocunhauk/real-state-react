import styled, { css } from 'styled-components/macro';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
`;

export const HeroSlide = styled.div`
    
`;

export const HeroSlider = styled.div`
   
`;

export const HeroImage = styled.img`
    height: 200px;
    width: 200px;
`;

export const HeroContent = styled.div`
    
`;

export const Arrow = styled(IoMdArrowRoundForward)`
    
`;

const ArrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05)
    }
`;

export const SliderButtons = styled.div`
    position: absolute;
    right: 50px;
    bottom: 50px;
    display: flex;
    z-index: 10;
`;

export const PrevArrow = styled(IoArrowBack)`
    ${ArrowButtons}
    
`;

export const NextArrow = styled(IoArrowForward)`
    ${ArrowButtons}
    
`;