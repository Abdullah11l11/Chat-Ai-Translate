import { Link } from "react-router-dom";
import LogOrSign from "./LogOrSign";
import { useContext } from "react";
import { TranslateContext } from "../../context/Translate";

import classes from './SignUpButton.module.css'

const SignUpButton = () => {
  const ctx = useContext(TranslateContext);

  return (
    <div className={classes['signup-button']}>
      <LogOrSign
        question="Don't have an account"
        answer="Sign Up"
        path="signUp"
      />
      <button
        onClick={() => ctx.notify("W")}
        style={{ color: "#FF805F", background: "transparent", border: "none" }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            textTransform: "capitalize",
          }}
          to={"/dashboard"}
        >
          start chat
        </Link>
      </button>
    </div>
  );
};

export default SignUpButton;
