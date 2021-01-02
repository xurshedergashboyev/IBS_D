import React from "react";
import { AboutStatistics, StatDesc, StatisticsItem } from "./style";

import { Heading } from "../../assets/Styles/MainStyle";
import { Fade } from "react-awesome-reveal";

const Statistics = () => {
  return (
    <AboutStatistics>
      <StatisticsItem>
        <Heading style={{ marginTop: 0, marginBottom: 0, marginRight: 12 }}>
          &gt;100
        </Heading>
        <Fade direction="top" delay={700}>
          <StatDesc>лет общий стаж наших преподавателей</StatDesc>
        </Fade>
      </StatisticsItem>
      <StatisticsItem>
        <Heading style={{ marginTop: 0, marginBottom: 0, marginRight: 12 }}>
          1500
        </Heading>
        <Fade direction="top" delay={1000}>
          <StatDesc>кв.м. общая площадь здания</StatDesc>
        </Fade>
      </StatisticsItem>
      <StatisticsItem>
        <Heading style={{ marginTop: 0, marginBottom: 0, marginRight: 12 }}>
          &gt;90
        </Heading>
        <Fade direction="top" delay={1300}>
          <StatDesc>мест коворкинг зона</StatDesc>
        </Fade>
      </StatisticsItem>
      <StatisticsItem>
        <Heading style={{ marginTop: 0, marginBottom: 0, marginRight: 12 }}>
          &gt;150
        </Heading>
        <Fade direction="top" delay={1600}>
          <StatDesc>мест ивент зона</StatDesc>
        </Fade>
      </StatisticsItem>
    </AboutStatistics>
  );
};

export default Statistics;
