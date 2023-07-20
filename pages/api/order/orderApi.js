import { pool } from "@/config/db";
import { jwt } from "jsonwebtoken";


export default async function orderHandler(req,res){
    switch(req.method){
        case 'POST':
            return await createOrder(req,res)
        case 'GET':
            return await getOrder(req,res)
    }
} 

const createOrder= async(req,res)=>{
  console.log("Llegue a crear la orden")
  const {nombreProducto, precioProducto, today} = req.body
  const [result] = await pool.query("INSERT INTO ordenes SET ?",{
    nombreProducto,
    precioProducto,
    today
  })
  console.log(result)
  return res.status(200).json(result)
}

const getOrder = async(req,res)=>{
    console.log("Voy a llevar los usuarios")
    const [result]= await pool.query("SELECT * FROM usuario")
    console.log(result)
    return res.status(200).json(result)
}


const getUser = async(req, res)=>{
    console.log (res.userName)
    const {userName} = jwt.decode(req.cookies[0])
    const [result]= await pool.query("SELECT * FROM usuario WHERE userName= ?",userName)
    console.log(userName)
    return res.status(200).json(result)


}



