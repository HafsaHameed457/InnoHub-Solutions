import styled from "styled-components";
export const InsightContainer: React.FC<any> = styled.div`
  padding: 2vw;
  width: 80%;
  border: 1px solid #19124f;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  padding: 0 0vw;
  margin-top: 60px;
  height: 80vh;
  position: relative;
  z-index: 1;

  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 0 4vw;
    height: auto;
    margin-top: none;
  }

  @media screen and (max-width: 480px) {
    padding: 0 5vw;
    margin-top: none;
  }
  overflow-y: auto;
`;
