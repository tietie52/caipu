import React from 'react';
import { Recipe } from '@/globalData/mockData';
import useStore from '@/globalState/index';

interface RecipeCardProps {
  recipe: Recipe;
  category: 'today' | 'festival' ;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, category }) => {
  const {
    removeFromTodayFavorites,
    removeFromFestivalFavorites,
  } = useStore();

  // 处理取消收藏
  const handleRemoveFavorite = () => {
    switch (category) {
      case 'today':
        removeFromTodayFavorites(recipe.id);
        break;
      case 'festival':
        removeFromFestivalFavorites(recipe.id);
        break;
    }
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div
        className="absolute top-4 right-4 text-3xl cursor-pointer z-10"
        onClick={handleRemoveFavorite}
        title="取消收藏"
      >
        <span className="text-red-500 hover:text-red-700">❤️</span>
      </div>
      <img 
        src={recipe.image} 
        alt={recipe.name} 
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.currentTarget.src = '/img/xshlogo01.png';
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{recipe.description}</p>
        <div className="text-xs text-gray-500">
          <span>材料: {recipe.ingredients.slice(0, 3).join('、')}</span>
          {recipe.ingredients.length > 3 && <span>等{recipe.ingredients.length}种</span>}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;