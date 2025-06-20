import type { Request, Response } from "express";
import { GoalsService } from "./goals.service";

export class GoalsController {
  private goalsService = new GoalsService()

  create = async(req: Request, res: Response) => {
    const goals = await this.goalsService.createGoal(req.body)
    res.status(201).json({
      'success': true,
      'data': goals
    })
  }

  findById = async (req: Request, res: Response) => {
    const goal = await this.goalsService.findGoalsById(req.params.id!)
    res.json({
      'success': true,
      'data': goal
    })
  }

  update = async(req: Request, res: Response) => {
    const goal = await this.goalsService.updateGoal(req.params.id!, req.body)
    res.status(201).json({
      'success': true,
      'data': goal
    })
  }

  delete = async (req: Request, res: Response) => {
    const goal = await this.goalsService.deleteGoal(req.params.id!)
    res.json({
      'success': true,
      'message': 'Goals delete success'
    })
  }
}