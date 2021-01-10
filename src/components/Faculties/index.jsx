import React from "react";
import { Main, FacultiesHeader, FacultiesDesc } from "./style";
import { Container, Heading } from "../../styles/MainStyle";
import FacultiesItem from "../FacultiesItem";

const Faculties = () => {
  return (
    <Main>
      <Container>
        <FacultiesHeader>
          <Heading>Факультеты</Heading>
          <FacultiesDesc>Основные направления обучающих программ</FacultiesDesc>
        </FacultiesHeader>
        <FacultiesItem />
      </Container>
    </Main>
  );
};

export default Faculties;
