import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchCastCredits(actorId) {
  const [apiActorCast, setApiActorCast] = useState([]);
  const arrayCast =[];
  useEffect(() => {
    async function makeRequest() {
      try {
          const response = await axios.get(
            ` https://api.tvmaze.com/people/${actorId}/castcredits`
          );
          {response.data.map((element) => {
            const { _links } = { ...element };
            const { show } = { ..._links };
            const { href } = { ...show };
            const parts = href.split("/");
            const numberCast = parts[parts.length - 1];
            arrayCast.push(numberCast) 
            
            return (
             setApiActorCast(arrayCast)
             
            )
            
          }
          )}
          
        }
        catch(error) {
                console.error(error);
        }
    }
    makeRequest();
    
  }, [actorId]);
  
  return apiActorCast;
  
}
