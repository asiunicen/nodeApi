import Project from '../models/Project.js' 

export const getProjects = async(req, res) => {
   try {
      const projects = await Project.findAll();
      res.json({
         data: projects
      });
   } catch (error) {
      console.log(error);
   }
}

export const getProjectById = async(req, res) => {
   try {
      const { id } = req.params
       const project = await Project.findOne({
         where:{
            id
         }
      });
      res.status(200).json(project) // {data: project}
   } catch (error) {
      console.log(error);
   }
}

export const createProject = async (req, res) => {
   console.log(req.body);
   const { name, priority, deliverydate, description} = req.body
   try {
      let newProject = await Project.create({
         name: name,
         priority,
         deliverydate,
         description
      },{
         fields: ['name', 'priority', 'deliverydate', 'description']
      });
      if (newProject) {
         //res.send('received')
         return res.status(200).json({
            menssge: 'Project Created Successfully',
            data: newProject
         });
      }
   } catch (error) {
      console.log(error);
      res.status(500).json({
         message: 'Somethig goes Wrong...',
         data: {}
      });
   }
}


export const deleteProject = async (req, res) => {
   try {
      const { id } = req.params
      const projectDeleted = await Project.destroy({
         where:{
            id
         }
      });
      res.status(200).json({ 
         message: `${id} deleted successfully`, 
         data: projectDeleted
      });
   } catch (error) {
      console.log(error);
   }
}

export const updateProject = async (req, res) => {
   try {
      const { id } = req.params
      const { name, priority, deliverydate, description } = req.body
      const projects = await Project.findAll({
         attibutes: ['name', 'priority', 'deliverydate', 'description'],
         where: { 
            id
         }
      });
      if (projects.length > 0 ) {
         projects.forEach(async e => {
            await e.update({
               name,
               priority,
               deliverydate,
               description
            })
         });
      }
      return res.json({
         message: `Project updated successfully`,
         data: projects
      })
   } catch (error) {
      console.log(error);
   }
}
