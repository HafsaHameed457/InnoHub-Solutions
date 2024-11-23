import styled from "styled-components";

export const StyledButton: React.FC<any> = styled.button`
  padding: ${(props: { padding: string }) => props.padding};
  background-color: #19124f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: ${(props: { fontSize: string }) => props.fontSize};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05); /* Slightly enlarge on hover */
  }

  &:active {
    background-color: #397d3a; /* Even darker green when clicked */
    transform: scale(1); /* Reset size */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2); /* Focus ring for accessibility */
  }

  &:disabled {
    background-color: #ccc; /* Disabled state */
    cursor: not-allowed; /* Change cursor to show it's disabled */
  }
`;

export const H2 = styled.h2`
  color: #19124f;

  line-height: 32px;
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
`;

export const H3 = styled.h3`
  color: #19124f;

  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
`;
export const H4 = styled.h4`
  color: #19124f;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  font-family: "Inter", sans-serif !important;
`;
export const H6 = styled.h6`
  color: #19124f;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-family: "Inter", sans-serif !important;
`;

export const BodyText = styled.p`
  color: #19124f;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  font-family: "Inter", sans-serif !important;
`;

export const BodyTextBold = styled.p`
  color: #19124f;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  font-family: "Inter", sans-serif !important;
`;
