import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import styled from "styled-components";

const LinksDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & a {
    font-size: 2rem;
    color: var(--primary-text);
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-accent);
    }
  }

  @media screen and (min-width: 940px) {
    justify-content: start;
  }
`;

function IconLinks() {
  return (
    <LinksDiv>
      <a
        href="https://github.com/ReQs1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/szymon-całus-8899982b4/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiLinkedin />
      </a>
    </LinksDiv>
  );
}

export default IconLinks;
