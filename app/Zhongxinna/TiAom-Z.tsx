import React from 'react';

// 定义菜谱类型
interface Recipe {
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  image: string;
}

// 模拟今日推荐菜谱数据
const todayRecipes: Recipe[] = [
  {
    name: '红烧肉',
    description: '红烧肉是一道经典的中式菜肴，色泽红亮，肥而不腻。',
    ingredients: ['五花肉', '葱', '姜', '蒜', '料酒', '生抽', '老抽', '冰糖', '八角', '桂皮'],
    steps: [
      '将五花肉切成小块，冷水下锅，加入料酒、姜片，焯水捞出。',
      '锅中热油，放入冰糖，小火炒出糖色。',
      '加入五花肉块翻炒，使每块肉都裹上糖色。',
      '加入葱、姜、蒜、八角、桂皮炒香。',
      '加入生抽、老抽调味，翻炒均匀。',
      '加入适量清水，没过肉，大火烧开后转小火慢炖40 - 50分钟。',
      '最后大火收汁即可。'
    ],
    image: '/img/红烧肉.jpg'
  },
  {
    name: '西红柿炒鸡蛋',
    description: '西红柿炒鸡蛋是一道简单又美味的家常菜，营养丰富。',
    ingredients: ['西红柿', '鸡蛋', '葱', '盐', '糖', '生抽', '食用油'],
    steps: [
      '将西红柿洗净切块，鸡蛋打入碗中，加入少许盐，搅拌均匀。',
      '锅中热油，倒入鸡蛋液，炒熟盛出。',
      '锅中再倒少许油，放入葱花炒香。',
      '加入西红柿块翻炒，加入盐、糖、生抽调味。',
      '将炒好的鸡蛋倒入锅中，与西红柿一起翻炒均匀即可。'
    ],
    image: '/img/西红柿炒鸡蛋.jpg'
  },
  {
    name: '清蒸鱼',
    description: '清蒸鱼能保留鱼的原汁原味，鲜嫩可口。',
    ingredients: ['鱼', '葱', '姜', '蒜', '蒸鱼豉油', '食用油', '料酒', '盐'],
    steps: [
      '将鱼处理干净，在鱼身上划几刀，用盐、料酒腌制15 - 20分钟。',
      '葱、姜、蒜切丝，铺在鱼身上。',
      '锅中加水烧开，将鱼放入蒸锅中，大火蒸8 - 10分钟。',
      '倒掉盘中多余的水分，淋上蒸鱼豉油。',
      '在鱼身上撒上葱花，淋上热油即可。'
    ],
    image: '/img/清蒸鱼.jpg'
  }
];

const TiAomZ: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">今日推荐菜谱</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {todayRecipes.map((recipe, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
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

export default TiAomZ;