import { Router } from 'express';
import TaskSchema from '../models/taskModel';

const router = Router();

router.post('/todo', async (req, res) => {
  try {
    const newTask = await new TaskSchema(req.body);
    res.send(newTask);
  } catch (error) {
    res.send(error);
  }
});

router.get('/todo', async (req, res) => {
  try {
    const tasks = await TaskSchema.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.delete('/todo/:id', async (req, res) => {
  try {
    const task = await TaskSchema.findByIdAndDelete(req.params.id);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

export default router;
