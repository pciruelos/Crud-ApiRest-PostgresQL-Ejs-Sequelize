import Project from '../models/project';

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll({
            atributes: ['id', 'name', 'priority', 'description', 'deliverydate']
        });
        res.render('allprojects', {data: projects});
        // res.json({
        //    data: projects
        //   });


    } catch (error) {
        console.log(error);
        res.json({

            message: 'something goes wrong'
        });
    }
};

export async function getProject(req, res) {
    const { id } = req.params;
    try {
        const project = await Project.findOne({
            where: {
                id
            }
        })
        res.json(project);

    } catch (error) {
        console.log(error);
    }
};

export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
        if (newProject) {
            return res.json({
                message: 'project created',
                data: newProject,
            });
        };

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'something goes wrongs'
        });

    };
};