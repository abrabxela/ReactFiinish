import { useState, useEffect } from "react";
import axios from "axios";

function SearchEpisodes(Id) {
  const [apiEpisode, setApiEpisode] = useState([]);
  useEffect(() => {
    async function makeRequest() {
      try {
          const response = await axios.get(
            `https://api.tvmaze.com/seasons/${Id}/episodes`
          );
          setApiEpisode(response.data);
        }
        catch(error) {
                console.error(error);
        }
    }
    makeRequest();
  }, [Id]);
  return apiEpisode;
}
export default SearchEpisodes;