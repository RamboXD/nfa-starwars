import { useEffect, useState } from 'react';
import axios from 'axios';

export const Characters = () => {
  //https://swapi.py4e.com/api/people
  //https://starwars-visualguide.com/assets/img/characters/2.jpg
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people').then((res) => {
      setCharacters(res.data.results);
    });
  }, []);
  console.log(characters);

  return (
    <div className='item-list-layout'>
      {characters.map((character, index) => (
        <>
          <div>
            <p>name: {character.name}</p>
          </div>
          <div className='item-image-layout'>
            <img
              className='item-image'
              src={`https://starwars-visualguide.com/assets/img/characters/${
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
