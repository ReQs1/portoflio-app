import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const MobileDiv = styled.div`
  position: fixed;
  background-color: var(--section-bg-neutral);
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  padding-top: 3rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  font-size: 1.4rem;
  font-weight: 500;
  height: 100%;

  & li {
    cursor: pointer;

    & a {
      text-decoration: none;
      color: var(--primary-text);
      transition: color 0.2s ease;

      &:hover {
        color: var(--primary-accent);
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 3rem;
  background-color: transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  color: var(--primary-text);

  cursor: pointer;

  & svg {
    height: 100%;
    width: 100%;
  }
`;

const FramerMobileDiv = motion(MobileDiv);

const links = ["Home", "About", "Projects", "Contact"];

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNav({ setIsOpen }: Props) {
  return (
    <FramerMobileDiv
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{
        duration: 0.3,
      }}
    >
      <CloseBtn onClick={() => setIsOpen(false)}>
        <AiOutlineClose />
      </CloseBtn>

      <MobileUl>
        {links.map((link) => (
          <li key={link} onClick={() => setIsOpen(false)}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </MobileUl>
    </FramerMobileDiv>
  );
}

export default MobileNav;
