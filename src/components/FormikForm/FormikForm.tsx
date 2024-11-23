import React from "react";
import { Formik } from "formik";

const FormikForm: React.FC<any> = ({
  initialValues,
  validationSchema,
  handleSubmit,
  onReset,
  className,
  children,
  ...props
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema ? validationSchema : null}
      onSubmit={handleSubmit}
      onReset={onReset}
      {...props}
    >
      {(formik: any) => (
        <form className={className} onSubmit={formik.handleSubmit}>
          {children}
        </form>
      )}
    </Formik>
  );
};

export default FormikForm;
