import Sequelize from 'sequelize'
import db from '../db/db.js'
import Task from './Task.js';

const Project = db.define('projects', {
   id: { type: Sequelize.INTEGER, primaryKey: true},
   name: { type: Sequelize.TEXT},
   priority: { type: Sequelize.NUMBER},
   deliverydate: { type: Sequelize.DATE},
   description: { type: Sequelize.TEXT}
}, {
   timestamps: false
});

Project.hasMany(Task, { foreingKey: 'projectId', sourceKey: 'id'})
Task.belongsTo(Project, { foreingKey: 'projectId', sourceKey: 'id'}) //muchas tareas pertenecen a un solo proyecto

export default Project