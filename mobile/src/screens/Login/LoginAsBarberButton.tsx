import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { StackTypes } from "../../routes/auth.routes";

const LoginAsBarberButton = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Button
      style={{ justifyContent: "center", alignItems: "center" }}
      activeOpacity={0.5}
    >
      <Container>
        <Label>Entrar como barbeiro</Label>
      </Container>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  width: auto;
`;

const Container = styled.View`
  padding: 5px 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

const Label = styled.Text`
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  color: white;
  text-decoration: underline;
`;

export default LoginAsBarberButton;
