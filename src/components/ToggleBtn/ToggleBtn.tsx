import { useToggle } from "../../hooks/useToggle";
import "./ToggleBtn.scss";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa";

const ToggleBtn = () => {
  const { toggle, changeToggle } = useToggle();

  return (
    <button
      className="ToggleBtn"
      onClick={() => {
        changeToggle();
      }}
    >
      {toggle ? <FaToggleOn /> : <FaToggleOff />}
    </button>
  );
};

export default ToggleBtn;
