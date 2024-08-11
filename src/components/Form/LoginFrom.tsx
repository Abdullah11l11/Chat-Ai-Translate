import axios from "axios";
import { useState, useRef, FormEvent, useContext } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./From.module.css";
import SpinnerLoader from "../UI/SpinnerLoader";
import { useNavigate } from "react-router-dom";

import { TranslateContext } from "../../context/Translate";

const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [emailValidate, setEmailValidate] = useState(true);
  const [passwordValidate, setPasswordValidate] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const ctx = useContext(TranslateContext);

  const navigate = useNavigate();

  const makeInputEmpty = () => {
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const enteredEmail = emailRef.current?.value ?? "";
    const enteredPassword = passwordRef.current?.value ?? "";

    const isEmailValid = validateEmail(enteredEmail);
    const isPasswordValid = enteredPassword.length >= 8;

    setEmailValidate(isEmailValid);
    setPasswordValidate(isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlmEGZH5vrfRBlu53rdz-EI8abiAZd_UI",
          {
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }
        );
        const data = await axios.get(
          `https://chat-ai-translate-920ce-default-rtdb.firebaseio.com/users/${res.data.localId}.json`
        );
        console.log(Object.values(data.data)[0]);
        const userInfo = Object.values(data.data)[0];

        sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

        makeInputEmpty();
        ctx.notify("L");
        ctx.notify('W')
        navigate("/dashboard");
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
        ref={emailRef}
        validate={emailValidate}
        type="email"
        placeholder="Email"
      />
      <Input
        ref={passwordRef}
        validate={passwordValidate}
        type="password"
        placeholder="Password"
        invalideText="Password invalid"
      />
      <button className={classes.forget}>forget password ?</button>
      {error && <p style={{ color: "red" }}>Something's Wrong!</p>}
      <Button>{isLoading ? <SpinnerLoader /> : "Log In"}</Button>
    </form>
  );
};

export default LoginForm;
