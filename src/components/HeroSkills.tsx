import { motion } from "framer-motion";
import styled from "styled-components";

const SkillsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h3 {
    white-space: nowrap;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--primary-text);
    color: var(--primary-text);
  }

  @media screen and (min-width: 940px) {
    flex-direction: row;
    width: 100%;
    padding: 0 10rem;
    color: var(--primary-text);

    & h3 {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;

      padding-right: 1.5rem;
      margin-right: 2rem;
      border-right: 2px solid var(--primary-text);
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
    padding: 0.3rem 0.8rem;
    color: var(--primary-text);
    font-weight: 500;
    background-color: var(--section-bg-neutral);
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    transition: color 0.3s ease;
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

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const MotionSkillUl = motion(SkillUl);

function HeroSkills() {
  return (
    <SkillsDiv>
      <h3>My Skills</h3>
      <MotionSkillUl
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        {skills.map((skill, index) => (
          <motion.li key={index} variants={item}>
            {skill}
          </motion.li>
        ))}
      </MotionSkillUl>
    </SkillsDiv>
  );
}

export default HeroSkills;
