
export interface DiaryPost {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

export interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    steps: string[];
    cookingTime: number;
    difficulty: 'easy' | 'medium' | 'hard';
    tags: string[];
}
  