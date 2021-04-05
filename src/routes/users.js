import express from "express";
import { createUser, getUsers, getUserById, deleteUser, updateUser } from '../controllers/userController'

let router = express.Router();

/* All routes in here are starting with /users just put the base route
router.get('/', (req, res) => {
    res.send('Hello from users.js')
}) */
router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUserById)  // Esto devuelve un objeto { id: }

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;