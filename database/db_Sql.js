// const { Sequelize } = require("sequelize")

import {Sequelize} from 'sequelize';

const db_sql = new Sequelize ('db_crud_mern', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db_sql;

