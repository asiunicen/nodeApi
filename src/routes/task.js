import express from 'express'
import { getTasks, createTask, deleteTask, updateTask, getTaskById, getTaskByProject } from '../controllers/taskController.js'

const router = express.Router()

router.get('/', getTasks)
router.get('/:id', getTaskById)
router.post('/', createTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)

//ruta para las tareas de project /api/tasks/project/projectgId
router.get('/project/:projectId', getTaskByProject)


export default router