import styled from "styled-components/native";
import ServicesCarouselCard from "./ServicesCarouselCard";

const ServicesCarousel = () => {
  return (
    <Background horizontal={true} showsHorizontalScrollIndicator={false}>
      <ServicesCarouselCard />
      <ServicesCarouselCard />
    </Background>
  );
};

const Background = styled.ScrollView`
  display: flex;
`;

export default ServicesCarousel;
