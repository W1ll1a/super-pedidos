import {pool} from '@/config/db'

export default async function handler(req, res){

    switch(req.method){ 
        case 'POST':
                return await saveCarrito(req,res)
        case 'GET':
            return await getCarrito(req,res)    
    }
}

const saveCarrito = async (req, res) =>{
    console.log('creating a carrito')
            console.log(req.body)
            const {idProducto}=req.body
            const [result] = await pool.query('INSERT INTO carrito SET ?',{
                idProducto
            })
            console.log(result)
            return res.status(200).json(result) 
}

const getCarrito = async (req,res) =>{
    try {
        const [result] = await pool.query("SELECT * FROM carrito")
        console.log(result)
        return res.status(200).json(result)
        
    } catch (error) {
        return res.status(400).json("eroor")
    }
}

