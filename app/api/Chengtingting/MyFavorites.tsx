import React, { useEffect, useState } from 'react';
import TiAomZ, { todayRecipes } from './TiAom-Z';
import FestivalRecipes, { recipes as festivalRecipes } from './chengzipi';

const MyFavorites: React.FC = () => {
  // 默认全部喜欢，首次进入页面就有内容
  const [likedTodayRecipes, setLikedTodayRecipes] = useState<Record<number, boolean>>(() => {
    const likes: Record<number, boolean> = {};
    todayRecipes.forEach((_, idx) => {
      const val = localStorage.getItem(`todayRecipe_${idx}`);
      likes[idx] = val === null ? true : val === 'true';
    });
    return likes;
  });

  const [likedFestivalRecipes, setLikedFestivalRecipes] = useState<Record<number, boolean>>(() => {
    const likes: Record<number, boolean> = {};
    festivalRecipes.forEach((_, idx) => {
      const val = localStorage.getItem(`festivalRecipe_${idx}`);
      likes[idx] = val === null ? true : val === 'true';
    });
    return likes;
  });

  const [favoriteRecipes, setFavoriteRecipes] = useState<any[]>([]);

  useEffect(() => {
    const todayFavorites = todayRecipes.filter((_, index) => likedTodayRecipes[index]);
    const festivalFavorites = festivalRecipes.filter((_, index) => likedFestivalRecipes[index]);
    setFavoriteRecipes([...todayFavorites, ...festivalFavorites]);
  }, [likedTodayRecipes, likedFestivalRecipes, todayRecipes, festivalRecipes]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">我的收藏</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favoriteRecipes.map((recipe, index) => (
          <div 
            key={index} 
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={recipe.image} alt={recipe.name || `${recipe.festival} - ${recipe.dish}`} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.name || `${recipe.festival} - ${recipe.dish}`}</h2>
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

export default MyFavorites;