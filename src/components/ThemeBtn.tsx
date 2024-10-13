import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";

type ThemeButtonProps = {
  $isDarkMode: boolean;
};

const ThemeButton = styled.button<ThemeButtonProps>`
  position: fixed;
  z-index: 999;
  bottom: 2rem;
  right: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.$isDarkMode ? "var(--section-bg)" : "white")};
  color: ${(props) => (props.$isDarkMode ? "white" : "black")};

  @media screen and (min-width: 768px) {
    bottom: 3rem;
    right: 3.5rem;
  }
`;

function ThemeBtn() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ThemeButton
      onClick={toggleDarkMode}
      $isDarkMode={isDarkMode}
      aria-label="toggle dark-mode"
    >
      {isDarkMode ? (
        <MdOutlineLightMode size={26} />
      ) : (
        <MdOutlineDarkMode size={26} />
      )}
    </ThemeButton>
  );
}

export default ThemeBtn;
