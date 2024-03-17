import styled from "styled-components";

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

function HeroImage() {
  return (
    <BlobDiv>
      <img src="./guzior.png" alt="personal img" />
    </BlobDiv>
  );
}

export default HeroImage;