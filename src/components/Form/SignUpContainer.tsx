import FromContainer from "../UI/FormContainer";
import GradiantBorder from "../UI/GradiantBorder";
import Buttons from "./Buttons";
import Logo from "./Logo";
import LogOrSign from "./LogOrSign";

import classes from "./FormContainer.module.css";
import SignUpForm from "./SignUpForm";

const SignUpContainer = () => {
  return (
    <FromContainer>
      <GradiantBorder className={classes.center}>
        <Logo title="Sign Up" welcome="Create Your Free Account"/>
        <Buttons />
        <SignUpForm />
      </GradiantBorder>
    <LogOrSign question="Already have an account" answer="Log In" path="login"/>
    </FromContainer>
  );
};

export default SignUpContainer;
