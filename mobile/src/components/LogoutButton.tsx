import { useContext } from "react";
import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "../contexts/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  function handleSignOut() {
    logout();
  }

  return (
    <Container onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={35} color="white" />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  z-index: 1;
  padding-top: 6px;
`;

export default LogoutButton;
