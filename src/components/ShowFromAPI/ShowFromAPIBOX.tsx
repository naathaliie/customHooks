/* Hämta info från API som skall skickas til card som i sin tur skall
rendera på sidan med hjälp av useEffect*/
import "./ShowFromAPIBOX.scss";
import ShowFromAPICARD from "./ShowFromAPICARD";
import { useFetch } from "../../hooks/useFetch";

//APIet
const API = "https://swapi.py4e.com/api/people/";

const ShowFromAPIBOX = () => {
  //Destructurerar ut theData i från min custom-hook useFetch
  const { theData } = useFetch(API);

  //consolLoggar theData --->NÄR<--- den har fått tillbaka från useFetch
  theData.length > 0 && console.log("hejsvejs, ", theData[3]);

  return (
    <div className="ShowFromAPIBOX">
      <h3>Hämta info från ett API</h3>

      {/* --->NÄR<--- datan har hämtats från useFetch så kallar vi på showFromAPICard där vi skickar med ett specifikt index i vår theData */}
      {theData.length > 0 ? <ShowFromAPICARD oneSw={theData[4]} /> : "laddar"}
    </div>
  );
};

export default ShowFromAPIBOX;
