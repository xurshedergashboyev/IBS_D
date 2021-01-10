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
          <AboutItemText className="item-text">
            <Fade
              direction="right"
              delay={5000}
              triggerOnce={true}
              duration={1000}
            >
              <ItemsHeading>
                Pay less, <span style={{ color: "#ffbf2b" }}>get</span> more
              </ItemsHeading>
              <HeadingDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                totam placeat voluptatem delectus maxime vel quis mollitia
                numquam ad hic saepe, ducimus esse harum corrupti reiciendis
                tempore. Doloremque harum soluta amet quas, impedit voluptatem
                consequuntur.
              </HeadingDesc>
            </Fade>
          </AboutItemText>
          <AboutItemImage>
            <Fade
              direction="left"
              delay={300}
              triggerOnce={true}
              duration={1000}
            >
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_nqbgog78.json"
                background="transparent"
                speed="1"
                style={{ backgroundColor: "#fff" }}
                loop
                autoplay
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
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_sen1ai7d.json"
                background="transparent"
                speed="1"
                style={{ backgroundColor: "#fff" }}
                loop
                autoplay
              />
            </Fade>
          </AboutItemImage>
          <AboutItemText className="item-text item-second">
            <Fade
              direction="left"
              delay={5000}
              triggerOnce={true}
              duration={1000}
            >
              <ItemsHeading>
                Teachers are not just{" "}
                <span style={{ color: "#ffbf2b", fontWeight: 700 }}>
                  developers
                </span>
              </ItemsHeading>
              <HeadingDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores quisquam vel blanditiis esse, ullam qui minima
                repudiandae, doloremque amet fugiat voluptatem sunt quia facere
                modi impedit repellendus, odio vero reiciendis pariatur ducimus
                quos! Natus, voluptas.
              </HeadingDesc>
            </Fade>
          </AboutItemText>
        </AboutItemSecond>
      </Fade>
      <AboutItemFirst>
        <AboutItemText style={{ marginRight: 40 }}>
          <Fade
            direction="right"
            delay={3000}
            triggerOnce={true}
            duration={1000}
          >
            <ItemsHeading>
              More{" "}
              <span style={{ color: "#ffbf2b", fontWeight: 700 }}>
                practice
              </span>
              than theory
            </ItemsHeading>
            <HeadingDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              quibusdam assumenda id nemo sint eaque aliquid quidem tempora
              repellat nobis iste deleniti, vitae qui nulla dolorem consectetur
              temporibus debitis rem ab ratione vero dolores. Saepe?
            </HeadingDesc>
          </Fade>
        </AboutItemText>
        <AboutItemImage style={{ marginBottom: 0 }}>
          <Fade direction="left" delay={500} triggerOnce={true} duration={1000}>
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_micqvrzw.json"
              background="transparent"
              speed="1"
              style={{ backgroundColor: "#fff", height: 400 }}
              autoplay
              loop
            />
          </Fade>
        </AboutItemImage>
      </AboutItemFirst>
    </div>
  );
};

export default AboutItems;
