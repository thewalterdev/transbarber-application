import styled from "styled-components/native";

const GetIntoListButton = () => {
  return (
    <ButtonContainer activeOpacity={0.7}>
      <Text>Coloque seu nome na lista</Text>
    </ButtonContainer>
  );
};

const Text = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  background: #5d5d5d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export default GetIntoListButton;
