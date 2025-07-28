import { todayRecipes } from '@/globalData/mockData';
import useStore from '@/globalState/index';
import React from 'react';

const Zhongxinna = () => {
  // 从全局状态获取收藏相关的方法和状态
  const { isTodayFavorite, toggleTodayFavorite } = useStore();

  // 处理收藏状态切换（使用全局方法）
  const handleLikeToggle = (recipeId: number, e: React.MouseEvent) => {
    e.stopPropagation(); // 防止事件冒泡
    toggleTodayFavorite(recipeId); // 调用全局状态的切换方法
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">今日推荐菜谱</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {todayRecipes.map((recipe, index) => (
          <div 
            key={recipe.id} 
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div 
              className="absolute top-4 right-4 text-3xl cursor-pointer z-10"
              onClick={(e) => handleLikeToggle(recipe.id, e)}
            >
              {/* 使用全局状态判断收藏状态 */}
              {isTodayFavorite(recipe.id) ? 
                <span className="text-red-500">❤️</span> : 
                <span className="text-green-400">♡</span>
              }
            </div>
            <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.name}</h2>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <h3 className="text-lg font-medium text-gray-700 mb-2">材料:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <h3 className="text-lg font-medium text-gray-700 mb-2">步骤:</h3>
              <ol className="list-decimal list-inside text-gray-600">
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zhongxinna;
