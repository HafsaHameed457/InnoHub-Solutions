import React, { TextareaHTMLAttributes } from "react";
import { get } from "lodash";

import { TextArea as _TextArea } from "./PrimaryInput.styled";
import useCustomFormikContext from "../../hooks/useCustomFormikContext";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  handleChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: React.FC<TextAreaProps> = ({
  name = "",
  rows,
  cols,
  children,
  handleChange,
  ...otherProps
}) => {
  const { errors, values, setFieldValue, touched, setFieldTouched } =
    useCustomFormikContext();

  const handleTextAreaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setFieldValue(name, event.target.value, false);
  };

  return (
    <_TextArea
      value={get(values, name)}
      error={get(touched, name) && !!get(errors, name)}
      rows={rows}
      cols={cols}
      onChange={handleChange || handleTextAreaChange}
      onBlur={() => setFieldTouched(name)}
      {...otherProps}
    >
      {children}
    </_TextArea>
  );
};

export default TextArea;
