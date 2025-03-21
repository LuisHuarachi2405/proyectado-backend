import { Router } from "express";

const router = Router()

router.get('/getGoals', (req, res) => {
  res.send('Hello World!')
})

router.post('/createGoal', (req, res) => {
  const data = req.body
  res.send(data)
})

router.put('/updateGoal/:id', (req, res) => {
  const id = req.params.id
  const data = req.body
  res.send({ id, ...data })
})

router.delete('/deleteGoal/:id', (req, res) => {
  const id = req.params.id
  res.send({ id })
})

export default router