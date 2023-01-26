import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint
        assumenda nesciunt culpa deserunt expedita.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Click Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
