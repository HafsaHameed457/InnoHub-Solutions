import { useState } from "react";
import HomeImg from "../../assets/home.jpg";
import {
  H2,
  H3,
  StyledButton,
} from "../../components/helpers/GeneralComponents.styled";
import { SolutionContainer } from "./Solution.styled";

import Icon from "../../components/helpers/Icon";
import useMediaQuery from "../../components/helpers/MediaQuery";
import { Content, ParallaxContainer } from "../Home/Home.styled";
const services = [
  {
    title: "Custom Software Development",
    icon: "💻",
    description: "Tailored solutions for your unique business needs.",
    buttonText: "Learn More",
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    description: "Harness the power of AI for smarter decision-making.",
    buttonText: "Discover AI",
  },
  {
    title: "Cloud Integration",
    icon: "☁️",
    description: "Seamless integration with cloud platforms.",
    buttonText: "Explore Cloud",
  },
  {
    title: "IoT Solutions",
    icon: "📡",
    description: "Innovative IoT solutions to connect your devices.",
    buttonText: "Learn About IoT",
  },
];

const Solution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 450px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <SolutionContainer>
      <H2
        style={{
          fontSize: isMobile ? "20px" : isTablet ? "32px" : "54px",
          lineHeight: isMobile ? "24px" : isTablet ? "36px" : "58px",
        }}
      >
        Our Solutions
      </H2>

      <div className="w-[100%] flex items-center justify-center mt-5 relative gap-3">
        <div className="mx-3">
          <button
            onClick={prevCard}
            className="bg-white p-2 border-2 border-black rounded-full text-black text-[20px] font-bold"
          >
            <Icon icon="chevronLeft" />
          </button>
        </div>
        {services.map((service: any, index: any) => {
          if (index !== currentIndex) {
            return null;
          }
          return (
            <ParallaxContainer
              fadeIn={false}
              backgroundImage={HomeImg}
              className="flex items-center justify-center opacity-0 translate-x-full transition-all duration-100 ease-out group"
              style={{
                animation: "fadeInSlideIn 0.3s ease-out forwards",
                animationDelay: `${0.1}s`,
              }}
            >
              <Content className="flex flex-col gap-5 sm:gap-3 md:gap-4 items-center">
                <div className="text-[100px]">{service.icon}</div>
                <H2
                  style={{
                    fontSize: isMobile ? "20px" : isTablet ? "32px" : "54px",
                    lineHeight: isMobile ? "24px" : isTablet ? "36px" : "58px",
                  }}
                >
                  {service.title}
                </H2>
                <H3
                  style={{
                    fontSize: isMobile ? "16px" : isTablet ? "18px" : "24px",
                    lineHeight: isMobile ? "20px" : isTablet ? "24px" : "32px",
                  }}
                >
                  {service.description}
                </H3>
                <StyledButton
                  fontSize={isMobile ? "16px" : isTablet ? "18px" : "20px"}
                  padding={
                    isMobile
                      ? "10px 20px"
                      : isTablet
                      ? "15px 20px"
                      : "20px 25px"
                  }
                >
                  {service.buttonText}
                </StyledButton>
              </Content>
            </ParallaxContainer>
          );
        })}
        <div className="mx-3">
          <button
            onClick={nextCard}
            className="bg-white p-2 border-2 border-black rounded-full text-black text-[20px] font-bold"
          >
            <Icon icon="chevronRight" />
          </button>
        </div>
      </div>
    </SolutionContainer>
  );
};

export default Solution;
