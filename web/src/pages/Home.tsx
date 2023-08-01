import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "../components/Sidebar";
import devices from "../styles/breakpoints";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ServicesCarousel } from "../components/ServicesCarousel";
import LogoutButton from "../components/LogoutButton";

export default function Home() {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const { user } = useAuth();

  return (
    <Background>
      <Sidebar
        showSidebar={sidebarOpened}
        handleCloseSidebar={() => setSidebarOpened(false)}
      />
      <BackgroundWrapper>
        <TopButtons>
          <OpenSidebarButton onClick={() => setSidebarOpened(!sidebarOpened)} />

          <LogoutButton />
        </TopButtons>
        <HelloMessageDiv>
          <HelloSpan>
            Seja bem-vindo, <br />
            {user!.name}
          </HelloSpan>
        </HelloMessageDiv>
        <InfoLabel>Entre na lista clicando no botão abaixo.</InfoLabel>
        <br />
        <EnterToListButton>Coloque seu nome na lista</EnterToListButton>
        <ServicesCarousel.Root>
          <ServicesCarousel.Card />
          <ServicesCarousel.Card />
          <ServicesCarousel.Card />
        </ServicesCarousel.Root>
      </BackgroundWrapper>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 200px);
  height: 100%;
  background: #202020;
  padding: 10px 25px;
  overflow-y: auto;

  @media (max-width: ${devices.tablet}) {
    position: unset;
    width: 100%;
    height: 100%;
  }
`;

const TopButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OpenSidebarButton = styled(GiHamburgerMenu)`
  display: none;
  @media (max-width: ${devices.tablet}) {
    display: block;
    font-size: 25px;
    color: white;
    cursor: pointer;
  }
`;

const HelloMessageDiv = styled.div`
  margin: 10px 0 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const HelloSpan = styled.h1`
  color: white;
`;

const InfoLabel = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #808080;
`;

const EnterToListButton = styled.button`
  color: white;
  width: 220px;
  background: #808080;
  height: 35px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin: 10px 0;

  @media (max-width: ${devices.tablet}) {
    width: 100%;
  }
`;
