import { Link } from "react-router-dom";
import classes from "./NavLink.module.css";

const NavLink: React.FC<{
  icon: string;
  title: string;
  active?: boolean;
}> = (props) => {

  let newClassName = classes.link;

  if (props.active) {
    newClassName = `${classes.link} ${classes.active}`
  }

  return (
    <li >
      <Link to="/dashboard" className={newClassName}>
        <div>
          <img src={props.icon} alt="icon" />
        </div>
        <span>{props.title}</span>
      </Link>
    </li>
  );
};

export default NavLink;
