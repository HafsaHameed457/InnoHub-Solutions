import React, { InputHTMLAttributes, useEffect } from "react";
import { get } from "lodash";
import { InputTextField } from "./PrimaryInput.styled";
import useCustomFormikContext from "../../hooks/useCustomFormikContext";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange?: (e: any) => void;
  placeholder?: string;
  name: string;
  className?: string;
}

const InputText: React.FC<InputTextProps> = ({
  name = "",
  handleChange,
  placeholder,
  className = "",
  ...otherProps
}) => {
  const { errors, values, touched, setFieldValue, setFieldTouched } =
    useCustomFormikContext();

  useEffect(() => {
    if (get(errors, name)) {
      setFieldTouched(name);
    }
  }, [touched]);

  return (
    <InputTextField
      name={name}
      placeholder={placeholder}
      className={`w-full !p-2 !border-ds-color-border  ${className}`}
      onChange={(e: any) => {
        if (handleChange) {
          handleChange(e);
        } else {
          setFieldValue(name, e.target.value);
        }
      }}
      value={get(values, name)}
      error={get(touched, name) && get(errors, name)}
      {...otherProps}
    />
  );
};

export default InputText;
