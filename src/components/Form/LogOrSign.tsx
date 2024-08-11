import { Link } from "react-router-dom";
import classes from './LogOrSign.module.css'

const LogOrSign: React.FC<{
  question: string;
  answer: string;
  path: string;
}> = (props) => {
  return (
    <p className={classes.p}>
      {props.question}?
      <button
        style={{
          border: "none",
          background: "transparent",
          color: "white",
          marginLeft: "5px",
          cursor: "pointer",
        }}
      >
        <Link style={{color: "inherit", textDecoration: 'none'}} to={`/${props.path}`}>{props.answer}</Link>
      </button>
    </p>
  );
};

export default LogOrSign;
