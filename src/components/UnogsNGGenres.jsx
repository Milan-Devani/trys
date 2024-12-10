import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UnogsNGGenres() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://netflix54.p.rapidapi.com/season/episodes/',
        params: {
          ids: '80077209,80117715',
          offset: '0',
          limit: '25',
          lang: 'en'
        },
        headers: {
          'x-rapidapi-key': '0b4936e54amsh0a926c60ecbb199p100fb7jsnc2d46d331ec2',
          'x-rapidapi-host': 'netflix54.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((episode, index) => (
            <li key={index}>{episode.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UnogsNGGenres;
