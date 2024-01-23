import { useState, useEffect } from "react";
import axios from "axios";

function ActorSearchDetails(actorId) {
  const [apiActor, setApiActor] = useState([]);
  useEffect(() => {
    async function makeRequest() {
      try {
        const response = await axios.get(
          ` https://api.tvmaze.com/people/${actorId}`
        );
        setApiActor(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    makeRequest();
  }, [actorId]);
  return apiActor;
}
export default ActorSearchDetails;
