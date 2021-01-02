import React from "react";
import {
  AboutItemFirst,
  AboutItemText,
  AboutItemImage,
  HeadingDesc,
  AboutItemSecond,
  ItemsHeading,
} from "./style";
import { Fade } from "react-awesome-reveal";

const AboutItems = () => {
  return (
    <div className="about-items">
      <Fade bottom delay={500} triggerOnce={true}>
        <AboutItemFirst>
          <AboutItemText>
            <Fade
              direction="right"
              delay={1000}
              triggerOnce={true}
              duration={1000}
            >
              <ItemsHeading>Образовательные программы</ItemsHeading>
              <HeadingDesc>
                Образовательные программы, которые будут интересны всем, кто
                хочет построить успешную карьеру в IT.
              </HeadingDesc>
            </Fade>
          </AboutItemText>
          <AboutItemImage>
            <Fade
              direction="left"
              delay={500}
              triggerOnce={true}
              duration={1000}
            >
              <img
                src="https://ba.uz/wp-content/themes/landing/images/about/about-3.png"
                alt="image"
              />
            </Fade>
          </AboutItemImage>
        </AboutItemFirst>
      </Fade>
      <Fade bottom delay={500} triggerOnce={true}>
        <AboutItemSecond>
          <AboutItemImage>
            <Fade
              direction="right"
              delay={500}
              triggerOnce={true}
              duration={1000}
            >
              <img src="https://ba.uz/wp-content/themes/landing/images/about/about-2.png" />
            </Fade>
          </AboutItemImage>
          <AboutItemText>
            <Fade
              direction="left"
              delay={1000}
              triggerOnce={true}
              duration={1000}
            >
              <ItemsHeading>Образовательные программы</ItemsHeading>
              <HeadingDesc>
                Образовательные программы, которые будут интересны всем, кто
                хочет построить успешную карьеру в IT.
              </HeadingDesc>
            </Fade>
          </AboutItemText>
        </AboutItemSecond>
      </Fade>
      <AboutItemFirst>
        <AboutItemText>
          <Fade
            direction="right"
            delay={1000}
            triggerOnce={true}
            duration={1000}
          >
            <ItemsHeading>Образовательные программы</ItemsHeading>
            <HeadingDesc>
              Образовательные программы, которые будут интересны всем, кто хочет
              построить успешную карьеру в IT.
            </HeadingDesc>
          </Fade>
        </AboutItemText>
        <AboutItemImage>
          <Fade direction="left" delay={500} triggerOnce={true} duration={1000}>
            <img src="https://ba.uz/wp-content/themes/landing/images/about/about-1.png" />
          </Fade>
        </AboutItemImage>
      </AboutItemFirst>
    </div>
  );
};

export default AboutItems;
