import type { CreateGoalDto } from "./dtos/create-goals.dto";
import { GoalsRepository } from "./goals.repository";

export class GoalsService {
  private goalsRepository = new GoalsRepository();

  async createGoal (data: CreateGoalDto) {
    return this.goalsRepository.create(data)
  }

  async findGoalsById(id: string) {
    return this.goalsRepository.findById(id)
  }

  async updateGoal(id: string, data: CreateGoalDto) {
    return this.goalsRepository.update(id, data)
  }

  async deleteGoal(id: string) {
    return this.goalsRepository.delete(id)
  }
}