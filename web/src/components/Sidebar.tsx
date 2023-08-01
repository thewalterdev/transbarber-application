import styled, { StyleSheetManager } from "styled-components";
import TB_Logo from "../assets/logo.svg";
import devices from "../styles/breakpoints";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  showSidebar: boolean;
  handleCloseSidebar: () => void;
}

export default function Sidebar({
  showSidebar = false,
  handleCloseSidebar,
}: Props) {
  return (
    <StyleSheetManager>
      <Background $showSidebar={showSidebar}>
        <BackgroundWrapper>
          <CloseSidebar onClick={handleCloseSidebar}>
            <AiOutlineCloseCircle color="white" size={25} />
          </CloseSidebar>
          <Logo src={TB_Logo} />
          <NavDiv>
            <NavButton>Lista de espera</NavButton>
            <NavButton>Serviços</NavButton>
            <NavButton>Localização</NavButton>
          </NavDiv>
        </BackgroundWrapper>
      </Background>
    </StyleSheetManager>
  );
}

const Background = styled.div<{ $showSidebar: boolean }>`
  width: 200px;
  height: 100%;

  @media (max-width: ${devices.tablet}) {
    display: ${(props) => (props.$showSidebar ? "block" : "none")};
    width: 100%;
  }
`;
const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #000000;
  padding: 30px 8px;
`;

const Logo = styled.img`
  width: 120px;
`;

const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NavButton = styled.button`
  width: 100%;
  background: white;
  height: 35px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const CloseSidebar = styled.button`
  display: none;
  position: absolute;
  left: 10px;
  top: 10px;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: ${devices.tablet}) {
    display: flex;
  }
`;
