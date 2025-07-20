import React from 'react';

// 定义菜谱类型（注意接口名规范，首字母建议大写）
interface Categories {
  name: string;
  description: string;
  cuisine: string[];
  image: string;
}

// 模拟分类菜谱数据
const categories: Categories[] = [
  {
    name: '川菜',
    description: '味型丰富：有麻辣、鱼香、怪味等24种味型，善用辣椒、花椒、胡椒、豆瓣酱等调味品，不同配比形成多样复合味，如麻辣、酸辣、椒麻等，呈现“一菜一格，百菜百味”的特色。 麻辣突出：麻味来自四川优质花椒，如汉源花椒，辣椒的运用也极为广泛，麻辣味是川菜的标志性味型，给人强烈的味觉冲击。',
    cuisine: ['宫保鸡丁','辣子鸡','麻婆豆腐','回锅肉','水煮肉片','泡椒风爪','鱼香肉丝','重庆火锅'],
    image: '/img/IMG_0418(20250719-125521).JPG'
  },
  {
    name: '粤菜',
    description: '粤菜即广东菜，是中国八大菜系之一，以选料精细、烹饪技艺多样、口味清鲜爽嫩为主要特点，在国内外都享有很高的声誉。',
    cuisine: ['烤乳猪', '烧鹅', '白切鸡', '清蒸石斑鱼'],
    image:'/img/IMG_0419.JPG'
  },
  {
    name: '湘菜',
    description: '湘菜即湖南菜，是中国八大菜系之一，以香辣鲜香、注重调味、刀工精细为主要特色，深受喜爱重口味人群的青睐。',
    cuisine: ['剁椒鱼头', '小炒黄牛肉', '毛氏红烧肉', '腊味合蒸'],
    image: '/img/IMG_0420.JPG'
  },
  {
    name:'鲁菜',
    description:'鲁菜即山东菜，是中国八大菜系之首，历史悠久，技法精湛，以注重调味、善用葱蒜、擅长烹制海鲜和畜禽见长，在北方地区影响深远。',
    cuisine:['葱烧海参','九转大肠','糖醋鲤鱼','油闷大虾'],
    image:'/img/IMG_0421.JPG'
  },
  {
    name:'浙菜',
    description:'浙菜即浙江菜，是中国八大菜系之一，以选料讲究、烹饪精细、口味清鲜著称，融合了浙江各地的风味特色，形成了丰富多样的流派。',
    cuisine:['西湖醋鱼','龙井虾仁','东坡肉','宁波汤圆'],
    image:'/img/IMG_0422.JPG'
  },
  {
    name:'闽菜',
    description:'闽菜即福建菜，是中国八大菜系之一，以鲜香清淡、注重汤品、擅长调味和烹制海鲜为主要特色，风味独特且富有地方风情。',
    cuisine:['佛跳墙','荔枝肉'],
    image:'/img/IMG_0423.JPG'
    },
    {
      name:'京菜',
      description:'京菜即北京菜，虽未列入传统八大菜系，但因独特的历史地位和文化融合性，形成了鲜明的地方风味，以兼容并蓄、注重火候、调味浓郁为主要特色。',
      cuisine:['北京烤鸭','炸酱面','涮羊肉'],
      image:'/img/D3B920CA4C835633A56E561B4658ADDD.jpg'
    },
    {
      name:'苏菜',
      description:'苏菜即江苏菜，是中国八大菜系之一，以选料严谨、刀工精细、口味清鲜平和、造型美观著称，融合了南京、苏州、扬州、镇江等地方风味，形成了风格多样的流派。',
      cuisine:['松鼠鳜鱼','清炖狮子头','盐水鸭','扬州炒饭'],
      image:'/img/IMG_0425(20250719-134849).JPG'
    },
];

const Qlx: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">分类菜谱</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((recipe, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.name}</h2>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <h3 className="text-lg font-medium text-gray-700 mb-2">菜品:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {recipe.cuisine.map((cuisine, i) => (
                  <li key={i}>{cuisine}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qlx;