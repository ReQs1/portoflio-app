import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import { LuAlignJustify } from "react-icons/lu";
import MobileNav from "./MobileNav";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 3rem;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
`;

const H3 = styled.h3`
  font-size: 1.2rem;
  color: #303235;
  cursor: pointer;
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
    color: black;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #ff6b6b;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
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
        <H3>Szymon.dev</H3>

        <StyledUl>
          {links.map((link) => (
            <li key={link}>
              <a href={`#`}>{link}</a>
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
