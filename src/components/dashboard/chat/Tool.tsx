import cancel from "../../../assets/Cancel_light.svg";
import BlackArrowUp from "../../../assets/BlackArrowUp.svg";

import classes from "./Tool.module.css";

const Tool = () => {
  return (
    <div className={classes.tool}>
      <div>
        <img src={cancel} alt="icon" />
        <p>No Tool</p>
        <div className={classes.arrow}>
          <img src={BlackArrowUp} alt="" />
          <img style={{transform: 'rotate(180deg)'}} src={BlackArrowUp} alt="" />
        </div>
      </div>
      <div>
        <p>
          Credit remaining <span>111</span>
        </p>
      </div>
    </div>
  );
};

export default Tool;
