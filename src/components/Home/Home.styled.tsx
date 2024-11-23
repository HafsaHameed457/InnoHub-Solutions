import styled from "styled-components";

export const ParallaxContainer = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 100vh;
  width: 100%;
  overflow: hidden;
  transition: transform 0.1s ease-out;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
`;
