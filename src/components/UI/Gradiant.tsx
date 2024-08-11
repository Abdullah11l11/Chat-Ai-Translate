import GradiantImage from "./../../assets/gradiant.png";
import classes from './Gradiant.module.css';

const Gradiant = () => {
  return (
    <div className={classes['image-holder']}>
      <img src={GradiantImage} alt="gradiant" />
    </div>
  );
};

export default Gradiant;