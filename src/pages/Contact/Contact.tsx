import { toast } from "react-toastify";
import FormikForm from "../../components/FormikForm/FormikForm";
import {
  H2,
  StyledButton,
} from "../../components/helpers/GeneralComponents.styled";
import useMediaQuery from "../../components/helpers/MediaQuery";
import {
  initialValues,
  validationSchema,
} from "../../components/helpers/validationSchema";
import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";
import { SolutionContainer } from "../Solution/Solution.styled";
const InnerForm = () => {
  return (
    <>
      <PrimaryInput name="name" label="Name" type="text" required />
      <PrimaryInput name="email" label="Email" type="email" required />
      <PrimaryInput
        name="message"
        label="Message"
        type="textarea"
        rows={5}
        required
      />
    </>
  );
};
const Contact = () => {
  const isMobile = useMediaQuery("(max-width: 450px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <SolutionContainer>
      <div className="my-2">
        <H2
          style={{
            fontSize: isMobile ? "20px" : "32px",
            lineHeight: isMobile ? "24px" : isTablet ? "36px" : "58px",
          }}
        >
          Reach out to us!!
        </H2>
      </div>
      <FormikForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: any, { resetForm }: { resetForm: () => void }) => {
          console.log(values);
          toast.success("Message sent successfully!!!");
          resetForm();
        }}
      >
        <div className="w-[900px] md:w-[500px] sm:w-[300px] bg-white opacity-1 lg:p-7 sm:p-3  border-none rounded-md flex flex-col items-center justify-center !lg:gap-5 sm:gap-3">
          <InnerForm />
          <StyledButton type="submit" className="!px-3 !py-1">
            Submit
          </StyledButton>
        </div>
      </FormikForm>
    </SolutionContainer>
  );
};

export default Contact;
