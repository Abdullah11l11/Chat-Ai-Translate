import arrow from "../../assets/arrow.svg";
import classes from "./ArrowButton.module.css";

const ArrowButton: React.FC<{
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ style, onClick }) => {
  return (
    <button onClick={onClick} style={style} className={classes.button}>
      <img
        style={{
          color: "white",
          width: "30px",
          height: "30px",
          transition: ".1s linear",
        }}
        src={arrow}
        alt=""
      />
    </button>
  );
};

export default ArrowButton;
