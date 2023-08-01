import styled from "styled-components/native";
import { Text } from "react-native";
import GetIntoListButton from "./GetIntoListButton";
import ServicesCarousel from "../../components/ServicesCarousel";
import LogoutButton from "../../components/LogoutButton";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { io } from "socket.io-client";

const Home = () => {
  const socket = io("http://10.0.0.182:3333");
  const { user } = useAuth();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("conectou");
    });

    socket.disconnect();
  }, []);

  return (
    <Background>
      <BackgroundWrapper>
        <LogoutButton />
        <Welcome>
          <WelcomeMessage>Seja bem-vindo,</WelcomeMessage>
          <WelcomeMessage>{user.username}</WelcomeMessage>
          <WelcomeSubmessage>
            Entre na lista clicando no botão abaixo.
          </WelcomeSubmessage>
        </Welcome>
        <GetIntoListButton />
        <ServicesCarousel />
        <Text>Teste</Text>
      </BackgroundWrapper>
    </Background>
  );
};

const WelcomeTopMessages = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Welcome = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 0 5px;
`;

const WelcomeMessage = styled.Text`
  font-size: 34px;
  font-weight: 600;
  color: white;
`;

const WelcomeSubmessage = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #5d5d5d;
`;

const BackgroundWrapper = styled.ScrollView``;

const Background = styled.View`
  background: #1b1b1b;
  flex: 1;
  padding: 50px 15px 5px 15px;
`;

export default Home;
