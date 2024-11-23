import styled, { css } from "styled-components";

export const errorBorder = css<{ error?: boolean }>`
  border: 1px solid ${({ error = false }) => (error ? "#ed3432" : "#d6dadf")};
`;
export const inputStyles = css`
  border: 1px solid #d6dadf;
  border-radius: 8px;
  font-size: 13px;
  outline: none;
  width: 100%;
  background-color: #ffffff;
  letter-spacing: 0.02em;

  &:focus {
    border-color: #a397e1;
  }

  &.sm {
    padding: 8px 12px;
  }
  &.md {
    padding: 10px 12px;
  }
  &.lg {
    padding: 14px 14px;
  }
  ::placeholder {
    color: #757195;
    font-size: 13px;
    font-weight: 400 !important;
    line-height: 24px;
    font-family: "Inter", sans-serif !important;
  }

  color: #19124f !important;
  font-family: "Inter", sans-serif !important;
  font-weight: 400 !important;
  line-height: 24px;
`;

export const InputTextField: React.FC<any> = styled.input`
  ${inputStyles};
  ${errorBorder};
`;

export const TextArea: React.FC<any> = styled.textarea`
  ${inputStyles};
  ${errorBorder};
`;
