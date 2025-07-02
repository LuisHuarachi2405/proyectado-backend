import { CategoryRepository } from "./category.repository"
import type { CreateCategoryDto } from "./dtos/create-catergory.dto"

export class CategoryService {
  private categoryRepository = new CategoryRepository()

  async createCategory(data: CreateCategoryDto) {
    return this.categoryRepository.create(data)
  }

  async findCategoryById(id: string) {
    return this.categoryRepository.findById(id)
  }

  async updateCategory(id: string, data: CreateCategoryDto) {
    return this.categoryRepository.update(id, data)
  }

  async deleteCategory(id: string) {
    return this.categoryRepository.delete(id)
  }
}