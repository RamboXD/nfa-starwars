import StarWarsLogoSVG from '../assets/star-wars.svg';
import IconSearchSVG from '../assets/icon-search.svg';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    if (url === 'characters') {
      return;
    }
    navigate(url);
  };

  return (
    <header className='header'>
      <div className='links-layout'></div>
      <img src={StarWarsLogoSVG} />
      <div className='search-layout'>
        <img src={IconSearchSVG} className='search-icon' />

        <input placeholder='Search Star Wars' type='text' />
      </div>
      <button onClick={() => handleClick('planets')}>Planets</button>
      <button onClick={() => handleClick('characters')}>Characters</button>
      <button onClick={() => handleClick('spaceships')}>Spaceships</button>

      <Link to='/planets'>
        <button>Planets</button>
      </Link>
      <Link to='/characters'>
        <button>Characters</button>
      </Link>

      <Link to='/spaceships'>
        <button>Spaceships</button>
      </Link>
    </header>
  );
};
