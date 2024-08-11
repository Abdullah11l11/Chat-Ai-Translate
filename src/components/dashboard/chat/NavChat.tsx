import classes from "./NavChat.module.css";

import arrowRight from "../../../assets/Expand_right_double.svg";
import arrowDown from "../../../assets/Expand_down_light.svg";
import upload from "../../../assets/Arhive_alt_export_light.svg";
import save from "../../../assets/Save_light.svg";
import load from "../../../assets/Load_list_alt_light.svg";
import copy from "../../../assets/Copy_alt_light.svg";

import IconButton from "../../UI/IconButton";

const NavChat = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.child}>
        <IconButton icon={arrowRight} />
        <IconButton icon={arrowDown} text="Example Session" />
        <IconButton icon={upload} text="Upload Files" />
      </div>
      <div className={classes.child}>
        <IconButton icon={save} />
        <IconButton icon={load} />
        <IconButton icon={copy} />
        <IconButton icon={upload} style={{ transform: "rotate(180deg)" }} />
      </div>
    </nav>
  );
};
export default NavChat;
