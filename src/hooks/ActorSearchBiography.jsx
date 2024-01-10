import { useState, useEffect } from "react";
import axios from "axios";

function ActorSearchBiography(name) {
  const [apiActor, setApiActor] = useState([]);
  const [nameActor, setNameActor] = useState([]);
  useEffect(() => {
    
    console.log(`${name}`);

    if(name !== undefined){
      



      

      const searchQuery = name;
      const apiUrl = 'https://en.wikipedia.org/w/api.php';
      
      const headers = new Headers({
        'Api-User-Agent': 'MyFirstSite/1.0 (abrabxela@gmail.com)',
      });
      
      const params = new URLSearchParams({
        format: 'json',
        action: 'query',
        list: 'search',
        srsearch: searchQuery,
        utf8: '',
      });
      
      const urlWithParams = `${apiUrl}?${params.toString()}`;
      
      fetch(urlWithParams, {
        method: 'GET',
        headers: headers,
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
       
    }

    
  }, [name]);
  
  return apiActor;
  
}
export default ActorSearchBiography;