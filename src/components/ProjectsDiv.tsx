import styled from "styled-components";
import ProjectBox from "./ProjectBox";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media screen and (min-width: 980px) {
    justify-content: space-evenly;
  }
`;

function ProjectsDiv() {
  return (
    <StyledDiv>
      <ProjectBox
        Title="Tv Show"
        ImgSrc="/TvShow_Preview.png"
        TechUsed={["React", "TypeScript", "Tailwind"]}
        Link="https://github.com/ReQs1/tv-show"
      />
      <ProjectBox
        Title="NextNotepad"
        ImgSrc="/NextNotepad_Preview.png"
        TechUsed={[
          "Next.js",
          "Typescript",
          "Tailwind",
          "Supabase",
          "DrizzleORM",
        ]}
        Link="https://github.com/ReQs1/NextNotepad"
      />
    </StyledDiv>
  );
}

export default ProjectsDiv;
