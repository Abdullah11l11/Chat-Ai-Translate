import { useEffect, useState, useRef } from "react";
import classes from "./MainButton.module.css";

type propsBotton = {
  onClick?: () => void;
  children: React.ReactNode;
};

interface Position {
  x: number;
  y: number;
}

const MainButton: React.FC<propsBotton> = (props) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    if (buttonRef.current) {
      buttonRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <button ref={buttonRef} className={classes["main-button"]}>
      <span
        className={classes["hover-effect"]}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          position: "absolute",
        }}
      ></span>
      <span className={classes["button-text"]}>{props.children}</span>
    </button>
  );
};

export default MainButton;
