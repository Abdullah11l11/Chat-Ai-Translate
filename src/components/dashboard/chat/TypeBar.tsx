import Keyboard from "./Keyboard";
import Tool from "./Tool";
import classes from "./TypeBar.module.css";

const TypeBar = () => {
  return <div style={{}} className={classes["type-bar"]}>
    <Keyboard />
    <Tool/>
  </div>;
};

export default TypeBar;
