import { useState } from "react";
import ArrowButton from "../UI/ArrowButton";
import Chat from "./chat/Chat";
import SideBar from "./sidebar/SideBar";
import Sittings from "./sittings/Sittings";

const DashboardContainer = () => {
  const [run, setRun] = useState(false);

  const sendToSideBar = () => {
    setRun((prev) => !prev);
  };

  return (
    <div style={{ height: "100vh", display: "flex", width: "100%", overflow: 'hidden'}}>
      <Sittings />
      <SideBar runLocked={run} />
      <ArrowButton
        onClick={sendToSideBar}
        style={{
          zIndex: "10000",
          top: "50%",
          left: "-15px",
          transform: run ? "scale(1.5) rotate(180deg)" : "scale(1.5)",
          backgroundColor: "transparent",
        }}
      />
      <Chat />
    </div>
  );
};




export default DashboardContainer;
