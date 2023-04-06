import { pool } from "@/config/db"

export const getProducts =  async (req, res)=>{
    const {id} = req.query 
    const result =await  pool.query(`SELECT * FROM carrito WHERE idUsuario = ${id}`)
    return res.status(200).json(result)
}