// se importa la base de datos
import db from "../database/db.js";

// se importa sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},

})

export default BlogModel;