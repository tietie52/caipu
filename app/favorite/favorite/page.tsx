import React from 'react';
import useStore from '@/globalState/index';
import { todayRecipes } from '@/globalData/mockData';
import FavoriteSection from './components/FavoriteSection';
import { getRecipesByIds } from './utils/recipeUtils';
import EmptyState from './components/EmptyState';
import { getFestivalRecipes } from '@/app/Chengtingting/ctt';
const FavoritePage = () => {
  // 从全局状态获取收藏相关的方法和数据
  const {
    getAllTodayFavorites,
    getAllFestivalFavorites,
  } = useStore();

  // 获取收藏的菜谱ID
  const todayFavoriteIds = getAllTodayFavorites();
  const festivalFavoriteIds = getAllFestivalFavorites();

  // 获取节日菜谱数据
  const festivalRecipes = getFestivalRecipes();

  // 获取收藏的菜谱详情
  const todayFavoriteRecipes = getRecipesByIds(todayFavoriteIds, todayRecipes);
  const festivalFavoriteRecipes = getRecipesByIds(festivalFavoriteIds, festivalRecipes);

  const totalFavorites = todayFavoriteRecipes.length + festivalFavoriteRecipes.length;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">我的收藏</h1>
        <p className="text-center text-gray-600 mb-8">共收藏了 {totalFavorites} 道菜谱</p>

        {totalFavorites === 0 ? (
          <EmptyState />
        ) : (
          <>
            <FavoriteSection
              title="📅 今日推荐"
              recipes={todayFavoriteRecipes}
              category="today"
              emptyMessage="还没有收藏今日推荐的菜谱"
            />

            <FavoriteSection
              title="🎉 节日特辑"
              recipes={festivalFavoriteRecipes}
              category="festival"
              emptyMessage="还没有收藏节日菜谱"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;