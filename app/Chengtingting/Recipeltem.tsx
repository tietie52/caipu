import React from 'react';
import useStore from '../../globalState'; 

interface RecipeItemProps {
  recipe: any;
  index: number;
  type: 'today' | 'festival';
  onClick?: () => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe, index, type, onClick }) => {
  // 从全局状态获取正确的方法
  const {
    isTodayFavorite,
    isFestivalFavorite,
    toggleTodayFavorite,
    toggleFestivalFavorite
  } = useStore();
  
  // 判断当前食谱是否被收藏（使用ID替代索引）
  const isLiked = type === 'today' 
    ? isTodayFavorite(recipe.id) 
    : isFestivalFavorite(recipe.id);
  
  // 处理收藏切换
  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // 防止事件冒泡
    if (type === 'today') {
      toggleTodayFavorite(recipe.id);
    } else {
      toggleFestivalFavorite(recipe.id);
    }
  };
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.name || `${recipe.festival} - ${recipe.dish}`}
          className="w-full h-48 object-cover"
        />
        {/* 收藏按钮 */}
        <button
          onClick={handleLikeToggle}
          className={`absolute top-3 right-3 p-2 rounded-full bg-white/80 shadow-md transition-all`}
          aria-label={isLiked ? "取消收藏" : "收藏"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill={isLiked ? "red" : "none"} 
            viewBox="0 0 24 24" 
            stroke={isLiked ? "red" : "currentColor"}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
            />
          </svg>
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {recipe.name || `${recipe.festival} - ${recipe.dish}`}
        </h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {recipe.description}
        </p>
      </div>
    </div>
  );
};

export default RecipeItem;
