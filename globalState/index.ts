import { create } from 'zustand';

// 收藏容器接口，添加 categoryFavorites 属性
interface FavoriteContainer {
  todayFavorites: Set<number>;
  festivalFavorites: Set<number>;
  otherFavorites: Set<number>;
  categoryFavorites: Set<number>; // 新增：分类收藏的ID
}

// GlobalState 接口，添加分类收藏相关方法
interface GlobalState {
  favoriteContainer: FavoriteContainer;

  addToTodayFavorites: (recipeId: number) => void;
  removeFromTodayFavorites: (recipeId: number) => void;
  addToFestivalFavorites: (recipeId: number) => void;
  removeFromFestivalFavorites: (recipeId: number) => void;
  addToOtherFavorites: (recipeId: number) => void;
  removeFromOtherFavorites: (recipeId: number) => void;
  addToCategoryFavorites: (recipeId: number) => void; // 新增
  removeFromCategoryFavorites: (recipeId: number) => void; // 新增

  isTodayFavorite: (recipeId: number) => boolean;
  isFestivalFavorite: (recipeId: number) => boolean;
  isOtherFavorite: (recipeId: number) => boolean;
  isCategoryFavorite: (recipeId: number) => boolean; // 新增

  getAllTodayFavorites: () => number[];
  getAllFestivalFavorites: () => number[];
  getAllOtherFavorites: () => number[];
  getAllCategoryFavorites: () => number[]; // 新增

  toggleTodayFavorite: (recipeId: number) => void;
  toggleFestivalFavorite: (recipeId: number) => void;
  toggleOtherFavorite: (recipeId: number) => void;
  toggleCategoryFavorite: (recipeId: number) => void; // 新增
}

const useStore = create<GlobalState>((set, get) => ({
  // 初始化收藏容器，添加 categoryFavorites
  favoriteContainer: {
    todayFavorites: new Set<number>(),
    festivalFavorites: new Set<number>(),
    otherFavorites: new Set<number>(),
    categoryFavorites: new Set<number>() // 新增
  },

  // 新增分类收藏方法
  addToCategoryFavorites: (recipeId: number) =>
    set((state: GlobalState) => ({
      favoriteContainer: {
        ...state.favoriteContainer,
        categoryFavorites: new Set([...state.favoriteContainer.categoryFavorites, recipeId])
      }
    })),

  removeFromCategoryFavorites: (recipeId: number) =>
    set((state: GlobalState) => {
      const newFavorites = new Set(state.favoriteContainer.categoryFavorites);
      newFavorites.delete(recipeId);
      return {
        favoriteContainer: {
          ...state.favoriteContainer,
          categoryFavorites: newFavorites
        }
      };
    }),

  isCategoryFavorite: (recipeId: number) => get().favoriteContainer.categoryFavorites.has(recipeId),

  getAllCategoryFavorites: () => Array.from(get().favoriteContainer.categoryFavorites),

  toggleCategoryFavorite: (recipeId: number) => {
    const state = get();
    if (state.favoriteContainer.categoryFavorites.has(recipeId)) {
      state.removeFromCategoryFavorites(recipeId);
    } else {
      state.addToCategoryFavorites(recipeId);
    }
  },

  // 基于ID的收藏管理方法
  addToTodayFavorites: (recipeId: number) =>
    set((state: GlobalState) => ({
      favoriteContainer: {
        ...state.favoriteContainer,
        todayFavorites: new Set([...state.favoriteContainer.todayFavorites, recipeId])
      }
    })),

  removeFromTodayFavorites: (recipeId: number) =>
    set((state: GlobalState) => {
      const newFavorites = new Set(state.favoriteContainer.todayFavorites);
      newFavorites.delete(recipeId);
      return {
        favoriteContainer: {
          ...state.favoriteContainer,
          todayFavorites: newFavorites
        }
      };
    }),

  addToFestivalFavorites: (recipeId: number) =>
    set((state: GlobalState) => ({
      favoriteContainer: {
        ...state.favoriteContainer,
        festivalFavorites: new Set([...state.favoriteContainer.festivalFavorites, recipeId])
      }
    })),

  removeFromFestivalFavorites: (recipeId: number) =>
    set((state: GlobalState) => {
      const newFavorites = new Set(state.favoriteContainer.festivalFavorites);
      newFavorites.delete(recipeId);
      return {
        favoriteContainer: {
          ...state.favoriteContainer,
          festivalFavorites: newFavorites
        }
      };
    }),

  addToOtherFavorites: (recipeId: number) =>
    set((state: GlobalState) => ({
      favoriteContainer: {
        ...state.favoriteContainer,
        otherFavorites: new Set([...state.favoriteContainer.otherFavorites, recipeId])
      }
    })),

  removeFromOtherFavorites: (recipeId: number) =>
    set((state: GlobalState) => {
      const newFavorites = new Set(state.favoriteContainer.otherFavorites);
      newFavorites.delete(recipeId);
      return {
        favoriteContainer: {
          ...state.favoriteContainer,
          otherFavorites: newFavorites
        }
      };
    }),

  // 检查是否已收藏
  isTodayFavorite: (recipeId: number) => get().favoriteContainer.todayFavorites.has(recipeId),
  isFestivalFavorite: (recipeId: number) => get().favoriteContainer.festivalFavorites.has(recipeId),
  isOtherFavorite: (recipeId: number) => get().favoriteContainer.otherFavorites.has(recipeId),

  // 获取所有收藏的ID
  getAllTodayFavorites: () => Array.from(get().favoriteContainer.todayFavorites),
  getAllFestivalFavorites: () => Array.from(get().favoriteContainer.festivalFavorites),
  getAllOtherFavorites: () => Array.from(get().favoriteContainer.otherFavorites),

  // 切换收藏状态（基于ID）
  toggleTodayFavorite: (recipeId: number) => {
    const state = get();
    if (state.favoriteContainer.todayFavorites.has(recipeId)) {
      state.removeFromTodayFavorites(recipeId);
    } else {
      state.addToTodayFavorites(recipeId);
    }
  },

  toggleFestivalFavorite: (recipeId: number) => {
    const state = get();
    if (state.favoriteContainer.festivalFavorites.has(recipeId)) {
      state.removeFromFestivalFavorites(recipeId);
    } else {
      state.addToFestivalFavorites(recipeId);
    }
  },

  toggleOtherFavorite: (recipeId: number) => {
    const state = get();
    if (state.favoriteContainer.otherFavorites.has(recipeId)) {
      state.removeFromOtherFavorites(recipeId);
    } else {
      state.addToOtherFavorites(recipeId);
    }
  },
}));

export default useStore;