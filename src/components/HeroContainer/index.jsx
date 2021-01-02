import React from "react";
import { Benefits, Row, RowItem, Icon, ContainerDesc } from "./style";
import { Container } from "../../styles/MainStyle";

import GlobeIcon from "../../assets/icons/globe.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import AnalysisIcon from "../../assets/icons/analysis.svg";
import StartUpIcon from "../../assets/icons/startup.svg";
import LightBulbIcon from "../../assets/icons/lightbulb.svg";
import LoupeIcon from "../../assets/icons/loupe.svg";

const HeroContainer = () => {
  return (
    <Benefits>
      <Container>
        <Row>
          <RowItem>
            <Icon>
              <img src={GlobeIcon} alt="globe" />
            </Icon>
            <ContainerDesc>Преподаватели - практики</ContainerDesc>
          </RowItem>
          <RowItem>
            <Icon>
              <img src={LightBulbIcon} alt="lightBulb" />
            </Icon>
            <ContainerDesc>Преподаватели - практики</ContainerDesc>
          </RowItem>
          <RowItem>
            <Icon>
              <img src={LoupeIcon} alt="loupe" />
            </Icon>
            <ContainerDesc>Преподаватели - практики</ContainerDesc>
          </RowItem>
          <RowItem>
            <Icon>
              <img src={StartUpIcon} alt="startUp" />
            </Icon>
            <ContainerDesc>Преподаватели - практики</ContainerDesc>
          </RowItem>
          <RowItem>
            <Icon>
              <img src={SettingsIcon} alt="settings" />
            </Icon>
            <ContainerDesc>Преподаватели - практики</ContainerDesc>
          </RowItem>
          <RowItem>
            <Icon>
              <img src={AnalysisIcon} alt="analysis" />
            </Icon>
            <ContainerDesc>Преподаватели - практики</ContainerDesc>
          </RowItem>
        </Row>
      </Container>
    </Benefits>
  );
};

export default HeroContainer;
