import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import styled from "styled-components";

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

const LinksDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & a {
    font-size: 2rem;
    color: black;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-accent);
    }
  }

  @media screen and (min-width: 940px) {
    justify-content: start;
  }
`;

function HeroDescription() {
  return (
    <DescriptionDiv>
      <h1>Front-End React Developer 💅</h1>
      <p>
        I'm Simon (Szymon), a passionate Front-end React Developer hailing from
        Częstochowa, Poland. 📍
      </p>
      <LinksDiv>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <CiLinkedin />
        </a>
      </LinksDiv>
    </DescriptionDiv>
  );
}

export default HeroDescription;
