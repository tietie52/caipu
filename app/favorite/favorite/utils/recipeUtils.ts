import { Recipe } from '@/globalData/mockData';

/**
 * 根据ID获取菜谱详情的辅助函数
 * @param id 菜谱ID
 * @param recipes 菜谱数组
 * @returns 菜谱对象或undefined
 */
export const getRecipeById = (id: number, recipes: Recipe[]): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

/**
 * 格式化菜谱材料显示
 * @param ingredients 材料数组
 * @param maxShow 最多显示的材料数量
 * @returns 格式化后的材料字符串
 */
export const formatIngredients = (ingredients: string[], maxShow: number = 3): string => {
  const showIngredients = ingredients.slice(0, maxShow).join('、');
  const suffix = ingredients.length > maxShow ? `等${ingredients.length}种` : '';
  return `材料: ${showIngredients}${suffix}`;
};

/**
 * 根据ID数组获取菜谱详情数组（过滤掉undefined）
 * @param ids 菜谱ID数组
 * @param recipes 菜谱数组
 * @returns 菜谱对象数组
 */
export const getRecipesByIds = (ids: number[], recipes: Recipe[]): Recipe[] => {
  return ids.map(id => getRecipeById(id, recipes)).filter((recipe): recipe is Recipe => recipe !== undefined);
};

/**
 * 获取节日菜谱数据
 * @returns 节日菜谱对象数组
 */
export const getFestivalRecipes = (): Recipe[] => {
  return [
    {
      id: 1,
      name: '饺子',
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
      name: '粽子',
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
      name: '月饼',
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
};