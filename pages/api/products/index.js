import {pool} from '@/config/db'

export default async function handler(req, res){

    switch(req.method){ 
        case 'POST':
                return await saveProducto(req,res)
        case 'GET':
            return await getProductos(req,res)  
        case 'PUT':
            return await updateProduct(req, res)  
    }
}

const saveProducto = async (req, res) =>{
    console.log('creating a product')
            console.log(req.body)
            const {idProducto,nombreProducto,precioProducto,descripcionProducto,idCategoria,productoURL}=req.body
            const [result] = await pool.query('INSERT INTO productos SET ?',{
                idProducto,
                nombreProducto,
                precioProducto,
                descripcionProducto,
                idCategoria,
                productoURL
            })
            console.log(result)
            return res.status(200).json(result) 
}

const getProductos = async (req,res) =>{
    const [result] = await pool.query("SELECT * FROM productos")
    console.log(result)
    return res.status(200).json(result)
}

const updateProduct = async(req, res) =>{
    const {nombreProducto,precioProducto,descripcionProducto,idCategoria,productoURL} = res.body
    const result =await pool.query(`UPDATE productos SET nombreProducto=${nombreProducto},
    precioProducto=${precioProducto}, descripcionProducto = ${descripcionProducto}, idCategoria=${idCategoria},
    productoURL = ${productoURL}` )
    return res.status(200).json(result)
}