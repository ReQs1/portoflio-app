import styled from "styled-components";
import ContactDiv from "./ContactDiv";
import { MdOutlineMail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  padding: 2.5rem 1.2rem;

  & h2 {
    font-size: 1.1rem;
    color: var(--primary-accent);

    @media screen and (min-width: 1200px) {
      font-size: 1.3rem;
    }
  }
`;

const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (min-width: 640px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

function Contact() {
  return (
    <StyledSection>
      <h2>Contact</h2>

      <ContactOptions>
        <ContactDiv
          icon={<MdOutlineMail size={36} title="Email icon" />}
          title="Email"
          data="sz.calus@gmail.com"
        />
        <ContactDiv
          icon={<FaDiscord size={36} title="Discord icon" />}
          title="Discord"
          data="req___"
        />
      </ContactOptions>
    </StyledSection>
  );
}

export default Contact;
