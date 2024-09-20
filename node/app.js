import express from "express"
import cors from 'cors'

// se importa la base de datos

import db from "./database/db.js"

// se importan las rutas
import blogRoutes from "./routes/routes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)



try {
    await db.authenticate()
    console.log('Conexion exitosa a la bd')
} catch (error) {
    console.log('error al conectar a la bd:${error}')
}


app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})

app.listen(8000, ()=> {
    console.log('Servidor funcionando en http://localhost:8000/')
})