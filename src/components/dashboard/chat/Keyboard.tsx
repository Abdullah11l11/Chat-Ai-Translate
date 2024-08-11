import GradiantBorder from "../../UI/GradiantBorder";

import trash from "../../../assets/Trash_light.svg";
import copy from "../../../assets/Copy_alt_light.svg";
import send from "../../../assets/send.svg";

import classes from "./Keyboard.module.css";
import { FormEvent, useContext, useRef } from "react";
import { TranslateContext } from "../../../context/Translate";

const Keyboard = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const ctx = useContext(TranslateContext);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const enteredText = inputRef.current?.value.trim() || "";

    if (enteredText !== "") {
      ctx.translate(enteredText).then(() => {
        console.log(ctx.texts);
        if (inputRef.current) inputRef.current.value = "";
      });
    }
  };


  return (
    <GradiantBorder className={classes.Keyboard}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter Text To Translate"
          />
          <img
            onClick={() => {
              inputRef.current ? (inputRef.current.value = "") : "";
            }}
            src={trash}
            alt="icon"
            className={`${classes.icon}`}
          />
          <img src={copy} alt="icon" className={classes.icon} />
          <button disabled={ctx.isTranslating}>
            <img
              src={send}
              alt="icon"
              className={`${classes.icon} ${classes["send-icon"]}`}
            />
          </button>
        </div>
      </form>
    </GradiantBorder>
  );
};

export default Keyboard;
