import styled from "styled-components";

import HeroDescription from "./HeroDescription";
import HeroImage from "./HeroImage";
import HeroSkills from "./HeroSkills";

const StyledSection = styled.section`
  padding: 7.5rem 2rem 3rem 2rem;
  /* margin-bottom: 3rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  background-color: var(--section-bg);

  @media screen and (min-width: 940px) {
    flex-direction: row;
    padding-top: 8rem;
  }
  @media screen and (min-width: 1340px) {
    padding-top: 12rem;
  }
`;

function Hero() {
  return (
    <StyledSection id="Home">
      <HeroDescription />

      <HeroImage />

      <HeroSkills />
    </StyledSection>
  );
}

export default Hero;
