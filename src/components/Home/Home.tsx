import { Content, HomeContainer, ParallaxContainer } from "./Home.styled";
import HomeImg from "../../assets/home.jpg";
import { useEffect, useState } from "react";
import { H2, H4, StyledButton } from "../helpers/GeneralComponents.styled";
import useMediaQuery from "../helpers/MediaQuery";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const isMobile = useMediaQuery("(max-width: 450px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <HomeContainer>
      <ParallaxContainer fadeIn={fadeIn} backgroundImage={HomeImg}>
        <Content>
          <H2
            style={{
              fontSize: isMobile ? "20px" : isTablet ? "32px" : "54px",
              lineHeight: isMobile ? "24px" : isTablet ? "36px" : "58px",
            }}
          >
            Transform Your Ideas into Reality with InnoHub
          </H2>
          <H4
            style={{
              fontSize: isMobile ? "16px" : isTablet ? "18px" : "24px",
              lineHeight: isMobile ? "20px" : isTablet ? "24px" : "32px",
            }}
          >
            Your Partner in Innovation and Growth
          </H4>
          <StyledButton
            fontSize={isMobile ? "16px" : isTablet ? "18px" : "20px"}
            padding={
              isMobile ? "10px 20px" : isTablet ? "15px 20px" : "20px 25px"
            }
          >
            Get started
          </StyledButton>
        </Content>
      </ParallaxContainer>
    </HomeContainer>
  );
};

export default Home;
