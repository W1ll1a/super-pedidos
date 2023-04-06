import { pool } from "@/config/db"

export default async function getProductosFromId (req,res){
    console.log("entre en Productos por id")
    try{
        const {id} = req.query
        console.log(id)
        const {result}= await pool.query('SELECT * FROM productos WHERE idProducto = ? ', [id])
        console.log("envie producto", result)
        return res.status(200).json(result)  

    }catch(error){  
        return res.status(404).json("no se encontro producto")

    }
}

