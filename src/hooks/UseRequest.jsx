import { useState, useEffect } from "react";
import axios from "axios";

function useRequest(search) {
  const [apiData, setApiData] = useState([]);
  const longArray = apiData.map((item) => ({ show: item }));
  const filmsArray = apiData.length > 10 ? longArray.slice(0, 10) : apiData;

  useEffect(() => {
    async function makeRequest() {
      try {
        if (search.length === 0) {
          const response = await axios.get(
            `https://api.tvmaze.com/shows?page=1`
          );
          setApiData(response.data);
        }
        if (search.length >= 3) {
          const response = await axios.get(
            `https://api.tvmaze.com/search/shows?q=${search}`
          );
          setApiData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    makeRequest();
  }, [search]);
  return filmsArray;
}
export default useRequest;
