import React from 'react';

import { Button } from '../button.component/Button';

import {
    HeroSection,
    HeroWrapper,
    HeroSlide,
    HeroSlider,
    HeroImage,
    HeroContent,
    Arrow,
    SliderButtons,
    PrevArrow,
    NextArrow
} from './hero.styles';


const Hero = ({ slides }) => {
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => (
                    <HeroSlide key={index}>
                        <HeroSlider>
                            <HeroImage />
                            <HeroContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                <Button to={slide.path} primary='true' css={`max-width: 160px;`}>
                                    {slide.label}
                                    <Arrow />
                                </Button>
                            </HeroContent>
                        </HeroSlider>
                    </HeroSlide>
                ))}
                <SliderButtons>
                    <PrevArrow />
                    <NextArrow />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero;
