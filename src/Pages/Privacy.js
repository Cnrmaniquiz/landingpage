import React from "react";
import InfoSection from "../components/InfoSection";
import { homeObjFive, homeObjSix } from "../components/InfoSection/Data";

import {
  Nav,
  NavbarContainer,
  NavLogo,
} from "../components/Navbar/NavbarElements";

const Privacy = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">LUCKY PRINTS</NavLogo>
        </NavbarContainer>
      </Nav>
      <InfoSection {...homeObjSix} />
    </>
  );
};

export default Privacy;
