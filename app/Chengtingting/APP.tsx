import React from 'react';
import TiAomZ from './TiAom-Z';
import FestivalRecipes from './chengzipi';
import MyFavorites from './MyFavorites';

const App: React.FC = () => {
  return (
    <div>
      <TiAomZ />
      <FestivalRecipes />
      <MyFavorites />
    </div>
  );
};

export default App;