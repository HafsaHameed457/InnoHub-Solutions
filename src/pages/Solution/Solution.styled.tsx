import styled from "styled-components";

export const SolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0vw;
  margin-top: 60px;
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
