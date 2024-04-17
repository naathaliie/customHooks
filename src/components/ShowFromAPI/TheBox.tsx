/* Hämta info från API som skall skickas til card som i sin tur skall
rendera på sidan med hjälp av useEffect*/
import "./TheBox.scss";
import TheCard from "./TheCard";
import { useFetch } from "../../hooks/useFetch";
import { oneSwCaracterZ } from "./SwTypes";

//APIet
const API = "https://swapi.py4e.com/api/people/";

const TheBox = () => {
  //Destructurerar ut theData i från min custom-hook useFetch
  //Det jag skickar in skall vara av en specifik datatyp, i dettafallet oneSwCaracter
  //i och med att det är vad jag förväntar mig skall returneras (theData)
  const { theData } = useFetch<oneSwCaracterZ>(API);

  //consolLoggar theData --->NÄR<--- den har fått tillbaka från useFetch
  theData.length > 0 && console.log("hejsvejs, ", theData[3]);

  return (
    <div className="TheBox">
      <h3>Hämta info från ett API</h3>

      {/* --->NÄR<--- datan har hämtats från useFetch så kallar vi på showFromAPICard där vi skickar med ett specifikt index i vår theData */}
      {theData.length > 0 ? <TheCard oneSw={theData[7]} /> : "laddar"}
    </div>
  );
};

export default TheBox;
