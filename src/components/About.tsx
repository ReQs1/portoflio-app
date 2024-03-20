import styled from "styled-components";
import AboutText from "./AboutText";
import AboutLottie from "./AboutLottie";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 3rem;
  background-color: var(--section-bg-neutral);

  & h2 {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: var(--primary-accent);

    @media screen and (min-width: 1200px) {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 2.5rem 7rem;
  }
`;

const GenericDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media screen and (min-width: 940px) {
    flex-direction: row;
    gap: 6rem;
  }

  @media screen and (min-width: 1200px) {
    gap: 8rem;
  }
`;

function About() {
  return (
    <StyledSection id="About">
      <h2>About me</h2>
      <GenericDiv>
        <AboutText />
        <AboutLottie />
      </GenericDiv>
    </StyledSection>
  );
}

export default About;
