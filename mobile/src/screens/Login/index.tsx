import React, { useState } from "react";
import { View } from "../../styles/style";
import { ImageBackground, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/auth.routes";
import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import SaibaMais from "../../components/SaibaMais";
import Logo from "../../components/Logo";
import LoginAsBarberButton from "./LoginAsBarberButton";

const Login = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const navigation = useNavigation<StackTypes>();

  return (
    <View>
      <BackgroundImage
        source={{
          uri: "https://i.pinimg.com/originals/53/24/d2/5324d2ecdbba24066ae8d85df2b7f207.jpg",
        }}
        resizeMode="cover"
        blurRadius={15}
      >
        <SaibaMais />
        <Logo />
        <Container
          style={{ justifyContent: "center", alignItems: "center" }}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Ionicons name="log-in-outline" size={32} color="white" />
          <EntrarLabel>Entre como cliente</EntrarLabel>
        </Container>
        <LoginAsBarberButton />
      </BackgroundImage>
    </View>
  );
};

const Container = styled.TouchableOpacity`
  padding: 10px 30px;
  background: #42aade;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

const EntrarLabel = styled.Text`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Login;
