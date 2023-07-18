import styled from "styled-components/native";

const Logo = () => {
  return <CustomImage source={require("../assets/logo.png")} />;
};

const CustomImage = styled.Image`
  transform: scale(0.9);
`;

export default Logo;
