import React from 'react';
import { Recipe } from '@/globalData/mockData';
import RecipeCard from './RecipeCard';

interface FavoriteSectionProps {
    title: string;
    recipes: Recipe[];
    category: 'today' | 'festival' ;
    emptyMessage: string;
}

const FavoriteSection: React.FC<FavoriteSectionProps> = ({
    title,
    recipes,
    category,
    emptyMessage
}) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                {title}
                <span className="ml-2 text-sm font-normal text-gray-500">({recipes.length})</span>
            </h2>
            {recipes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} category={category} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-8 text-gray-500">
                    <p>{emptyMessage}</p>
                </div>
            )}
        </div>
    );
};

export default FavoriteSection;