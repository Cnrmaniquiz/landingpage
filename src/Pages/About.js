import React from "react";
import InfoSection from "../components/InfoSection";
import { homeObjSeven } from "../components/InfoSection/Data";
import {
  Nav,
  NavbarContainer,
  NavLogo,
} from "../components/Navbar/NavbarElements";

const About = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">LUCKY PRINTS</NavLogo>
        </NavbarContainer>
      </Nav>
      <InfoSection {...homeObjSeven} />
    </>
  );
};

export default About;
