import React from "react";
import InfoSection from "../components/InfoSection";
import { homeObjFive } from "../components/InfoSection/Data";

import {
  Nav,
  NavbarContainer,
  NavLogo,
} from "../components/Navbar/NavbarElements";

const Terms = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">LUCKY PRINTS</NavLogo>
        </NavbarContainer>
      </Nav>
      <InfoSection {...homeObjFive} />
    </>
  );
};

export default Terms;
