import axios from "axios"
import { jwt } from "jsonwebtoken"
import { pool } from "@/config/db"

export const getUser = async(req, res)=>{
    console.log (res.userName)
    const {userName} = jwt.decode(req.cookies[0])
    const [result]= await pool.query("SELECT * FROM usuario WHERE userName= ?",userName)
    console.log(userName)
    return res.status(200).json(result)


}