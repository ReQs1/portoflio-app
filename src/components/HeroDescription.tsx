import styled from "styled-components";
import IconLinks from "./IconLinks";

const DescriptionDiv = styled.div`
  text-align: center;
  max-width: 30rem;

  & h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: bold;
    color: var(--heading-color);
    margin-bottom: 1.4rem;
  }

  & p {
    font-size: 1rem;
    color: var(--primary-paragraph);
    letter-spacing: 0.5px;
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }

  @media screen and (min-width: 940px) {
    flex: 1;
    text-align: left;
    max-width: 50rem;

    & h1 {
      font-size: 3.5rem;
    }

    & p {
      padding-right: 2rem;
    }
  }

  @media screen and (min-width: 1340px) {
    & h1 {
      font-size: 4rem;
    }
    & p {
      padding-right: 8rem;
    }
  }
`;

function HeroDescription() {
  return (
    <DescriptionDiv>
      <h1>Front-End React Developer 👨‍💻</h1>
      <p>
        I'm Szymon, a passionate Front-end React Developer hailing from
        Częstochowa, Poland. 📍
      </p>
      <IconLinks />
    </DescriptionDiv>
  );
}

export default HeroDescription;
