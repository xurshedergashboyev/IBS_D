import React from 'react';
import NavbarLeft from "../../components/NavbarLeft";
import { HomePageStyled } from "./styles";
import NavbarTop from "../../components/NavbarTop";
import Footer from "../../components/Footer";
import CoursePage from "../CoursesPage";
import WebinarsPage from "../WebinarsPage";
import ForumPage from "../ForumPage";

const HomePage = () => {
  return (
    <HomePageStyled>

      {/*<h1>This is homepage</h1>*/ }

      {/*<CoursePage/>*/ }
      {/*<WebinarsPage/>*/}

      <ForumPage />

      <Footer/>

    </HomePageStyled>
  );
};

export default HomePage;