import db from "../database/db_Sql.js";
import {DataTypes, Sequelize} from "sequelize";

const BlogModelSql = db.define("blogs",{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
});

export default BlogModelSql;