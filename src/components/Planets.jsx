export const Planets = () => {
  //https://swapi.py4e.com/api/planets
  //https://starwars-visualguide.com/assets/img/planets/2.jpg

  return (
    <div className='item-list-layout'>
      <div>
        <p>gravity: Planet Gravity</p>
        <p>diameter: Planet Diameter</p>
      </div>
      <div className='item-image-layout'>
        <img className='item-image' src={'src'} alt='planet' />
      </div>
    </div>
  );
};
