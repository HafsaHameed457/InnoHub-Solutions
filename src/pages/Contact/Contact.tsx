import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";
import { SolutionContainer } from "../Solution/Solution.styled";

const Contact = () => {
  return (
    <SolutionContainer>
      <div className=" w-[500px] sm:w-[300px] bg-white opacity-[0.5]">
        <PrimaryInput name="name" label="Name" required />
      </div>
    </SolutionContainer>
  );
};

export default Contact;
