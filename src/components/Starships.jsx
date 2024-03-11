import { useEffect, useState } from 'react';
import axios from 'axios';

export const Starships = () => {
  //https://swapi.py4e.com/api/Starships
  //https://starwars-visualguide.com/assets/img/Starships/2.jpg
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/starships').then((res) => {
      setStarships(res.data.results);
    });
  }, []);
  console.log(starships);

  return (
    <div className='item-list-layout'>
      {starships.map((starship, index) => (
        <>
          <div>
            <p>name: {starship.name}</p>
          </div>
          <div className='item-image-layout'>
            <img
              className='item-image'
              src={`https://starwars-visualguide.com/assets/img/starships/${
                index + 2
              }.jpg`}
              alt='planet'
            />
          </div>
        </>
      ))}
    </div>
  );
};
