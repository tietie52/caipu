import React, { useState } from 'react';

const FestivalRecipes: React.FC = () => {
  const recipes = [
    {
      festival: '春节',
      dish: '饺子',
      description: '饺子是春节的传统食物，象征着财富和团圆。',
      ingredients: ['面粉', '猪肉', '白菜', '葱', '姜'],
      steps: [
        '将面粉和水混合，揉成面团',
        '将猪肉、白菜、葱、姜切碎，混合成馅',
        '将面团擀成饺子皮，包入馅料',
        '将饺子放入沸水中煮熟'
      ],
      image: '/img/饺子.jpg'
    },
    {
      festival: '端午节',
      dish: '粽子',
      description: '粽子是端午节的传统食物，纪念屈原。',
      ingredients: ['糯米', '粽叶', '猪肉', '咸蛋黄'],
      steps: [
        '将糯米浸泡数小时',
        '将粽叶洗净，折成漏斗状',
        '放入糯米、猪肉和咸蛋黄',
        '将粽叶包裹好，用绳子扎紧',
        '将粽子放入沸水中煮熟'
      ],
      image: '/img/粽子.jpg'
    },
    {
      festival: '中秋节',
      dish: '月饼',
      description: '月饼是中秋节的传统食物，象征着团圆。',
      ingredients: ['面粉', '糖浆', '植物油', '莲蓉', '咸蛋黄'],
      steps: [
        '将面粉、糖浆和植物油混合，揉成面团',
        '将面团分成小份，擀成皮',
        '包入莲蓉和咸蛋黄',
        '将月饼放入模具中压出形状',
        '将月饼放入烤箱中烤熟'
      ],
      image: '/img/月饼.jpg'
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">中国传统节日特辑菜谱</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <img src={recipe.image} alt={`${recipe.festival} - ${recipe.dish}`} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.festival} - {recipe.dish}</h2>
              {expandedIndex === index && (
                <>
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
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FestivalRecipes;