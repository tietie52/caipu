import React, { useState, useEffect } from 'react';
import TiAomZ from './TiAom-Z';
import FestivalRecipes from './chengzipi';

// 定义菜谱类型
interface Recipe {
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  image: string;
  festival?: string;
  dish?: string;
}

const MyFavorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  const getTodayRecipes = () => {
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
    return todayRecipes;
  };

  const getFestivalRecipes = () => {
    const festivalRecipes: Recipe[] = [
      {
          festival: '春节',
          dish: '饺子',
          description: '饺子是春节的传统食物，象征着财富和团圆。',
          ingredients: [
              '中筋面粉500克',
              '温水250毫升',
              '猪肉馅300克',
              '白菜500克',
              '葱姜末各10克'
          ],
          steps: [
              '将500克面粉与250毫升温水混合，揉成光滑面团，醒发30分钟',
              '白菜切碎后加盐腌10分钟，挤干水分',
              '将肉馅、白菜、葱姜末混合，加入2勺生抽、1勺香油拌匀',
              '面团分成小剂子，擀成直径8cm的饺子皮',
              '包入适量馅料，捏紧边缘',
              '水开后下饺子，煮至浮起后再煮2分钟即可'
          ],
          image: '/img/饺子.jpg',
          name: ''
      },
      {
          festival: '端午节',
          dish: '粽子',
          description: '粽子是端午节的传统食物，纪念屈原。',
          ingredients: [
              '糯米500克(提前浸泡4小时)',
              '粽叶20片(开水煮5分钟消毒)',
              '五花肉200克(切块腌制)',
              '咸蛋黄5个'
          ],
          steps: [
              '糯米沥干水分，加入1勺生抽拌匀',
              '五花肉用老抽、料酒腌制2小时',
              '取两片粽叶叠成漏斗状',
              '放入1勺糯米、1块肉、半个咸蛋黄',
              '再盖1勺糯米，包紧后用棉线扎牢',
              '水开后煮1.5-2小时，焖30分钟'
          ],
          image: '/img/粽子.jpg',
          name: ''
      },
      {
          festival: '中秋节',
          dish: '月饼',
          description: '月饼是中秋节的传统食物，象征着团圆。',
          ingredients: [
              '中筋面粉200克',
              '转化糖浆150克',
              '花生油50克',
              '枧水4克',
              '莲蓉馅500克',
              '咸蛋黄10个'
          ],
          steps: [
              '将糖浆、花生油、枧水混合搅拌至乳化',
              '加入面粉揉成团，醒发2小时',
              '咸蛋黄喷白酒，180℃烤8分钟',
              '将馅料分成35克/个，包入半个蛋黄',
              '饼皮分成15克/个，包入馅料',
              '用模具压出形状，表面喷水',
              '200℃烤5分钟定型，刷蛋液后180℃烤15分钟'
          ],
          image: '/img/月饼.jpg',
          name: ''
      }
    ];
    return festivalRecipes;
  };

  const allRecipes = [...getTodayRecipes(), ...getFestivalRecipes()];

  useEffect(() => {
    const updatedFavorites = allRecipes.filter((recipe, index) => {
      const isTodayRecipeLiked = localStorage.getItem(`todayRecipe_${index}`) === 'true';
      const isFestivalRecipeLiked = localStorage.getItem(`festivalRecipe_${index}`) === 'true';
      return isTodayRecipeLiked || isFestivalRecipeLiked;
    });
    setFavorites(updatedFavorites);
  }, [allRecipes]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">我的收藏</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favorites.map((recipe, index) => (
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

const App: React.FC = () => {
  return (
    <div>
      <TiAomZ />
      <FestivalRecipes />
      <MyFavorites />
    </div>
  );
};

export default App;