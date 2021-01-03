import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutAcademy from "./components/AboutAcademy";
import Faculties from "./components/Faculties";
import Team from "./components/Team/index";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import { AppWrapper, MainWrapper } from "./styles/MainStyle";
import Welcome from "./components/Welcome";
import LinePath from "./components/LinePath/index";
import { LineWrapper } from "./components/LinePath/style";
const App = () => {
  return (
    <AppWrapper>
      <MainWrapper>
        <LineWrapper>
          <LinePath />
          <Navbar />
          <Hero />
          <Benefits />
          <Welcome />
          <AboutAcademy />
          <Faculties />
          <Team />
          <Footer />
        </LineWrapper>
      </MainWrapper>
    </AppWrapper>
  );
};

export default App;
