import React from "react";
import { Container, Heading, HeadingDesc } from "../../assets/Styles/MainStyle";
import { About, SectionMainTitle } from "./style";

import AboutItems from "../AboutItems";
import AboutVideoSection from "../AboutVideo/index";

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
        {/* About Video Section */}
        <AboutVideoSection />
        {/*About Items Section*/}
        <AboutItems />
      </Container>
    </About>
  );
};

export default AboutAcademy;
