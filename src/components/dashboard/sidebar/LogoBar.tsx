import classes from "./LogoBar.module.css";
import ArrowButton from "../../UI/ArrowButton";

const LogoBar: React.FC<{ addLockedClass: () => void }> = (props) => {
  const clickHandler = () => {
    props.addLockedClass();
  };

  return (
    <div
      style={{
        padding: "15px",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className={classes["logo-bar"]}>
        <div className={classes.logo}>ac</div>
        <h2>amaizo chat</h2>
      </div>
      <ArrowButton onClick={clickHandler} />
    </div>
  );
};

export default LogoBar;
