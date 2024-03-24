import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useDarkMode } from "../context/DarkMoveContext";

type ThemeButtonProps = {
  $isDarkMode: boolean;
};

const ThemeButton = styled.button<ThemeButtonProps>`
  position: fixed;
  bottom: 5rem;
  right: 3.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: ${(props) => (props.$isDarkMode ? "white" : "black")};
`;

function ThemeBtn() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ThemeButton onClick={toggleDarkMode} $isDarkMode={isDarkMode}>
      {isDarkMode ? (
        <MdOutlineLightMode size={26} />
      ) : (
        <MdOutlineDarkMode size={26} />
      )}
    </ThemeButton>
  );
}

export default ThemeBtn;
