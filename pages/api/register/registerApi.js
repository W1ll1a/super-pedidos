import { pool } from "@/config/db";
import { jwt } from "jsonwebtoken";

import bcrypt from 'bcrypt'; // Importamos bcrypt para encriptar la contraseña

// Función para encriptar la contraseña
const hashPassword = async (password) => {
  const saltRounds = 10; // Mayor número de saltos, mayor seguridad (pero más lento)
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
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
  const {firstName,lastName,birthDate,emailAdress,userName,password,profilePicture} = req.body
  const hashedPassword = await hashPassword(password);
  const [result] = await pool.query("INSERT INTO usuario SET ?",{
    firstName,
    lastName,
    birthDate,
    emailAdress,
    userName,
    password: hashedPassword,
    profilePicture
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
    const {userName} = jwt.decode(req.cookies[0])
    const [result]= await pool.query("SELECT * FROM usuario WHERE userName= ?",userName)
    console.log(userName)
    return res.status(200).json(result)


}



