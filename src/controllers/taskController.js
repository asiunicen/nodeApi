import Task from '../models/Task.js'

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            attributes: ['id','name','done','projectId'],
            order: [
                ['id', 'DESC'] 
            ]
        });
        res.json({
            data: tasks
        })

    } catch (error) {
        console.log(error);
    }
}

export const getTaskById = async (req, res) => {
    const { id } = req.params
    try {
        const task = await Task.findOne({
            where: { id }
        })
        res.json({task})
    } catch (error) {
        console.log(error);
    }
}

export const createTask = async (req, res) => {
    const { name, done, projectId } = req.body
    try {
        const newTask = await Task.create({
            name,
            done,
            projectId
        }, {
            fields: ['name', 'done', 'projectId']
        })
        res.json({
            message: `Task was created`,
            data: newTask
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const taskDeleted = await Task.destroy({
            where: {
                id
            }
        });
        res.status(200).json({ 
            message: `${id} deleted successfully`, 
            data: taskDeleted
         });
    } catch (error) {
        console.log(error);
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const { name, done, projectId } = req.body
        const task = await Task.findOne({
            attributes: ['name', 'done', 'projectId'],
            where:  {
                id
            }
        })
        const updatedTask = await Task.update({
            name,
            done,
            projectId
        }, {
            where: {id}
        })

        /*if(task.length > 0 ){
            task.forEach( async e => {
                await e.update({
                    name,
                    done,
                    projectId
                })
            });
        }*/
        return res.status(200).json({
            message: `Task updated successfully`,
            data: updatedTask
        })
    } catch (error) {
        console.log(error);
    }
}

/* api/tasks/project/id QUIERO TODAS LAS TAREAS DE UN PROYECTO DADO*/
export const getTaskByProject = async (req, res) => {
    const { projectId } = req.params
    const taskProject = await Task.findAll({
        attributes: ['id', 'name', 'done', 'projectId'],
        where: { projectId }
    })
    res.json({ taskProject })
}