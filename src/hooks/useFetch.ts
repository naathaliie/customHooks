import { useEffect, useState } from "react";
import { oneSwCaracterZ } from "../components/ShowFromAPI/SwTypes";

export const useFetch = (API:string) => {
const [theData, setTheData] = useState<oneSwCaracterZ[]>([]);

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
      }, []); //Kan lämnas tom då useEffect endast skall köras en gång

     
      return {theData}
};