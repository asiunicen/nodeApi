import express from 'express' // import {Router} from 'express'
import { getProjects, createProject, getProjectById, deleteProject, updateProject } from '../controllers/projectController.js'

let router = express.Router()  // router = Router()

/* router.get('/', (req, res) => {
   res.send('Hello from project')
}) */

router.get('/', getProjects)
router.get('/:id', getProjectById)
router.post('/', createProject)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)

export default router