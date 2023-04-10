import {pool} from '@/config/db'
import { useUser } from '@/hooks/users';

export default async function handler(req, res){

    switch(req.method){ 
        case 'POST':
                return await saveCarrito(req,res)
        case 'GET':
            return await getCarritoProductos(req,res)    
        case 'DELETE':
            return await deleteProductoCarrito(req,res)    
    }
}

const saveCarrito = async (req, res) => {
    const { email, password } = req.body;
    const [result] = await pool.query("SELECT idUsuario from usuario where emailAdress = ?", [
      email,
    ]);
    console.log(result)
  
    if (result.length === 0) {
      console.log("No se encontró el usuario");
    } else {
      const idUsuario = result[0].idUsuario;
      await pool.query("INSERT INTO carrito (idUsuario) VALUES (?)", [idUsuario]);
      return res.status(200).json("se creo correctamente");
    }
  };
  

  const getCarritoProductos = async (req,response) =>{
    try {
        const {ProductId} = req.query
        console.log("Este es el productID que estoy enviando ", req.query)
        const [result] = await pool.query("Select * from productos where idProducto = ? ", [ProductId])
        console.log(result)
        return response.status(200).json(result)

    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Error al obtener los detalles del carrito de compras' });
    }
}

const deleteProductoCarrito = async (req, res) => {
  try {
    const {user, idProducto} = req.body
    console.log("mmmm username",user)
    
    const idUsuario = await pool.query('SELECT idUsuario from usuario where userName = ?', user)
    console.log(idUsuario[0][0].idUsuario)
    const [result] = await pool.query(
      "DELETE FROM carrito WHERE idUsuario = ? AND idProducto = ?",
      [idUsuario[0][0].idUsuario, idProducto]
    );
    console.log(result);
    return res.status(200).json("El producto fue eliminado del carrito");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al eliminar el producto del carrito" });
  }
};