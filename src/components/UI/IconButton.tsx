import classes from "./IconButton.module.css";

const IconButton: React.FC<{ icon: string; text?: string, style?: React.CSSProperties }> = (props) => {
  let newClassName = classes.icon;

  if (props.text) {
    newClassName = classes["icon-text"];
  }

  return (
    <div className={newClassName}>
      {props.text && <p>{props.text}</p>} <img style={props.style} src={props.icon} alt="" />
    </div>
  );
};

export default IconButton;
