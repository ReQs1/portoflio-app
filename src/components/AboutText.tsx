import styled from "styled-components";

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;

  & p {
    font-size: 1.1rem;
    max-width: 40rem;
    color: var(--primary-paragraph);
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 1.2rem;
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
        👋 Hi there! I'm Szymon, self-taught front-end developer & computer
        science student. 💻
      </p>
      <p>
        🌱 After a year of self-taught front-end development, I'm seeking new
        challenges and opportunities where I can learn from more experienced
        people.
      </p>
      <p>🚀 Feel free to DM me if you're interested in collaborating</p>
    </TextDiv>
  );
}

export default AboutText;
