import Gradiant from "../UI/Gradiant";
import classes from "./Summary.module.css";
import SummaryText from "./SummaryText";


const Summary: React.FC = () => {
  return (
    <div className={classes.main}>
      <Gradiant />
      <SummaryText />
      
    </div>
  );
};

export default Summary;
