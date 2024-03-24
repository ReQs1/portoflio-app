import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  color: white;
  background-color: var(--footer-bg);
  padding: 1.25rem 0;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Made with ❤️</p>
    </StyledFooter>
  );
}

export default Footer;
