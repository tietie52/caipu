import { useEffect } from 'react';
import  useStore  from '../../globalState';
import { todayRecipes } from './TiAom-Z';
import { recipes as festivalRecipes } from './chengzipi';
import MyFavorites from './MyFavorites';
import TiAom_Z from './TiAom-Z';
import Chengzipi from './chengzipi';
import Qlx from '../Qinlinxiang/Qlx';

const App = () => {
  const initialize = useStore((state: any) => state.initialize);

  useEffect(() => {
    // 确保数据加载后初始化状态
    initialize(todayRecipes.length, festivalRecipes.length);
  }, [initialize]);

  return (
    <>
    <MyFavorites />
    <TiAom_Z />
    <Chengzipi /> 
    <Qlx />
    </>
  );
};

export default App;