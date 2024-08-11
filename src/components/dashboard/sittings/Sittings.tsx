import sittingIcon from "../../../assets/sitting-icon.svg";
import logoutIcon from "../../../assets/Logout.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TranslateContext } from "../../../context/Translate";

const Sittings = () => {
  const ctx = useContext(TranslateContext);

  const logoutHnadler = () => {
    ctx.notify("LO");
    sessionStorage.clear();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        borderRight: "1px solid #DDDDDD",
        background: "black",
      }}
    >
      <div style={{ flex: "1" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <button
          style={{
            cursor: "pointer",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
          }}
          onClick={logoutHnadler}
        >
          <Link
            to={"/home"}
            style={{
              cursor: "pointer",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
          >
            <img
              width={24}
              style={{ transform: "rotate(180deg)" }}
              src={logoutIcon}
              alt="icon"
            />
          </Link>
        </button>
        <button
          style={{
            cursor: "pointer",
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
          }}
        >
          <img width={24} src={sittingIcon} alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default Sittings;
