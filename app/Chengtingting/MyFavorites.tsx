'use client';
import React, { useEffect } from 'react';
import { todayRecipes } from './TiAom-Z';
import { recipes as festivalRecipes } from './chengzipi';
import useRecipeStore from '@/types/recipeStore';

const MyFavorites: React.FC = () => {
  const {
    likedTodayRecipes,
    likedFestivalRecipes,
    setLikedTodayRecipes,
    setLikedFestivalRecipes,
  } = useRecipeStore();

  useEffect(() => {
    const todayLikes: Record<number, boolean> = {};
    todayRecipes.forEach((_, idx) => {
      const val = localStorage.getItem(`todayRecipe_${idx}`);
      todayLikes[idx] = val === null ? true : val === 'true';
    });
    setLikedTodayRecipes(todayLikes);

    const festivalLikes: Record<number, boolean> = {};
    festivalRecipes.forEach((_, idx) => {
      const val = localStorage.getItem(`festivalRecipe_${idx}`);
      festivalLikes[idx] = val === null ? true : val === 'true';
    });
    setLikedFestivalRecipes(festivalLikes);
  }, []);

  const [favoriteRecipes, setFavoriteRecipes] = React.useState<any[]>([]);

  useEffect(() => {
    const todayFavorites = todayRecipes.filter((_, index) => likedTodayRecipes[index]);
    const festivalFavorites = festivalRecipes.filter((_, index) => likedFestivalRecipes[index]);
    setFavoriteRecipes([...todayFavorites, ...festivalFavorites]);
  }, [likedTodayRecipes, likedFestivalRecipes]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">我的收藏</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favoriteRecipes.map((recipe, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.name || `${recipe.festival} - ${recipe.dish}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {recipe.name || `${recipe.festival} - ${recipe.dish}`}
              </h2>
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