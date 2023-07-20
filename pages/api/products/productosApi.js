import {pool} from '@/config/db'

export default async function handler(req, res){

    switch(req.method){
        case 'GET': 
            return await getProductosUser(req,res)    
    }
}

const getProductosUser = async (req,res) =>{
    const [result] = await pool.query("SELECT * FROM productos WHERE idUsuario = ?")
    pool.end()
    console.log(result)
    return res.status(200).json(result)
}
