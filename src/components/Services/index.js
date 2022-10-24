import React from "react";
import Icon1 from "../../images/svg-5.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-7.svg";

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>3 Simple Steps to Complete Your Order</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Shop at our Website</ServicesH2>
          <ServicesP>
            Choose a fashion as unique as you are because our quality never goes
            out of style.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Choose or create designs</ServicesH2>
          <ServicesP>
            Explore your true style by creating your own design or feel trendy
            with our ready-made designs.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Add to cart</ServicesH2>
          <ServicesP>
            Place your desired items in your cart and proceed to payment. Show a
            true style indulgence.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
