import styled from "styled-components";

const BlobDiv = styled.div`
  order: -1;
  max-width: 20rem;
  height: 16rem;
  border: 4px solid var(--primary-text);

  border-radius: 32% 68% 50% 50% / 26% 73% 27% 74%;
  overflow: hidden;

  animation: blub 10s infinite;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 940px) {
    order: 0;
    flex: 1;
    max-width: 24rem;
    height: 20rem;
  }
`;

function HeroImage() {
  return (
    <BlobDiv>
      <img src="/HeroImage.jpg" alt="personal img" loading="lazy" />
    </BlobDiv>
  );
}

export default HeroImage;
