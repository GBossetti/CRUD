import BlogModelSql from "../models/BlogModelSql.js"; 

export const getAllBlogsSql = async (req, res) => {
    try {
        const blogs = await BlogModelSql.findAll();
        res.status(200).json(blogs);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }};

/* export const getAllBlogsPromiseSql = BlogModelSql.findAll()
    .then((blogs) => {
        console.log(blogs);
    })
    .catch((error) => {
        console.log(error);
    });
*/

export const getBlogSql = async (req, res) => {
    try {
        const blog = await BlogModelSql.findAll(
            {where:{id:req.params.id}}
        );
        res.status(200).json(blog[0]); //is the same without the index [0]
    } 
    catch(error){
        res.status(500).json(error);
    }
}

export const createBlogSql = async (req, res) => {
    try {
        await BlogModelSql.create(req.body);
        console.log(req.body);
        res.status(200).json(
            {"message":"Registro creado con éxito"}
        );
    }
    catch(error){
        res.status(500).json({message:error});
    }
}

export const updateBlogSql = async (req, res) => {
    try {
        await BlogModelSql.update(req.body, 
            {where: {id: req.params.id}}
        );
        res.status(200).json(
            {"message" : "Registro actualizado con éxito"}
        );
    }
    catch (error){
        res.status(500).json({message:error.message});
    }
}

export const deleteBlogSql = async (req, res) => {
    try{
        await BlogModelSql.destroy(
            {where: {id: req.params.id}}
        );
        res.status(200).json(
            {"message": "Registro eliminado con éxito"}
        );
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}