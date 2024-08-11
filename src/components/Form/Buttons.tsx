import { Link } from "react-router-dom";

import classes from "./Buttons.module.css";
import { useContext } from "react";
import { TranslateContext } from "../../context/Translate";

const Buttons = () => {
  const ctx = useContext(TranslateContext);

  return (
    <div className={classes.container}>
      <button className={classes.google}>sign up with google</button>
      <button className={classes.apple}>sign up with apple</button>
      <button onClick={() => ctx.notify("W")}>
        <Link to="/dashboard">Skip for now</Link>
      </button>
    </div>
  );
};

export default Buttons;
