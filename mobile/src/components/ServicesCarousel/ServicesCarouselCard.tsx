import styled from "styled-components/native";

const ServicesCarouselCard = () => {
  return (
    <Container>
      <ImageWrapper>
        <Thumb
          source={{
            uri: "https://midia.cefad.com.br/wp-content/uploads/2017/06/Profissao-de-barbeiro-continua-em-alta.jpg",
          }}
        />
      </ImageWrapper>
      <InfoContainer>
        <Title>Corte</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          blanditiis.
        </Description>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 4px;
  max-width: 240px;
  margin-right: 15px;
  margin-top: 20px;
`;

const ImageWrapper = styled.View`
  border: 2px solid #de4242;
  border-radius: 8px;
  width: 240px;
  height: 320px;
`;

const Thumb = styled.Image`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: 700;
`;

const Description = styled.Text`
  color: #5d5d5d;
  font-size: 16px;
  font-weight: 800;
`;

export default ServicesCarouselCard;
