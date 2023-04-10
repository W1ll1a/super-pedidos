const { pool } = require("@/config/db")


export default async function agregarCarrito(req,res){
    // console.log({req})
    const username = req.body.data.user
    // console.log("This is req ", req.body.data.user)
    const usuarioId = await pool.query("SELECT idUsuario from usuario where userName =?", username)
    const idUsuario =usuarioId[0][0].idUsuario 
    const idProduct = req.body.data.idProducto
    const result  = await pool.query(`insert into carrito (idUsuario, idProducto) VALUES (${idUsuario}, ${idProduct})` )
    return res.status(200).json(result)
}