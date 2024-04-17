import "./TheCard.scss";
import { oneSwCaracterZ } from "./SwTypes";

type TheCardProps = {
  oneSw: oneSwCaracterZ;
};

const TheCard = ({ oneSw }: TheCardProps) => {
  console.log("Inne i showFromAPICard", oneSw);
  return (
    <div className="TheCard">
      <h5>{oneSw.name ? `Fakta om ${oneSw.name}` : "Fakta"}</h5>
      <p>
        {oneSw.birth_year !== "unknown" && oneSw.birth_year !== "n/a"
          ? `Born:  ${oneSw.birth_year}`
          : "Born: unknown"}
      </p>
      <p>
        {oneSw.eye_color !== "unknown" && oneSw.eye_color !== "n/a"
          ? `Eye color:  ${oneSw.eye_color}`
          : "Eye color: unknown"}
      </p>
      <p>
        {oneSw.hair_color !== "unknown" && oneSw.hair_color !== "n/a"
          ? `Haircolor:  ${oneSw.hair_color}`
          : "Haircolor: unknown"}
      </p>
      <p>
        kön:
        {oneSw.gender === "female"
          ? " Female"
          : oneSw.gender === "male"
          ? " Male"
          : " unknown"}
      </p>
    </div>
  );
};

export default TheCard;
