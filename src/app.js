import express, {json} from 'express';

//Importing routes
import projectRoutes from './routes/projects.js'
import taskRoutes from './routes/task.js'

//Initialization
const app = express()

//Middlewares morgan por ejemplo
app.use(json())


//Routes
app.use('/api/projects', projectRoutes)
app.use('/api/tasks', taskRoutes)

export default app