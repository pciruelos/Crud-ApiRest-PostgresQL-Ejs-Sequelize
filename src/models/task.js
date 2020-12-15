import Sequelize from 'sequelize';

import { sequelize } from '../database/database';

const Task = sequelize.define('tasks', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT
    },
    done:{
        type: Sequelize.BOOLEAN
    },
    projectId:{
        type: Sequelize.INTEGER

    },
   
}, {
    timestamp: false,
});

module.exports = Task ;