import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { StackTypes } from "../routes/auth.routes";

const SaibaMais = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Button
      style={{ justifyContent: "center", alignItems: "center" }}
      activeOpacity={0.5}
    >
      <Container>
        <Ionicons name="information-circle-outline" size={25} color="white" />
        <Label>Saiba mais</Label>
      </Container>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  top: 5%;
  left: 5%;
  position: absolute;
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
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

export default SaibaMais;
