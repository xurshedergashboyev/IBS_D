import React from "react";
import {
  WrapperInner,
  Lead,
  HeroContainer,
  HeroSection,
  HeroTitle,
  HeroBoth,
  FirstSpan,
  SecondSpan,
  ThirdSpan,
  FourthSpan,
} from "./style";

import { MainButton } from "../../styles/MainStyle";

import Typist from "react-typist";
import HeroForm from "../HeroForm/index";

const cursor = {
  show: true,
  blink: true,
  element: "|",
  hideWhenDone: true,
  hideWhenDoneDelay: 1000,
};

const Hero = () => {
  return (
    <WrapperInner>
      <Lead>
        <HeroContainer>
          <HeroBoth>
            <HeroSection>
              <HeroTitle>
                <Typist cursor={cursor}>
                  <FirstSpan> Приготовься изменить свое будущее </FirstSpan>
                  <Typist.Backspace count={8} delay={2000} />
                  <SecondSpan> interest </SecondSpan>
                  <Typist.Backspace count={9} delay={2000} />
                  <ThirdSpan> future </ThirdSpan>
                  <Typist.Backspace count={9} delay={2000} />
                  <FourthSpan> anything </FourthSpan>
                </Typist>
              </HeroTitle>
              <MainButton>Читать дальше</MainButton>
            </HeroSection>
            <HeroForm />
          </HeroBoth>
        </HeroContainer>
      </Lead>
    </WrapperInner>
  );
};

export default Hero;
