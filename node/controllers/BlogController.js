// se importa el modelo
import BlogModel from "../models/BlogModel.js";

// Método para el crud 

//========== Mostrar todos los registros ================
export const getAllBlogs = async (req, res) => {
    try {
    const blogs = await BlogModel.findAll()
    res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}


// Mostrar solo un registro
export const getblog = async(req,res) => {
    try {
        const blog = await BlogModel.findAll({
            where: {id:req.params.id}
        })
        res.json(blog[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

// CREAR UN REGISTRO

export const createBlog = async (req,res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "REGISTRO CREADO CON EXITO"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//ACTUALIZAR UN REGISTRO
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where : {id: req.params.id}
        })
        res.json({
            "message": "REGISTRO ACTUALIZADO CON EXITO"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


// ELIMINAR UN REGISTRO

export const deleteBlog = async(req,res) => {
    try {
      await  BlogModel.destroy({
            where : {id: req.params.id}
        })
        res.json({
            "message": "REGISTRO ELIMINADO CON EXITO"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}