import styled from "styled-components";
import ProjectsDiv from "./ProjectsDiv";

const StyledSection = styled.section`
  text-align: center;
  background-color: var(--section-bg);
  padding: 2.5rem 1.2rem;

  & h2 {
    font-size: 1.1rem;
    margin-bottom: 4rem;
    color: var(--primary-accent);

    @media screen and (min-width: 1200px) {
      font-size: 1.3rem;
    }
  }
`;

function Projects() {
  return (
    <StyledSection id="Projects">
      <h2>Projects</h2>

      <ProjectsDiv />
      <p style={{ marginTop: "4rem" }}>Currently working on next.js project</p>
    </StyledSection>
  );
}

export default Projects;
