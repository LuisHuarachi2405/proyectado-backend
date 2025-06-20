export interface CreateGoalDto {
  userId: string;
  name: string;
  description?: string;
  targetAmount: number;
  priority?: 'HIGH' | 'MEDIUM' | 'LOW';
  targetDate?: Date;
}