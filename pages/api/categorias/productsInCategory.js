import {pool} from '@/config/db'

export default async function productsInCategory(req, res){
    const {idCategoria} = req.body 
    const [result] = await pool.query("SELECT * FROM productos WHERE idCategoria = ?", idCategoria)
    
    console.log(result)
    return res.status(200).json(result)
}



