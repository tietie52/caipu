'use client';
import React, { useState } from 'react';
import useStore from '../../globalState';

const FestivalRecipes: React.FC = () => {
    // 从全局状态获取节日食谱收藏相关的状态和方法
    const { 
        isFestivalFavorite, 
        toggleFestivalFavorite 
    } = useStore();

    const recipes = [
        {
            id: 1,
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
            image: '/img/饺子.jpg'
        },
        {
            id: 2,
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
                '水开后煮1.5 - 2小时，焖30分钟'
            ],
            image: '/img/粽子.jpg'
        },
        {
            id: 3,
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
            image: '/img/月饼.jpg'
        }
    ];

    // 本地状态管理展开/折叠
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    // 处理收藏状态切换（使用全局方法）
    const handleLikeToggle = (recipeId: number, e: React.MouseEvent) => {
        e.stopPropagation(); // 阻止事件冒泡到父元素
        toggleFestivalFavorite(recipeId); // 调用全局状态的方法
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">节日特辑菜谱</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                    <div 
                        key={recipe.id} 
                        className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        onClick={() => toggleExpand(recipe.id - 1)}
                    >
                        <img 
                            src={recipe.image} 
                            alt={`${recipe.festival} - ${recipe.dish}`} 
                            className="w-full h-64 object-cover" 
                        />
                        {/* 收藏按钮 - 使用全局状态判断是否收藏 */}
                        <div 
                            className="absolute top-4 right-4 text-3xl cursor-pointer"
                            onClick={(e) => handleLikeToggle(recipe.id, e)}
                        >
                            {isFestivalFavorite(recipe.id) ? 
                                <span className="text-red-500">❤️</span> : 
                                <span className="text-gray-400">♡</span>
                            }
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                {recipe.festival} - {recipe.dish}
                            </h2>
                            {expandedIndex === recipe.id - 1 && (
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