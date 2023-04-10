import {pool} from '@/config/db'

export default async function handler(req, response){

    switch(req.method){ 
        case 'POST':
                return await saveCarrito(req,response)
        case 'GET':
            return await getCarrito(req,response)    
    }
}

const saveCarrito = async (req, response) => {
  const { email, password } = req.body;
  try {
    const [result] = await pool.query("SELECT idUsuario from usuario where emailAdress = ?", [email]);
    console.log(result);

    if (result.length === 0) {
      console.log("No se encontró el usuario");
    } else {
      const idUsuario = result[0].idUsuario;
      const [carritoResult] = await pool.query("SELECT idCarrito from carrito where idUsuario = ?", [idUsuario]);
      if (carritoResult.length === 0) {
        await pool.query("INSERT INTO carrito (idUsuario) VALUES (?)", [idUsuario]);
        return response.status(200).json("se creo correctamente");
      } else {
        console.log("El usuario ya tiene un carrito");
        return response.status(200).json("El usuario ya tiene un carrito");
      }
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json("Error interno del servidor");
  }
};
  

const getCarrito = async (req, response) => {
  const { username } = req.query;
  console.log("this is the reque query",req.query);
  console.log("Y este el usna" , username);
  
  // obtener el usuario y su carrito
  const [result] = await pool.query("SELECT * FROM usuario u INNER JOIN carrito c ON u.idUsuario = c.idUsuario WHERE u.userName = ?", [username]);
  console.log("Este es el resultado", result);

  // obtener los detalles de cada producto en el carrito
  const ids = result.map((item) => item.idProducto);
  const [products] = await pool.query("SELECT * FROM productos WHERE idProducto IN (?)", [ids]);
  console.log("Estos son los productos", products);
  
  // enviar el resultado como una respuesta JSON
  return response.status(200).json( products );
}