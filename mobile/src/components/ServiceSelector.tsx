import styled from "styled-components/native";
import Services from "../services.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

interface Props {
  handleAdd(nome: string, valor: number): void;
}

const ServiceSelector = ({ handleAdd }: Props) => {
  return (
    <List>
      {Services.map((service) => {
        return (
          <ItemContainer key={`service: ${service.nome}`}>
            <ItemLabel>{service.nome}</ItemLabel>
            <LeftContainer>
              <Price>R${service.valor},00</Price>
              <TouchableOpacity
                onPress={() => handleAdd(service.nome, service.valor)}
              >
                <Ionicons name="add-circle-outline" color="white" size={34} />
              </TouchableOpacity>
            </LeftContainer>
          </ItemContainer>
        );
      })}
    </List>
  );
};

const ItemLabel = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
  border-radius: 8px;
  padding: 5px 15px;
  margin-bottom: 5px;
`;

const Price = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #01c601;
`;

const LeftContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

const List = styled.View`
  display: flex;
  flex-direction: column;

  color: white;
  width: 100%;
  padding: 0 20px;
  height: auto;
`;

export default ServiceSelector;
