import { pool } from "@/config/db";



export default async function handler(req,res){
    switch(req.method){
        case 'POST':
            return await saveRegister(req,res)
        case 'GET':
            return await getUser(req,res)
    }
} 

const saveRegister= async(req,res)=>{
  console.log("Llegue a crear registro")
  const {firstName,lastName,birthDate,emailAdress,userName,password} = req.body
  const [result] = await pool.query("INSERT INTO usuario SET ?",{
    firstName,
    lastName,
    birthDate,
    emailAdress,
    userName,
    password
  })
  console.log(result)
  return res.status(200).json(result)
}

const getUsers = async(req,res)=>{
    console.log("Voy a llevar los usuarios")
    const [result]= await pool.query("SELECT * FROM usuario")
    console.log(result)
    return res.status(200).json(result)
}


const getUser = async(req, res)=>{
    console.log (res.userName)
    const [userName] = req.query
    const [result]= await pool.query("SELECT password FROM usuario WHERE userName= ?",userName)
    console.log(userName)
    return res.status(200).json(result)


}



