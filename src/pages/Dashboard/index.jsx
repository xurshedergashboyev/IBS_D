import React, { useState } from "react";
import { Route } from "react-router-dom";

import CoursePage from "../CoursesPage";
import WebinarsPage from "../WebinarsPage";
import ForumPage from "../ForumPage";
import NavbarLeft from "../../components/NavbarLeft";
import NavbarTop from "../../components/NavbarTop";
import { DashboardStyled } from "./styles";
import Footer from "../../components/Footer";
import BlogsPage from "../BlogsPage";
import TestsPage from "../TestsPage";
import CareersPage from "../CareersPage";
import ArticleItemPage from "../ArticleItemPage";
import WebinarsItemPage from "../WebinarsItemPage";
import ForumItemPage from "../ForumItemPage";
import CareerItemPage from "../CareerItemPage";

const Dashboard = () => {

  const [ pageName, setPageName ] = useState( "Курсы" );

  return (
    <DashboardStyled>
      <NavbarLeft setPageName={ setPageName } left/>
      <NavbarTop setPageName={ setPageName } pageName={ pageName }/>
      <Route exact path="/" component={ CoursePage }/>

      <Route exact path="/webinars" component={ WebinarsPage }/>
      <Route exact path="/webinars/1" component={ WebinarsItemPage }/>

      <Route exact path="/forum" component={ ForumPage }/>
      <Route exact path="/forum/1" component={ ForumItemPage }/>

      <Route exact path="/blogs" component={ BlogsPage }/>
      <Route exact path="/article/1" component={ ArticleItemPage }/>

      <Route exact path="/tests" component={ TestsPage }/>

      <Route exact path="/careers" component={ CareersPage }/>
      <Route exact path="/careers/1" component={ CareerItemPage }/>

      <Footer/>
    </DashboardStyled>
  );
};

export default Dashboard;