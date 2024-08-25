import styled from "styled-components";

type Props = {
  Title: string;
  ImgSrc: string;
  TechUsed: string[];
  Link: string;
};

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 30rem;

  & img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    aspect-ratio: 16 / 9;
    transition: transform 0.4s ease;

    &:hover {
      transform: translateY(-10px);
    }
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--primary-text);

  & h3 {
    font-size: 1.3rem;
  }

  & ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;

    & li {
      font-weight: 500;
    }
  }
`;

function ProjectBox({ Title, ImgSrc, TechUsed, Link }: Props) {
  return (
    <ProjectDiv>
      <a href={Link} target="_blank" rel="noopener noreferrer">
        <img src={ImgSrc} alt={`${Title} Preview`} />
      </a>
      <InfoDiv>
        <h3>{Title}</h3>
        <ul>
          {TechUsed.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </InfoDiv>
    </ProjectDiv>
  );
}

export default ProjectBox;
