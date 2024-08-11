import classes from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = (props) => {
  return <button style={props.style} className={classes.button}>{props.children}</button>;
};

export default Button;
