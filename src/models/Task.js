import Sequelize from 'sequelize'
import db from '../db/db.js'

const Task = db.define('tasks', {
   id: { type: Sequelize.INTEGER, primaryKey: true},
   name: { type: Sequelize.TEXT},
   done:{ type: Sequelize.BOOLEAN},
   projectId: { type: Sequelize.INTEGER } 
},{
   timestamps: false
});

export default Task

