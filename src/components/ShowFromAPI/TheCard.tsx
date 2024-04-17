import "./TheCard.scss";
import { oneSwCaracterZ } from "./SwTypes";

type TheCardProps = {
  oneSw: oneSwCaracterZ;
};

const TheCard = ({ oneSw }: TheCardProps) => {
  console.log("Inne i showFromAPICard", oneSw);
  return (
    <div className="ShowFromAPICARD">
      <h5>Kort fakta om {oneSw.name}</h5>
      <p>Födelsedag: {oneSw.birth_year}</p>
      <p>Ögonfärg: {oneSw.eye_color}</p>
      <p>Hårfärg: {oneSw.hair_color}</p>
      <p>Male/Female? {oneSw.gender}</p>
    </div>
  );
};

export default TheCard;
