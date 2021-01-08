import React, { useState } from "react";
import { Header, AllItems, Logo, NavbarItemLink } from "./style";
import { Container } from "../../assets/Styles/MainStyle";
import NavbarToggle from "../NavbarToggle";
import Sidebar from "../Sidebar";
import logo from '../../assets/images/IBS.jpg'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Header>
      <Container>
        <AllItems>
          <Logo
            style={{
              fontSize: 25,
            }}
          >
            <NavbarItemLink src={logo} alt="IBS" />
          </Logo>

          <NavbarToggle setOpen={setOpen} open={open} />
          <Sidebar open={open} setOpen={setOpen} />
        </AllItems>
      </Container>
    </Header>
  );
};

export default Navbar;
