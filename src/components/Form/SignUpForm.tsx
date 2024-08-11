import { FormEvent, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./From.module.css";
import axios from "axios";
import SpinnerLoader from "../UI/SpinnerLoader";
import { TranslateContext } from "../../context/Translate";

const SignUpForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const ctx = useContext(TranslateContext);

  const [validation, setValidation] = useState({
    username: true,
    email: true,
    password: true,
    confirmPassword: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const makeInputEmpty = () => {
    if (usernameRef.current) usernameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
    if (confirmPasswordRef.current) confirmPasswordRef.current.value = "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const enteredUsername = usernameRef.current?.value.trim() ?? "";
    const enteredEmail = emailRef.current?.value.trim() ?? "";
    const enteredPassword = passwordRef.current?.value ?? "";
    const enteredConfirmPassword = confirmPasswordRef.current?.value ?? "";

    const isUsernameValid = enteredUsername !== "";
    const isEmailValid = validateEmail(enteredEmail);
    const isPasswordValid = enteredPassword.length >= 8;
    const isConfirmPasswordValid = enteredConfirmPassword === enteredPassword;

    setValidation({
      username: isUsernameValid,
      email: isEmailValid,
      password: isPasswordValid,
      confirmPassword: isConfirmPasswordValid,
    });

    if (
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlmEGZH5vrfRBlu53rdz-EI8abiAZd_UI",
          {
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }
        );
        console.log(res.data);
        makeInputEmpty();
        await axios.post(
          `https://chat-ai-translate-920ce-default-rtdb.firebaseio.com/users/${res.data.localId}.json`,
          {
            username: enteredUsername,
            email: enteredEmail,
          }
        );
        ctx.notify("R");
        navigate("/login");
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("error");
      ctx.notify("E");
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        validate={validation.username}
        ref={usernameRef}
        type="text"
        placeholder="Username"
      />
      <Input
        validate={validation.email}
        ref={emailRef}
        type="email"
        placeholder="Email"
      />
      <Input
        validate={validation.password}
        ref={passwordRef}
        type="password"
        placeholder="Password"
        invalideText="Password invalid"
      />
      <Input
        validate={validation.confirmPassword}
        ref={confirmPasswordRef}
        type="password"
        placeholder="Confirm Password"
        invalideText="The password does not match!"
      />
      {error && <p style={{color: 'red'}}>Something's Wrong!</p>}
      <Button>
        {isLoading ? <SpinnerLoader /> : "Create Your Free Account"}
      </Button>
      <p
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          color: "#7C7979",
        }}
      >
        by signing up you agree to our
        <span
          style={{
            cursor: "pointer",
            marginLeft: "5px",
            textDecoration: "underline",
            textTransform: "capitalize",
            color: "#2D313A",
          }}
        >
          Terms of service
        </span>
      </p>
    </form>
  );
};

export default SignUpForm;
