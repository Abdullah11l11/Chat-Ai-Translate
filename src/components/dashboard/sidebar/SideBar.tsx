import { useEffect, useState } from "react";
import LogoBar from "./LogoBar";
import Menu from "./Menu";
import Profile from "./Profile";
import ViewCoinsButton from "./ViewCoinsButton";
import classes from "./SideBar.module.css";

const SideBar: React.FC<{ runLocked: boolean }> = ({ runLocked }) => {
  const [newStyle, setNewStyle] = useState(classes.nav);

  const addLockedHandler = () => {
    setNewStyle(`${classes.nav} ${classes.locked}`);
  };

  const removeLockedClass = () => {
    setNewStyle(classes.nav);
  };

  useEffect(() => {
    if (runLocked && newStyle !== `${classes.nav} ${classes.locked}`) addLockedHandler();
    else removeLockedClass();
  }, [runLocked]);



  return (
    <nav className={newStyle}>
      <div>
        <LogoBar addLockedClass={addLockedHandler} />
        <Menu />
      </div>
      <ViewCoinsButton />
      <Profile />
    </nav>
  );
};

export default SideBar;
