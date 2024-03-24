import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import { LuAlignJustify } from "react-icons/lu";
import MobileNav from "./MobileNav";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  padding: 1.5rem 3rem;
  background-color: var(--section-bg-neutral);
  display: flex;
  justify-content: end;
  align-items: center;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;

const StyledUl = styled.ul`
  display: none;
  list-style: none;
  font-size: 1.1rem;
  font-weight: 500;

  & li {
    cursor: pointer;
  }

  & a {
    color: var(--primary-text);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--primary-accent);
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.25rem;
  }
`;

const BurgerBtn = styled.button`
  display: block;
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;

  & svg {
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const links = ["Home", "About", "Projects", "Contact"];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledNav>
        <StyledUl>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </StyledUl>

        <BurgerBtn onClick={() => setIsOpen((curr) => !curr)}>
          <LuAlignJustify />
        </BurgerBtn>
      </StyledNav>

      <AnimatePresence>
        {isOpen && <MobileNav setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
