import FromContainer from "../UI/FormContainer";
import GradiantBorder from "../UI/GradiantBorder";
import Buttons from "./Buttons";
import LoginForm from "./LoginFrom";

import classes from "./FormContainer.module.css";
import Logo from "./Logo";
import SignUpButton from "./SignUpButton";

const LoginContainer = () => {
  return (
    <FromContainer>
      <GradiantBorder className={classes.center}>
        <Logo title="Log In" welcome="welcome back to " name="amaizo" />
        <Buttons />
        <LoginForm />
      </GradiantBorder>
      <SignUpButton />
    </FromContainer>
  );
};

export default LoginContainer;
