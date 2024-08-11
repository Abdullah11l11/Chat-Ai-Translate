import classes from "./Profile.module.css";
import arrowIcon from '../../../assets/arrow-angle.svg'

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes["profile-content"]}>
        <div className={classes["profile-icon"]}>A M</div>
        <div className={classes.info}>
          <h2>Abdullah Mz</h2>
          <p>11 Dialouguess</p>
        </div>
      </div>
      <div className={classes["arrows"]}>
        <img src={arrowIcon} alt="" />
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  );
};

export default Profile;
