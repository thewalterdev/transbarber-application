import { ActivityIndicator, View } from "react-native";
import styled from "styled-components/native";

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color="#ffffff" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #1b1b1b;
`;
