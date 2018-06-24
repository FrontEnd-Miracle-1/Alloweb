const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');
const User = require('./dataAccess/user-model');

const Task = dataAccess.connection.define('Task',{
    task_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    title: {
        type: Sequelize.TEXT
    },
    payment: {
        type: Sequelize.INTEGER
    },
    deadline: {
        type: Sequelize.DATE
    },
    status_id: {
        type: Sequelize.INTEGER
    } 

})
Task.belongsTo(User, {foreignKey: 'user_id'});

module.exports = Task;