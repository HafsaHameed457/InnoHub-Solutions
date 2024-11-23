import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0vw;
  margin-top: 60px;
  margin-bottom: 60px;

  height: 80vh;
  position: relative;
  z-index: 1;

  color: #fff;
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0 4vw;
    height: auto;
    margin-top: none;
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
    padding: 0 5vw;
    margin-top: none;
  }
`;
export const ParallaxContainer: React.FC<any> = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  width: 80%;
  border: none;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    height: 60vh;
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    height: 60vh;
    width: 100%;
  }
  overflow: hidden;
  transition: ${(props: { fadeIn: boolean }) =>
    props.fadeIn ? "opacity 1s ease-in-out" : "none"};
  opacity: ${(props: { fadeIn: boolean }) => (props.fadeIn ? 1 : 0)};
  background-image: url(${(props: { backgroundImage: string }) =>
    props.backgroundImage});
`;

// Styled component for the content
export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
`;
