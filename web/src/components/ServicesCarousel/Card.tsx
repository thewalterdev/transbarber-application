import styled from "styled-components";

export function ServiceCard() {
  return (
    <Container>
      <ImageContainer>
        <Image src="https://i.im.ge/2023/08/01/9RiATY.1.jpg" />
      </ImageContainer>
      <InfoContainer>
        <CutName>Corte</CutName>
        <CutDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla
          aut molestiae accusamus ex? Suscipit, ab sed iure officia maiores vero
          nesciunt sapiente voluptatem similique dolorum qui sint perferendis
          rem?
        </CutDescription>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  width: 250px;
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 330px;
  border: 3px solid #1770c9;
  border-radius: 6px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CutName = styled.h2`
  color: white;
`;
const CutDescription = styled.p`
  color: #808080;
`;
