import coinsIcon from "../../../assets/icons8-coins-50 1.svg";
import Button from "../../UI/Button";

const ViewCoinsButton = () => {
  return (
    <Button style={{ padding: "10px 5px", width: "80%", margin: "auto" }}>
      <img src={coinsIcon} alt="" />
      <span style={{ color: "#2E2E32", fontSize: "1rem", fontWeight: "bold" }}>
        view plan
      </span>
    </Button>
  );
};

export default ViewCoinsButton