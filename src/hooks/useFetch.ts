import { useEffect, useState } from "react";

//<T> är den datatyp som jag från TheCard säger åt useFetch att vara
export const useFetch = <T>(API:string) => {
const [theData, setTheData] = useState<T[]>([]);

    useEffect(() => {
        
        let ignore = false; // Variabel för att hantera avmontering av komponenten
    
        const fetchAPI = async () => {
          try {
            const response = await fetch(API);
            if (!ignore) {
              if (!response.ok) {
                throw Error("Det gick inte att ladda datan");
              } else {
                const data = await response.json();
                 setTheData(data.results);
                 
              }
            }
          } catch (error) {
            throw new Error("Blabla det fungerar inte");
          }
        };
    
        fetchAPI();
    
        return () => {
          ignore = true; // Markera att komponenten har avmonterats
        };
      }, []); //Kan lämnas tom OM useEffect endast skall köras en gång te.x när du hämtar från ett API en gång

     
      return {theData}
};