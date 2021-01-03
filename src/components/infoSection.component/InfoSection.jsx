import React from 'react';
import { Button } from '../button.component/Button';

import { Container, Section, ColumnLeft, ColumnRight } from './info-section.styles';

function InfoSection({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image }) {
    return (
        <div>
            <Section>
                <Container>
                    <ColumnLeft>
                        <h1>{heading}</h1>
                        <p>{paragraphOne}</p>
                        <p>{paragraphTwo}</p>
                        <Button to="/homes" primary="true">{buttonLabel}</Button>
                    </ColumnLeft>
                    <ColumnRight reverse={reverse}>
                        <img src={image} alt="home" />
                    </ColumnRight>
                </Container>
            </Section>

        </div>
    )
};

export default InfoSection;
