import styled from "styled-components/native";
import { View } from "../../styles/style";
import { Text } from "react-native";
import GetIntoListButton from "./GetIntoListButton";
import ServicesCarousel from "../../components/ServicesCarousel";

const Home = () => (
  <Background>
    <BackgroundWrapper>
      <Welcome>
        <WelcomeMessage>Seja bem-vindo,</WelcomeMessage>
        <WelcomeMessage>Sherman</WelcomeMessage>
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
