import React from 'react';
import { Container, Heading, HeadingDesc } from "../../assets/Styles/MainStyle";
import { About, SectionMainTitle, AboutVideo, AboutVideoButton, AboutVideoPlace } from "./style";
import AboutItems from "../AboutItems";
import { FaPlay } from 'react-icons/fa'

const AboutAcademy = () => {
    return (
        <About>
            <Container>
                <SectionMainTitle>
                    <Heading>Об академии</Heading>
                    <HeadingDesc style={{marginBottom: 30}}>Тех Академия Бобира Акилханова - карьера успешного IT специалиста начинается здесь</HeadingDesc>
                </SectionMainTitle>
                <AboutVideo>    
                    <AboutVideoPlace>
                        <AboutVideoButton>
                            <FaPlay className="video-button"/>
                       </AboutVideoButton>
                    </AboutVideoPlace>
                </AboutVideo>
                {/*ABout Items Section*/}
                <AboutItems />
            </Container>
        </About>

    );
}

export default AboutAcademy;