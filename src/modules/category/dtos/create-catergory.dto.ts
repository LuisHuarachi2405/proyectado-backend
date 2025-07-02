export interface CreateCategoryDto {
  userId: string;
  name: string;
  description?: string;
  color?: string;
  icon?: string;
  type: 'INCOME' | 'EXPENSE';
}