import { forwardRef } from "react";
import classes from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  validate: boolean;
  invalideText?: string;
  onChange?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div>
      <input
        onChange={props.onChange}
        ref={ref}
        className={classes.input}
        type={props.type}
        placeholder={props.placeholder}
      />
      {!props.validate && (
        <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "5px" }}>
          {props.invalideText
            ? props.invalideText
            : `${props.placeholder} is required.`}
        </p>
      )}
    </div>
  );
});

export default Input;
