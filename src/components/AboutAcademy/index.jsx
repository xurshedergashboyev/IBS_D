import React from 'react';
import {Container, Heading, HeadingDesc} from "../../assets/Styles/MainStyle";
import {About, SectionMainTitle} from "./style";
import AboutItems from "../AboutItems";

const AboutAcademy = () => {
    return (
        <About>
            <Container>
                <SectionMainTitle>
                    <Heading>Об академии</Heading>
                    <HeadingDesc>Тех Академия Бобира Акилханова - карьера успешного IT специалиста начинается здесь</HeadingDesc>
                </SectionMainTitle>
                {/*ABout Items Section*/}
                <AboutItems />
                {/*/!*Index*!/*/}
                {/*<Statistics/>*/}
            </Container>
        </About>

    );
}

export default AboutAcademy;