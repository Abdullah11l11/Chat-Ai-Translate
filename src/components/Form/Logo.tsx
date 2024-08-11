import ImageLogo from "../../assets/logo.png";

import classes from "./Logo.module.css";

type LogoProps = {
  title: string;
  welcome: string;
  name?: string;
};

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <div className={classes.logo}>
      <img src={ImageLogo} alt="" />
      <h1>{props.title}</h1>
      <p>
        {props.welcome}
        {props.name && <span>{props.name}</span>}
      </p>
    </div>
  );
};

export default Logo;
