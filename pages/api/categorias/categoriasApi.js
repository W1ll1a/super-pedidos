import {pool} from '@/config/db'

export default async function handler(req, res){

    switch(req.method){ 
        case 'POST':
                return await saveCategoria(req,res)
        case 'GET':
            return await getCategoria(req,res)    
    }
}

const saveCategoria = async (req, res) =>{
    console.log('creating a product')
            console.log(req.body)
            const {idCategoria,categoryName,categoryDescription,categoryURL}=req.body
            const [result] = await pool.query('INSERT INTO categorias SET ?',{
                idCategoria,
                categoryName,
                categoryDescription,
                categoryURL
            })
            console.log(result)
            return res.status(200).json(result) 
}

const getCategoria = async (req,res) =>{
    const [result] = await pool.query("SELECT * FROM categorias")
    console.log(result)
    return res.status(200).json(result)
}