import { pool } from "@/config/db"

export default async function getProductosCategory (req,res){
    console.log("entre en productoCategorias")
    try{
        const {id} = req.query
        const [result]= await pool.query('SELECT * FROM productos WHERE idCategoria = ? ', [id])
        return res.status(200).json(result) 

    }catch(error){  
        return res.status(404).json("no se encontro producto")

    }
}

