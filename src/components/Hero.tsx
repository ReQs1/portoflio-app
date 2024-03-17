import styled from "styled-components";

import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const StyledSection = styled.section`
  padding: 7.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  background-color: var(--section-bg);

  @media screen and (min-width: 940px) {
    min-height: 100vh;
    flex-direction: row;
    padding: 0 4rem;
  }
  @media screen and (min-width: 1340px) {
    padding: 0 12rem;
  }
  @media screen and (min-width: 1500px) {
    padding: 0 18rem;
  }
  @media screen and (min-width: 1700px) {
    padding: 0 22rem;
  }
`;

const DescriptionDiv = styled.div`
  text-align: center;
  max-width: 30rem;

  & h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: bold;
    color: #222020;
    margin-bottom: 1.4rem;
  }

  & p {
    font-size: 1rem;
    color: #4b4b4b;
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
      color: var(--hover-color);
    }
  }

  @media screen and (min-width: 940px) {
    justify-content: start;
  }
`;

const BlobDiv = styled.div`
  order: -1;
  width: 20rem;
  height: 20rem;
  border: 4px solid black;

  border-radius: 60% 30% 60% 80%;
  overflow: hidden;

  animation: blub 8s infinite;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 940px) {
    order: 0;
    flex: 1;
    max-width: 24rem;
    max-height: 24rem;
  }
`;

const SkillsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    width: fit-content;
    font-size: 1.1rem;
    font-weight: 600;
    padding-bottom: 5px;
    border-bottom: 2px solid black;

    margin-bottom: 1.5rem;
  }
`;

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
  "GitHub",
  "Tailwind",
  "Styled Components",
  "Redux",
  "Framer Motion",
];

function Hero() {
  return (
    <StyledSection>
      <DescriptionDiv>
        <h1>Front-End React Developer 💅</h1>
        <p>
          I'm Simon (Szymon), a passionate Front-end React Developer hailing
          from Częstochowa, Poland. 📍
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
      <BlobDiv>
        <img src="./guzior.png" alt="personal img" />
      </BlobDiv>
      <SkillsDiv>
        <h3>My Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </SkillsDiv>
    </StyledSection>
  );
}

export default Hero;
