import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/auth.routes";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components/native";
import ServiceSelector from "../../components/ServiceSelector";
import { useAuth } from "../../contexts/AuthContext";

const Cadastro = () => {
  const navigation = useNavigation<StackTypes>();
  const [name, setName] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const { user, login, signedIn, logout } = useAuth();

  useEffect(() => {
    handleCalcTotal();
  }, [selectedServices]);

  function handleCalcTotal() {
    let value = 0;
    selectedServices.map((service) => (value = value + service.valor));
    setValorTotal(value);
  }

  function handleAddService(nome: string, valor: number) {
    setSelectedServices([...selectedServices, { nome: nome, valor: valor }]);
  }

  const handleSubmit = () => {
    login({ username: name });
    //navigation.navigate("Home");
  };

  return (
    <Background>
      <BackgroundWrapper>
        <InputView>
          <Ionicons name="person-outline" color="white" size={26} />
          <InputField
            placeholder="Seu nome completo"
            onChangeText={(value) => setName(value)}
          />
        </InputView>
        <ServiceSelector handleAdd={handleAddService} />
        <ValorTotal>Total: R${valorTotal}</ValorTotal>
        <SubmitButton
          style={{ justifyContent: "center", alignItems: "center" }}
          activeOpacity={0.8}
          onPress={handleSubmit}
        >
          <Ionicons name="log-in-outline" size={32} color="white" />
          <EntrarLabel>Entre agora</EntrarLabel>
        </SubmitButton>
      </BackgroundWrapper>
    </Background>
  );
};

const ValorTotal = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #01c601;
`;

const BackgroundWrapper = styled.ScrollView``;

const Background = styled.View`
  background: #1b1b1b;
  flex: 1;
  padding: 50px 15px 5px 15px;
`;

const InputView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 15px;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const InputField = styled.TextInput`
  background: white;
  font-size: 16px;
  border-radius: 5px;
  width: 280px;
  padding: 0 15px;
`;

const SubmitButton = styled.TouchableOpacity`
  padding: 5px 25px;
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

export default Cadastro;
