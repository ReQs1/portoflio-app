import styled from "styled-components";

const SkillsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h3 {
    width: fit-content;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding-bottom: 5px;
    border-bottom: 2px solid black;
  }

  @media screen and (min-width: 940px) {
    flex-direction: row;
    width: 100%;
    padding: 0 10rem;

    & h3 {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;

      padding-right: 2rem;
      margin-right: 2rem;
      border-right: 2px solid black;
    }
  }
`;

const SkillUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  list-style: none;

  & li {
    padding: 0.3rem 0.6rem;
    background-color: white;
    border: 2px solid black;
    border-radius: 5px;
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

function HeroSkills() {
  return (
    <SkillsDiv>
      <h3>My Skills</h3>
      <SkillUl>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </SkillUl>
    </SkillsDiv>
  );
}

export default HeroSkills;
