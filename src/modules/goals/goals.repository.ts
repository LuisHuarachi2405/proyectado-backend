import { prisma } from "../../config/prisma";
import type { CreateGoalDto } from "./dtos/create-goals.dto";

export class GoalsRepository {
  async create(data: CreateGoalDto) {
    return prisma.goal.create({ data })
  }

  async findById(id: string) {
    return prisma.goal.findUnique({ where: { id } })
  }

  async update(id: string, data: Partial<CreateGoalDto>) {
    return prisma.goal.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.goal.delete({
      where: { id },
    });
  }
}