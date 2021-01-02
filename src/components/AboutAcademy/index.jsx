import React from "react";
import { Container, Heading, HeadingDesc } from "../../assets/Styles/MainStyle";
import { About, SectionMainTitle, AboutVideo } from "./style";
import AboutItems from "../AboutItems";

const AboutAcademy = () => {
  return (
    <About>
      <Container>
        <SectionMainTitle>
          <Heading>Об академии</Heading>
          <HeadingDesc style={{ marginBottom: 30 }}>
            Тех Академия Бобира Акилханова - карьера успешного IT специалиста
            начинается здесь
          </HeadingDesc>
        </SectionMainTitle>
        <AboutVideo>
          <iframe
            width="720"
            height="400"
            src="https://www.youtube.com/embed/f0c7pSCoZqE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="youtube-video"
          />
        </AboutVideo>
        {/*About Items Section*/}
        <AboutItems />
      </Container>
    </About>
  );
};

export default AboutAcademy;
