import * as Yup from "yup";

interface ValidationSchema {
  name: string;
  email: string;
  message: string;
}

export const validationSchema = (): Yup.Schema<ValidationSchema> => {
  return Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
};

export const initialValues = {
  name: "",
  email: "",
  message: "",
};
