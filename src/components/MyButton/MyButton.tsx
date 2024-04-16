import "./MyButton.scss";
import { MyButtonState } from "./MyButtonState";

type MyButtonProps = {
  buttonObj: MyButtonState;
};

const MyButton = ({ buttonObj }: MyButtonProps) => {
  return (
    <div className="MyButton">
      <button
        onClick={() => {
          {
            buttonObj.aFunction(1);
          }
        }}
      >
        {buttonObj.text}
      </button>
    </div>
  );
};

export default MyButton;
