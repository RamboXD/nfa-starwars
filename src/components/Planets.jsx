import { useEffect, useState } from 'react';
import axios from 'axios';

export const Planets = () => {
  //https://swapi.py4e.com/api/planets
  //https://starwars-visualguide.com/assets/img/planets/2.jpg
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/planets').then((res) => {
      setPlanets(res.data.results);
    });
  }, []);
  console.log(planets);

  return (
    <div className='item-list-layout'>
      {planets.map((planet, index) => (
        <>
          <div>
            <p>name: {planet.name}</p>
            <p>gravity: {planet.gravity}</p>
            <p>diameter: {planet.diameter}</p>
          </div>
          <div className='item-image-layout'>
            <img
              className='item-image'
              src={`https://starwars-visualguide.com/assets/img/planets/${
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
