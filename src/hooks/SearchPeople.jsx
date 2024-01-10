import { useState, useEffect } from "react";
import axios from "axios";

function SearchPeople() {
  const [apiActor, setApiActor] = useState([]);
  useEffect(() => {
    async function makeRequest() {
      try {
        const response = await axios.get(`https://api.tvmaze.com/people`);
        setApiActor(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    makeRequest();
  },[]);
  return apiActor;
}
export default SearchPeople;
