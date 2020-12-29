import React from 'react';
import { Container, Heading, HeadingDesc } from "../../assets/Styles/MainStyle";
import { About, SectionMainTitle, AboutVideoButton, AboutVideo, AboutVideoPlace} from "./style";
import AboutItems from "../AboutItems";

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
                            <svg className="video-button">
                                <use xlinkHref="#sprite_play" />
                            </svg>
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