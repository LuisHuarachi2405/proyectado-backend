import type { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  private userService = new UserService()

  create = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.createUser(req.body)

      res.json({
        'success': true,
        'message': 'User created successfully',
        'data': user
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error creating user: ${err}`,
        'data': null
      })
    }
  }

  findById = async (req: Request, res: Response) => {
    try { 
      const user = await this.userService.findUserById(req.params.id!)

      res.json({
        'success': true,
        'message': 'User found successfully',
        'data': user
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error not found: ${err}`,
        'data': null
      })
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.update(req.params.id!, req.body)

      res.json({
        'success': true,
        'message': 'User updated successfully',
        'data': user
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error updated user: ${err}`,
        'data': null
      })
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.delete(req.params.id!)

      res.json({
        'success': true,
        'message': 'User delete successfully',
        'data': user
      })
    } catch(err) {
      res.json({
        'success': false,
        'message': `Error delete user: ${err}`,
        'data': null
      })
    }
  }
}