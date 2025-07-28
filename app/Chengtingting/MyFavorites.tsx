'use client';
import React, { useEffect } from 'react';
import useStore from '../../globalState';
import { todayRecipes } from './TiAom-Z'; 
import { recipes as festivalRecipes } from './chengzipi'; 

const MyFavorites: React.FC = () => {
  const {
    getAllTodayFavorites,
    getAllFestivalFavorites,
    removeFromTodayFavorites,
    removeFromFestivalFavorites,
  } = useStore();

  // 添加调试日志
  useEffect(() => {
    console.log('收藏状态更新:', {
      todayFavorites: getAllTodayFavorites(),
      festivalFavorites: getAllFestivalFavorites(),
      todayRecipesCount: todayRecipes.length,
      festivalRecipesCount: festivalRecipes.length
    });
  }, [getAllTodayFavorites, getAllFestivalFavorites]);

  const todayFavoriteIds = new Set(getAllTodayFavorites());
  const festivalFavoriteIds = new Set(getAllFestivalFavorites());

  // 计算收藏的食谱
  const favoriteRecipes = [
    ...todayRecipes.filter(recipe => todayFavoriteIds.has(recipe.id)).map(recipe => ({ ...recipe, type: 'today' as const })),
    ...festivalRecipes.filter(recipe => festivalFavoriteIds.has(recipe.id)).map(recipe => ({ ...recipe, type: 'festival' as const }))
  ];

  // 如果没有任何收藏
  if (favoriteRecipes.length === 0) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">我的收藏</h1>
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md w-full">
          <p className="text-xl text-gray-600 mb-6">您还没有收藏任何食谱</p>
          <p className="text-gray-500">请点击菜谱上的 ♡ 图标添加收藏</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">我的收藏</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {favoriteRecipes.map((recipe) => (
          <div
            key={`${recipe.type}_${recipe.id}`}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* 取消收藏按钮 */}
            <button
              onClick={() => {
                if (recipe.type === 'today') {
                  removeFromTodayFavorites(recipe.id);
                } else {
                  removeFromFestivalFavorites(recipe.id);
                }
              }}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-red-500 p-2 rounded-full shadow-md transition-all z-10"
              aria-label="取消收藏"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            
            <img
              src={recipe.image}
              alt={recipe.type === 'today' ? recipe.name : `${recipe.festival} - ${recipe.dish}`}
              className="w-full h-56 sm:h-64 object-cover"
            />
            
            <div className="p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                {recipe.type === 'today' ? recipe.name : `${recipe.festival} - ${recipe.dish}`}
              </h2>
              
              <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-2">{recipe.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-1">材料:</h3>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 max-h-24 overflow-y-auto pr-2">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-1">步骤:</h3>
                  <ol className="list-decimal list-inside text-gray-600 text-sm space-y-1 max-h-32 overflow-y-auto pr-2">
                    {recipe.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;