import { pool } from "@/config/db"

export default async function handler (req,res){
    switch(req.method){
        case 'GET':
            return await getCategoria(req, res)
        case 'DELETE':
            return await deleteCategoria(req,res)
        default:
            break 
    }
}

const getCategoria = async(req, res)=>{
    const {id} = req.query
    const [result]= await pool.query('SELECT * FROM categorias WHERE idCategoria =? ', [id])
    return res.status(200).json(result[0]) 
}

const deleteCategoria = async(req,res) =>{
    const {id} = req.query
    const result= await pool.query('DELETE FROM categorias WHERE idCategoria = ?', [id])
    
    return res.status(204).json() 
}