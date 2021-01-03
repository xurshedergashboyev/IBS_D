import React from "react";
import {
  WelcomeInner,
  WelcomeWrapper,
  WelcomeHeading,
  WelcomeContent,
  WelcomeParagraph,
  WelcomeImage,
  WelcomeAuthor,
} from "./style";

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <WelcomeInner>
        <WelcomeContent>
          <WelcomeHeading>Добро пожаловать</WelcomeHeading>
          <WelcomeParagraph>
            Добро пожаловать в мою новую академию, основанную по мировым
            стандартам обучения, где вы можете отучиться самым актуальным
            профессиям и сможете трудоустроиться гораздо быстрее, чем через
            традиционное высшее образование.
          </WelcomeParagraph>
        </WelcomeContent>
        <WelcomeImage>
          <WelcomeAuthor src="https://ba.uz/wp-content/themes/landing/images/bobir.png" />
        </WelcomeImage>
      </WelcomeInner>
    </WelcomeWrapper>
  );
};

export default Welcome;
