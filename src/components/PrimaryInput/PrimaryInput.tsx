import clsx from "clsx";
import { includes } from "lodash";
import styled from "styled-components";
import { H3 } from "../helpers/GeneralComponents.styled";
import InputText from "./InputText";
import TextArea from "./TextArea";
interface InputProps {
  className?: string;
  label?: string;
  required?: boolean;
  type?: string;
  name: string;
  size?: string;
  rows?: number;
  cols?: number;
  options?: any[];
  placeholder?: string;
  error?: boolean;
  touched?: boolean;
  children?: React.ReactNode;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  border?: string;
  oneLine?: boolean;
  isFormikContext?: boolean;
  labelRight?: boolean;
  mask?: string;
  renderInputField?: any;
  showMask?: boolean;
  [key: string]: any;
}
export const Container = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;
const PrimaryInput: React.FC<InputProps> = ({
  className,
  label,
  required,
  type = "text",
  name,
  size,
  rows,
  cols,
  options,
  placeholder,
  error,
  touched,
  children,
  handleChange,
  border,
  oneLine,
  isFormikContext,
  labelRight,
  mask,
  renderInputField,
  showMask,
  ...otherProps
}) => {
  let inputFieldJSX = null;
  const inputFieldClasses = clsx({
    sm: size === "sm",
    md: size === "md",
    lg: size === "lg",
    noBorder: !border,
  });
  const commonProps = {
    name: name,
    placeholder: placeholder,
    className: inputFieldClasses,
  };
  switch (type) {
    case "textarea":
      inputFieldJSX = (
        <TextArea {...commonProps} rows={rows} cols={cols} {...otherProps} />
      );
      break;
    default:
      inputFieldJSX = (
        <InputText
          handleChange={handleChange}
          {...commonProps}
          {...otherProps}
        />
      );
  }
  return (
    <Container className="">
      {label && !includes(["switch", "checkbox"], type) && (
        <div className="flex w-full">
          <H3 className=" pb-1">{label}</H3>
        </div>
      )}
      <InputContainer className="outer">
        {renderInputField ? renderInputField() : inputFieldJSX}
      </InputContainer>
    </Container>
  );
};

export default PrimaryInput;
