import styled from "styled-components";
import { BsCaretRightFill, BsCaretLeftFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export function Carousel({ children }: Props) {
  const [showThumbs, setShowThumbs] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (wrapperRef.current) {
        setShowThumbs(
          wrapperRef.current.scrollWidth > wrapperRef.current.clientWidth
        );
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Background>
      <BackgroundWrapper ref={wrapperRef}>{children}</BackgroundWrapper>
      <RightButton $showThumb={showThumbs} onClick={scrollRight}>
        <BsCaretRightFill size={35} />
      </RightButton>
      <LeftButton $showThumb={showThumbs} onClick={scrollLeft}>
        <BsCaretLeftFill size={35} />
      </LeftButton>
    </Background>
  );
}

const Background = styled.div`
  position: relative;
  width: 100%;
`;

const BackgroundWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  column-gap: 12px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavigateButton = styled.button<{ $showThumb: boolean }>`
  display: ${(props) => (props.$showThumb ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  position: absolute;
  top: 0;
  height: 100%;
  color: white;
  cursor: pointer;

  transition: color 0.2s, background 0.2s;

  &:hover {
    color: black;
    background: white;
  }
`;

const RightButton = styled(NavigateButton)`
  right: 0;
`;

const LeftButton = styled(NavigateButton)`
  left: 0;
`;
