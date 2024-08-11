import classes from "./SummaryText.module.css";
import MainButton from "../UI/MainButton";
import { Link } from "react-router-dom";

const SummaryText = () => {
  return (
    <div className={classes.holder}>
      <h1 className={classes.title}>
        <span>ai</span>-Powered <br /> productivity.
      </h1>
      <p className={classes.description}>
        <span>ai</span>-Powered tools in one to supercharge your team
        productivity. <br /> with taskade, all your work is in sync in one
        unified workspace.
      </p>
      <MainButton>
        <Link to="/login">Get Started</Link>
      </MainButton>
    </div>
  );
};

export default SummaryText;
