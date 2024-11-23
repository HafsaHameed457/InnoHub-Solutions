import { useFormikContext } from "formik";

export default function useCustomFormikContext() {
  const isFormikContext: boolean = !!useFormikContext();
  const { errors, touched, setFieldValue, values, setFieldTouched } =
    isFormikContext
      ? useFormikContext<any>()
      : {
          errors: {},
          touched: {},
          setFieldValue: () => null,
          values: {},
          setFieldTouched: () => null,
        };

  return { errors, touched, setFieldValue, setFieldTouched, values };
}
