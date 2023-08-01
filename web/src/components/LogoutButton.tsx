import styled from "styled-components";
import { HiOutlineLogout } from "react-icons/hi";
import devices from "../styles/breakpoints";
import { useAuth } from "../contexts/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();

  return (
    <Container onClick={logout}>
      <HiOutlineLogout size={30} color="white" />
    </Container>
  );
}

const Container = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${devices.tablet}) {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;
