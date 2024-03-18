import styled from "styled-components";

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;

  & p {
    max-width: 40rem;
    color: var(--primary-paragraph);
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    @media screen and (min-width: 1200px) {
      &:not(:last-child) {
        margin-bottom: 2.5rem;
      }
    }
  }

  @media screen and (min-width: 940px) {
    height: 220px;
  }
`;

function AboutText() {
  return (
    <TextDiv>
      <p>
        👋 Hi there! I'm Szymon, a passionate learner on a mission to master
        React. 💻
      </p>
      <p>
        🌱 With a year of dedicated learning, I'm focused on becoming a skilled
        React developer. I thrive on challenges and am eager to contribute to
        innovative projects.
      </p>
      <p>Let's connect, collaborate, and code together! 🤝</p>
    </TextDiv>
  );
}

export default AboutText;
