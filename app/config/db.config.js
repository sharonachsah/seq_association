const env  = require('./env');

const sequelize = require('sequelize');
const char = new sequelize(env.database, env.username, env.password, {
    host : env.host,
    dialect : env.dialect   
});

module.exports = char;
