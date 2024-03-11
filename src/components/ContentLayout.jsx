import { Starships } from './Starships';
import { Planets } from './Planets';
import { Characters } from './Characters';

export const ContentLayout = () => {
  return (
    <div className='content-layout'>
      <Planets />
      <Characters />
      <Starships />
    </div>
  );
};
